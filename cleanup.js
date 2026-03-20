const fs = require('fs');
let css = fs.readFileSync('client/src/index.css', 'utf-8');

function removeRegion(str, start, end) {
    let s = str.indexOf(start);
    let e = str.indexOf(end, s);
    if (s !== -1 && e !== -1) {
        return str.substring(0, s) + str.substring(e);
    }
    return str;
}

css = removeRegion(css, '/* HERO */', '/* SHARED */');
css = removeRegion(css, '/* INTRO */', '/* FOOTER */');
css = removeRegion(css, '/* CONTACT FORM */', '/* ═══════════════════════════════════════\n   ADMIN PANEL');
css = removeRegion(css, '/* ═══════════════════════════════════════\n   ADMIN PANEL', '/* CTA BANNER */');
let ctaStart = css.indexOf('/* CTA BANNER */');
if (ctaStart !== -1) {
    css = css.substring(0, ctaStart);
}

const respRegex = /\/\* RESPONSIVE \*\/[\s\S]*?@media\(max-width:640px\)[\s\S]*?\}/;
const newResp = `/* RESPONSIVE */
@media(max-width:1024px){
  footer{grid-template-columns:1fr 1fr;}
}
@media(max-width:640px){
  footer{grid-template-columns:1fr;}
  .nav-links{display:none;}
}`;
css = css.replace(respRegex, newResp);

fs.writeFileSync('client/src/index.css', css);
console.log('Cleaned up index.css');
