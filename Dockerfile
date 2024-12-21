# Usa una imagen base oficial de Node.js
FROM node:20

# Crea y usa el directorio de la aplicación
WORKDIR /usr/src/app

# Copia los archivos de configuración
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto configurado
EXPOSE ${PORT}

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:dev"]
