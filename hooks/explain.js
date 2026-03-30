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

let explanation = '';

if (toolName === 'Bash') {
  const cmd = toolInput.command || '';
  explanation = `📋 Comando: ${cmd}\n💬 Esto va a correr un comando en la terminal (el programa donde se escriben instrucciones al sistema). Revisa que sea lo que esperabas antes de aprobar.\n⚠️ Si no entendes que hace, rechazalo y pedile a Claude que te explique.`;
} else if (toolName === 'Edit') {
  const file = toolInput.file_path || '';
  const fileName = file.split(/[/\]/).pop();
  explanation = `📄 Archivo: ${fileName}\n✏️ Esto va a modificar parte del codigo de este archivo. Un Edit cambia lineas especificas sin tocar el resto.\n⚠️ Si no entendes el cambio, rechazalo y pedile a Claude que te explique.`;
} else if (toolName === 'Write') {
  const file = toolInput.file_path || '';
  const fileName = file.split(/[/\]/).pop();
  explanation = `📄 Archivo nuevo: ${fileName}\n🆕 Esto va a crear un archivo nuevo en tu proyecto. No reemplaza ningun archivo existente.\n⚠️ Si no entendes para que sirve, rechazalo y pedile a Claude que te explique.`;
}

if (explanation) {
  console.log(JSON.stringify({ additionalContext: explanation }));
}
