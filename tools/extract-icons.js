// Script para extraer todos los iconos de los SVG en la carpeta icons/svg y generar un array listo para Angular
// Uso: node extract-icons.js

const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, '../projects/slyfox-components/icons/svg');
const outputJson = path.join(__dirname, '../projects/showcase/src/assets/icons-list.json');
console.log(`Buscando iconos en: ${svgDir}`);

function extractSymbolsFromFile(filePath, category) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /<symbol[^>]*id="([^"]+)"/g;
  const icons = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    icons.push({ category, name: match[1] });
  }
  return icons;
}

function main() {
  const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'));
  let allIcons = [];
  for (const file of files) {
    const category = path.basename(file, '.svg');
    const filePath = path.join(svgDir, file);
    const icons = extractSymbolsFromFile(filePath, category);
    allIcons = allIcons.concat(icons);
  }
  // Escribe el array en un archivo JSON
  fs.writeFileSync(outputJson, JSON.stringify(allIcons, null, 2), 'utf8');
  console.log(`Iconos exportados a: ${outputJson}`);
}

main();
