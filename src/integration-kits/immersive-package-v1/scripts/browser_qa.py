from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).resolve().parents[1]
html=(root/'OPEN_PREVIEW.html').read_text(encoding='utf8')
with sync_playwright() as p:
 b=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 for width,height,label in [(1440,900,'desktop'),(390,844,'mobile')]:
  page=b.new_page(viewport={'width':width,'height':height},device_scale_factor=1)
  errors=[]
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.set_content(html,wait_until='load')
  page.wait_for_timeout(800)
  print(label,'title:',page.title(),'h1:',page.locator('h1').inner_text())
  print('  highlights',page.locator('.highlight-card').count(),'itinerary days',page.locator('.day-panel').count(),'actual img loaded',page.locator('img').evaluate_all('(els)=>els.filter(x=>x.complete && x.naturalWidth>0).length'))
  print('  width scroll',page.evaluate('document.documentElement.scrollWidth'),'viewport',width,'errors',errors)
  if label=='desktop':
   page.locator('#expand-days').click()
   assert page.locator('.day-panel[open]').count()==3,'expand days broken'
   page.locator('#collapse-days').click()
   assert page.locator('.day-panel[open]').count()==0,'collapse days broken'
   page.locator('#package-select').select_option('exbhp02')
   assert page.locator('h1').inner_text()=='Bhopal-Pachmarhi Sojourn'
   assert page.locator('.day-panel').count()==4
   page.locator('#package-select').select_option('exbhp03')
   assert page.locator('.day-panel').count()==5
   print('  selector + expand/collapse working')
   page.locator('#package-select').select_option('exbhp01')
  path=root/f'{label.upper()}_PREVIEW.png'
  page.screenshot(path=str(path),full_page=True,animations='disabled')
  print('  screenshot',path.name,path.stat().st_size)
  assert not errors,errors
  assert page.evaluate('document.documentElement.scrollWidth')<=width+2,'horizontal overflow'
  page.close()
 b.close()
