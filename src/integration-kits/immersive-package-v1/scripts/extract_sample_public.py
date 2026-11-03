"""One-time sample extraction for this standalone preview. NOT the future bulk importer.

Reads EXBHP01-03 using artifact_tool. Intentionally excludes ALL raw pricing,
hotel supplement matrices, Main Info amount, and commission/commercial notes.
Only public-safe operational notes are included under narrow allowlist.
"""
from pathlib import Path
import json, re
from artifact_tool import Blob, SpreadsheetFile

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path('/mnt/data')
output=[]
allowed_notes = [
    'The chauffeur-driven private transport',
    'The vehicle will be provided for the exact itinerary',
    'Our vehicle includes the following services',
    'The confirmation of rooms at desired hotels',
]
for n in [1,2,3]:
    name=f'EXBHP{n:02d}'
    wb=SpreadsheetFile.import_xlsx(Blob.load(str(SOURCE/f'{name}.xlsx')))
    def sheet_rows(sheet, cols=1, maxrows=300):
        # get_current_region avoids reading trailing blank cells
        data=wb.worksheets.get_item(sheet).get_range('A1').get_current_region().values
        return [[v for v in row[:cols]] for row in data]
    hdr, main = sheet_rows('Main Info',9)[:2]
    info=dict(zip(hdr,main))
    def col(sheet):
        rows=sheet_rows(sheet)
        return [r[0].strip() for r in rows[1:] if r and isinstance(r[0],str) and r[0].strip()]
    itineraries=[]
    for r in sheet_rows('Itineraries',4)[1:]:
        if len(r)>=4 and isinstance(r[2],str) and r[2].strip():
            itineraries.append({'dayLabel':str(r[1] or '').strip(), 'title':r[2].strip(), 'body':str(r[3] or '').strip()})
    facts=[]
    for r in sheet_rows('Facts',2)[1:]:
        if len(r)>1 and isinstance(r[0],str) and r[0].strip() and r[1] is not None:
            facts.append({'title':r[0].strip(),'description':str(r[1]).strip()})
    notes=col('Please Note')
    public_notes=[v for v in notes if any(v.startswith(prefix) for prefix in allowed_notes)]
    record={
        'schemaVersion':1,
        'code':str(info['code']).strip(),
        'slug':str(info['code']).strip().lower(),
        'title':str(info['title']).strip(),
        'durationDays':int(info['max_days']),
        'durationNights':int(info['max_days'])-1,
        'nightsDerived':True,
        'routeRaw':str(info['route']).strip(),
        'highlights':col('Highlights'),
        'itineraries':itineraries,
        'inclusions':col('Included'),
        'exclusions':col('Excluded'),
        'facts':facts,
        'publicNotes':public_notes,
        'media':{'hero':None,'highlights':[],'itinerary':[]},
        'status':'preview',
        'source':{'workbook':f'{name}.xlsx','revision':1,'importMode':'sample-snapshot-no-importer'},
        'reviewFlags':(['Nights are derived from days - 1; cross-check accommodation.'] if int(info['max_days'])>0 else [])
    }
    assert len(itineraries)==record['durationDays'],(name,'days mismatch')
    output.append(record)

def validate(p):
    assert len(set(x['code'] for x in p))==len(p)
    assert all(x['highlights'] and x['itineraries'] for x in p)
    assert all(not re.search(r'\bcommissions?\b|\bINR\b|\bGST\b|\bquotes?\b|\brates?\b|\bpricing\b|₹',json.dumps(x,ensure_ascii=False),re.I) for x in p),'Potential confidential language in public data; audit required'
validate(output)
path=ROOT/'data'/'public-packages.json'
path.write_text(json.dumps(output,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
for p in output:
    print(p['code'],p['title'],'days',len(p['itineraries']),'highlights',len(p['highlights']),'included',len(p['inclusions']),'excluded',len(p['exclusions']),'facts',len(p['facts']),'public notes',len(p['publicNotes']))
print('Saved',path)
