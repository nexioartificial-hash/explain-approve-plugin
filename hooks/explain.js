const input = JSON.parse(process.env.HOOK_INPUT || '{}');
const toolName = input.tool_name || 'unknown';
const toolInput = input.tool_input || {};

let explanation = '';

if (toolName === 'Bash') {
  const cmd = toolInput.command || '';
  explanation = `\n📋 Comando: ${cmd}\n💬 Esto va a correr un comando en la terminal. Revisa que sea lo que esperabas antes de aprobar.\n⚠️ Si no entendes que hace, podes rechazarlo y pedirle a Claude que te explique.\n`;
} else if (toolName === 'Edit') {
  const file = toolInput.file_path || '';
  const fileName = file.split(/[/\]/).pop();
  explanation = `\n📄 Archivo: ${fileName}\n✏️ Esto va a modificar parte del codigo de este archivo.\n⚠️ Si no entendes el cambio, podes rechazarlo y pedirle a Claude que te explique.\n`;
} else if (toolName === 'Write') {
  const file = toolInput.file_path || '';
  const fileName = file.split(/[/\]/).pop();
  explanation = `\n📄 Archivo nuevo: ${fileName}\n🆕 Esto va a crear un archivo nuevo en tu proyecto.\n⚠️ Si no entendes para que sirve, podes rechazarlo y pedirle a Claude que te explique.\n`;
}

if (explanation) {
  // Output as additionalContext so it shows before approval
  console.log(JSON.stringify({ additionalContext: explanation }));
}
