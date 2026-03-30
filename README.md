# explain-approve

Plugin para Claude Code que explica cada accion en español antes de que la apruebes. Pensado para personas que estan aprendiendo a programar.

## Que hace?

Cada vez que Claude Code va a hacer algo (correr un comando, editar un archivo o crear uno nuevo), primero te explica que va a pasar. Usa los terminos tecnicos reales pero los explica entre parentesis, asi vas aprendiendo el vocabulario mientras entendes que pasa.

### Hooks incluidos

| Accion | Que explica |
|--------|-------------|
| **Bash** | Que hace el comando, que hacen sus flags, y el nivel de riesgo |
| **Edit** | Que parte del codigo cambia, por que, y el efecto visible en pantalla |
| **Write** | Para que sirve el archivo nuevo y como encaja en el proyecto |

### Ejemplo

Cuando Claude va a correr un comando, vas a ver algo asi antes de aprobarlo:

```
📋 Comando: git status
💬 Que hace: Muestra el estado del repositorio Git (el sistema que
   guarda el historial de cambios de tu codigo) — archivos modificados,
   nuevos (untracked) y staged (listos para guardar).
⚠️ Riesgo: Bajo — solo lectura, no modifica nada.
```

## Instalacion

### Paso 1: Instalar el plugin

```bash
# Agregar el marketplace (solo la primera vez)
claude plugin marketplace add https://github.com/nexioartificial-hash/explain-approve-plugin.git

# Instalar el plugin
claude plugin install explain-approve
```

### Paso 2: Crear el archivo de instrucciones globales

Crea el archivo `~/.claude/CLAUDE.md` con este contenido:

```markdown
# Instrucciones globales

## Explicar antes de actuar

ANTES de cada Bash, Edit o Write, SIEMPRE explicar que vas a hacer EN ESPAÑOL con este formato:

**Para Bash:**
📋 Comando: [el comando exacto]
💬 Que hace: [explicacion con terminos tecnicos entre parentesis]
⚠️ Riesgo: [bajo/medio/alto] — [consecuencia]

**Para Edit:**
📄 Archivo: [nombre]
✏️ Que cambia: [explicacion con terminos tecnicos entre parentesis]
⚠️ Riesgo: [bajo/medio/alto]

**Para Write:**
📄 Archivo nuevo: [nombre]
🆕 Para que sirve: [explicacion con terminos tecnicos entre parentesis]
⚠️ Riesgo: [bajo/medio/alto]

REGLAS:
- NUNCA omitir la explicacion, ni siquiera para comandos simples como git status
- Usar SIEMPRE el termino tecnico real y explicar entre parentesis la primera vez
- Si el comando tiene flags (-r, --force), explicar que hace cada uno
```

**En Windows (PowerShell):**
```powershell
# Copia y pega esto en PowerShell para crear el archivo automaticamente:
$content = @"
# Instrucciones globales

## Explicar antes de actuar

ANTES de cada Bash, Edit o Write, SIEMPRE explicar que vas a hacer EN ESPAÑOL con este formato:

**Para Bash:**
📋 Comando: [el comando exacto]
💬 Que hace: [explicacion con terminos tecnicos entre parentesis]
⚠️ Riesgo: [bajo/medio/alto] — [consecuencia]

**Para Edit:**
📄 Archivo: [nombre]
✏️ Que cambia: [explicacion con terminos tecnicos entre parentesis]
⚠️ Riesgo: [bajo/medio/alto]

**Para Write:**
📄 Archivo nuevo: [nombre]
🆕 Para que sirve: [explicacion con terminos tecnicos entre parentesis]
⚠️ Riesgo: [bajo/medio/alto]

REGLAS:
- NUNCA omitir la explicacion, ni siquiera para comandos simples como git status
- Usar SIEMPRE el termino tecnico real y explicar entre parentesis la primera vez
- Si el comando tiene flags (-r, --force), explicar que hace cada uno
"@
$content | Out-File -FilePath "$env:USERPROFILE\.claude\CLAUDE.md" -Encoding utf8
```

**En Mac/Linux:**
```bash
cat > ~/.claude/CLAUDE.md << 'EOF'
# Instrucciones globales

## Explicar antes de actuar

ANTES de cada Bash, Edit o Write, SIEMPRE explicar que vas a hacer EN ESPAÑOL con este formato:

**Para Bash:**
📋 Comando: [el comando exacto]
💬 Que hace: [explicacion con terminos tecnicos entre parentesis]
⚠️ Riesgo: [bajo/medio/alto] — [consecuencia]

**Para Edit:**
📄 Archivo: [nombre]
✏️ Que cambia: [explicacion con terminos tecnicos entre parentesis]
⚠️ Riesgo: [bajo/medio/alto]

**Para Write:**
📄 Archivo nuevo: [nombre]
🆕 Para que sirve: [explicacion con terminos tecnicos entre parentesis]
⚠️ Riesgo: [bajo/medio/alto]

REGLAS:
- NUNCA omitir la explicacion, ni siquiera para comandos simples como git status
- Usar SIEMPRE el termino tecnico real y explicar entre parentesis la primera vez
- Si el comando tiene flags (-r, --force), explicar que hace cada uno
EOF
```

### Paso 3: Abrir Claude Code

```bash
claude
```

Listo! Ya funciona.

## Actualizar a la ultima version

```bash
claude plugin marketplace update explain-approve-marketplace
claude plugin uninstall explain-approve
claude plugin install explain-approve
```

## Desinstalacion

```bash
claude plugin uninstall explain-approve
```

Para quitar tambien las instrucciones globales, borra `~/.claude/CLAUDE.md` (o elimina la seccion "Explicar antes de actuar").

## Licencia

MIT
