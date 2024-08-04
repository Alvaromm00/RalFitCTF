# Usa una imagen base Node para construir la aplicación
FROM node:18 AS build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código fuente del proyecto al contenedor
COPY . .

# Construye la aplicación Angular
RUN npm run build --prod

# Usa una imagen base Nginx para servir la aplicación
FROM nginx:stable-alpine

# Copia los archivos construidos al directorio de Nginx
COPY --from=build /app/dist/ralfilt-frontend/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80 para el servidor HTTP
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && nginx -g 'daemon off;'"]
