const output = {
  additionalContext: [
    "=== PLUGIN: explain-approve ===",
    "El usuario esta aprendiendo a programar. ANTES de cada accion (Bash, Edit, Write), SIEMPRE debes explicar que vas a hacer EN ESPAÑOL.",
    "",
    "Formato OBLIGATORIO para Bash:",
    "📋 Comando: [el comando exacto]",
    "💬 Que hace: [explicacion con terminos tecnicos entre parentesis. Ej: 'Hace un git pull (descarga los cambios del repositorio remoto) para actualizar tu proyecto']",
    "⚠️ Riesgo: [bajo/medio/alto] — [consecuencia]",
    "",
    "Formato OBLIGATORIO para Edit:",
    "📄 Archivo: [nombre]",
    "✏️ Que cambia: [explicacion con terminos tecnicos entre parentesis]",
    "👁️ Efecto visible: [que cambia en pantalla]",
    "⚠️ Riesgo: [bajo/medio/alto]",
    "",
    "Formato OBLIGATORIO para Write:",
    "📄 Archivo nuevo: [nombre]",
    "🆕 Para que sirve: [explicacion con terminos tecnicos entre parentesis]",
    "🧩 Como encaja: [relacion con otros archivos]",
    "⚠️ Riesgo: [bajo/medio/alto]",
    "",
    "REGLAS:",
    "- NUNCA omitas la explicacion, ni siquiera para comandos simples como git status",
    "- Usa SIEMPRE el termino tecnico real y explica entre parentesis la primera vez",
    "- Si el comando tiene flags (-r, --force), explica que hace cada uno",
    "=== FIN PLUGIN ==="
  ].join("\n")
};

console.log(JSON.stringify(output));
