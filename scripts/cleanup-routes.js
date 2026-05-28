const fs = require('fs');
const path = require('path');

const rotasDir = path.join(__dirname, '..', 'aplicativo', 'rotas');
const vistasDir = path.join(__dirname, '..', 'aplicativo', 'vistas');

function checkAndFix(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split(/\r?\n/);
  let changed = false;

  const sendFileRegex = /res\.sendFile\(path\.join\(__dirname,\s*['"]\.\.[\/]vistas[\/]([^'"]+)['"]\)\);/;
  const renderRegex = /res\.render\(\s*['"]([^'"]+)['"]\s*\);/;

  const newLines = lines.map((line) => {
    let m = line.match(sendFileRegex);
    if (m) {
      const rel = m[1];
      const target = path.join(path.dirname(filePath), '..', 'vistas', rel);
      const absolute = path.resolve(target);
      if (!fs.existsSync(absolute)) {
        changed = true;
        return `// REMOVED BY cleanup-routes.js: arquivo ausente -> ${absolute}`;
      }
      return line;
    }

    m = line.match(renderRegex);
    if (m) {
      const renderPath = m[1];
      const parts = renderPath.split('/');
      const renderFile = path.join(vistasDir, ...parts) + '.ejs';
      if (!fs.existsSync(renderFile)) {
        changed = true;
        return `// REMOVED BY cleanup-routes.js: template ausente -> ${renderFile}`;
      }
      return line;
    }

    return line;
  });

  if (changed) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function main() {
  const files = fs.readdirSync(rotasDir).filter(f => f.endsWith('.js'));
  files.forEach(f => checkAndFix(path.join(rotasDir, f)));
  console.log('Cleanup complete.');
}

main();
