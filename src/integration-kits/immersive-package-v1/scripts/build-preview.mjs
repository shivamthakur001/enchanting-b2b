import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const get=(rel)=>fs.readFileSync(path.join(root,rel),'utf8');
const records=JSON.parse(get('data/public-packages.json'));
if(!Array.isArray(records)||records.length!==3)throw Error('Expected 3 public package samples');
const whitelist=['sanchi-preview.webp','lake-preview.webp','heritage-preview.webp','nature-preview.webp','safari-preview.webp','interior-preview.webp','royal-preview.webp','temple-preview.webp'];
const sources=Object.fromEntries(whitelist.map(name=>[name,'data:image/webp;base64,'+fs.readFileSync(path.join(root,'assets',name)).toString('base64')]));
function scriptSafe(json){return JSON.stringify(json).replace(/</g,'\\u003c').replace(/>/g,'\\u003e').replace(/&/g,'\\u0026').replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');}
const replacements={
 '/*__INLINE_CSS__*/':get('src/style.css'),
 '/*__PUBLIC_JSON__*/':scriptSafe(records),
 '/*__DEMO_ASSETS__*/':scriptSafe(sources),
 '/*__INLINE_JS__*/':get('build/app.js')
};
let html=get('src/index.template.html');
for (const [key,value] of Object.entries(replacements)){if(!html.includes(key))throw Error('Missing token '+key);html=html.replace(key,value)}
if(html.includes('/*__'))throw Error('Unreplaced template token');
const forbidden=[/\bcommissionable\b/i,/\bprivate\s+rate\s+\d/i,/"summer_double"/i,/"winter_double"/i,/"supplement_name"/i,/"amount":\s*\d/i];
for (const test of forbidden){if(test.test(html))throw Error('Potentially private source data in public preview: '+test)}
fs.writeFileSync(path.join(root,'OPEN_PREVIEW.html'),html,'utf8');
console.log('Created OPEN_PREVIEW.html ('+(html.length/1024|0)+' KB; inline styles, compiled app, 3 public packages and demo images)');
