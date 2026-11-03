import fs from 'node:fs';
import assert from 'node:assert/strict';
const packages=JSON.parse(fs.readFileSync(new URL('../data/public-packages.json',import.meta.url),'utf8'));
let checks=0;
const check=(condition,message)=>{assert.ok(condition,message);checks++};
check(packages.length===3,'3 sample packages');
check(new Set(packages.map(p=>p.code)).size===3,'unique codes');
for(const p of packages){
 check(/^EXBHP0[1-3]$/.test(p.code),p.code+' code');
 check(p.slug===p.code.toLowerCase(),p.code+' slug');
 check(p.durationDays===p.itineraries.length,p.code+' day count');
 check(p.durationNights===p.durationDays-1,p.code+' derived night count');
 check(p.nightsDerived===true,p.code+' derived flag');
 check(p.highlights.length>=3,p.code+' highlights');
 check(p.inclusions.length>0,p.code+' included items');
 check(p.exclusions.length>0,p.code+' excluded items');
 check(p.facts.length===5,p.code+' trip facts');
 check(p.itineraries.every(d=>d.title&&d.body.length>100),p.code+' itinerary body');
 check(!('pricing' in p)&&!('amount' in p)&&!('hotelSupplements' in p),p.code+' no private rates');
 check(!/\bcommission\b|\bGST\b|\bINR\b|\brating\s*\d/i.test(JSON.stringify(p)),p.code+' no commercial notes');
}
const counts={EXBHP01:[3,3],EXBHP02:[4,5],EXBHP03:[5,7]};
for(const p of packages){check(p.itineraries.length===counts[p.code][0],p.code+' itinerary count');check(p.highlights.length===counts[p.code][1],p.code+' highlights count');}
console.log(`${checks}/${checks} public contract assertions passed`);
