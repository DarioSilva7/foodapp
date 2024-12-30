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

<br>
<br>
<hr>
<br>
<br>

```bash
te recomiendo aplicar rate limit en los siguientes endpoints:

a) Autenticación:

- Login: 5 intentos por minuto
- Registro: 3 intentos por minuto
- Recuperación de contraseña: 3 intentos por 5 minutos


b) Pedidos:

- Creación de pedidos: 10 por minuto
- Modificación de pedidos: 5 por minuto
- Cancelación de pedidos: 3 por minuto


c) Búsqueda y listados:

- Búsqueda de productos: 20 por minuto
- Listado de pedidos: 15 por minuto


d) Operaciones sensibles:

- Cambio de información de perfil: 5 por 10 minutos
- Cambio de contraseña: 3 por 10 minutos


e) API de administración (incluyendo los endpoints de base de datos):

- Todas las operaciones: 10 por minuto
```
