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
📋 Comando: git pull origin main
💬 Que hace: Hace un git pull (descarga los ultimos cambios del
   repositorio remoto, que es donde se guarda el codigo en la nube)
   desde la rama main para actualizar tu proyecto local.
⚠️ Riesgo: Bajo — es un comando de lectura, no modifica ningun archivo.
```

## Instalacion

Correr estos dos comandos en la terminal:

```bash
# Paso 1: Agregar el marketplace (solo la primera vez)
claude plugin marketplace add https://github.com/nexioartificial-hash/explain-approve-plugin.git

# Paso 2: Instalar el plugin
claude plugin install explain-approve
```

Abri una nueva sesion de Claude Code y listo, ya funciona.

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

## Licencia

MIT
