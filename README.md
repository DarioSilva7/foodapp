<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

# Convenciones

<a>Notion Doc</a>

- branches
- commits
- nombres de variables
- documentacion de fn
- nombres de campos en db
- manejo de excepciones
- logging
- librerias

# Descripcion

Api para la gestion de viandas.

# Inicio

### Instalar dependencias

```
npm install
```

### Cargar variables de entorno

```bash
# Renombrar el archivo
.env.example
# por
.env.local
```

### Levantar servidor y base de datos

Establecer la variable de entorno `NODE_ENV` antes de ejecutar la aplicación:

<hr>
En local 
    
  `NODE_ENV=local docker compose up`
<hr>
En desarrollo

`NODE_ENV=dev docker compose up`

<hr>
En produccion

`NODE_ENV=prod docker compose up`

<hr>

### Actualizar base de datos (local → desarrollo → producción)

Usar migraciones con TypeORM

1. Generar una migracion

   `npm run typeorm migration:generate -- -n NombreDeLaMigracion`

2. Aplicar cambios a una base de datos específica.

   Aplica las migraciones a la base de datos que elijas, utilizando la configuración del .env correspondiente:

   ```
   NODE_ENV=local npm run typeorm migration:run
   NODE_ENV=dev npm run typeorm migration:run
   NODE_ENV=prod npm run typeorm migration:run
   ```

3. Verificar los cambios

   Revisa los cambios en la base de datos con el siguiente comando:

   `npm run typeorm schema:log`
