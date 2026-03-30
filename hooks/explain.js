const fs = require('fs');

let raw = '';
try {
  raw = fs.readFileSync(0, 'utf-8');
} catch (e) {
  process.exit(0);
}

let input;
try {
  input = JSON.parse(raw.trim());
} catch (e) {
  process.exit(0);
}

const toolName = input.tool_name || '';
const toolInput = input.tool_input || {};

function getFileName(filePath) {
  if (!filePath) return 'desconocido';
  return filePath.replace(/\\/g, '/').split('/').pop();
}

let explanation = '';

if (toolName === 'Bash') {
  const cmd = toolInput.command || '';
  explanation = [
    '📋 Comando: ' + cmd,
    '💬 Esto va a correr un comando en la terminal (el programa donde se escriben instrucciones al sistema). Revisa que sea lo que esperabas antes de aprobar.',
    '⚠️ Si no entendes que hace, rechazalo y pedile a Claude que te explique.'
  ].join('\n');
} else if (toolName === 'Edit') {
  const fileName = getFileName(toolInput.file_path);
  explanation = [
    '📄 Archivo: ' + fileName,
    '✏️ Esto va a modificar parte del codigo de este archivo. Un Edit cambia lineas especificas sin tocar el resto.',
    '⚠️ Si no entendes el cambio, rechazalo y pedile a Claude que te explique.'
  ].join('\n');
} else if (toolName === 'Write') {
  const fileName = getFileName(toolInput.file_path);
  explanation = [
    '📄 Archivo nuevo: ' + fileName,
    '🆕 Esto va a crear un archivo nuevo en tu proyecto. No reemplaza ningun archivo existente.',
    '⚠️ Si no entendes para que sirve, rechazalo y pedile a Claude que te explique.'
  ].join('\n');
}

if (explanation) {
  console.log(JSON.stringify({ additionalContext: explanation }));
}
