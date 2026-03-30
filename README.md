# explain-approve

Plugin para Claude Code que explica cada accion en español simple antes de que la apruebes. Pensado para personas que estan aprendiendo a programar.

## Que hace?

Cada vez que Claude Code va a hacer algo (correr un comando, editar un archivo o crear uno nuevo), primero te explica que va a pasar usando lenguaje cotidiano, sin jerga tecnica. Incluye un nivel de riesgo para que sepas si es algo seguro o hay que tener cuidado.

### Hooks incluidos

| Accion | Que explica |
|--------|-------------|
| **Bash** | Que hace el comando de terminal, con analogias simples |
| **Edit** | Que parte del codigo cambia y por que |
| **Write** | Para que sirve el archivo nuevo en el contexto del proyecto |

### Ejemplo

Cuando Claude va a correr un comando, vas a ver algo asi antes de aprobarlo:

```
📋 Comando: git status
💬 Que hace: Es como pedirle a tu proyecto que te muestre un resumen
   de todos los cambios que hiciste. Te dice que archivos tocaste.
⚠️ Riesgo: Bajo — solo mira informacion, no cambia nada.
```

## Instalacion

Correr estos dos comandos en la terminal:

```bash
# Paso 1: Agregar el marketplace (solo la primera vez)
claude plugin marketplace add https://github.com/nexioartificial-hash/explain-approve-plugin.git

# Paso 2: Instalar el plugin
claude plugin install explain-approve
```

Listo! Abri una nueva sesion de Claude Code y el plugin ya va a estar funcionando.

## Desinstalacion

```bash
claude plugin uninstall explain-approve
```

## Licencia

MIT
