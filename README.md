# Backoffice de Gestión de Tareas

Este proyecto es una aplicación web desarrollada en **Angular** con **Angular Material**, que permite la gestión de usuarios y tareas a través de una interfaz moderna y responsiva.

## 📋 Requisitos Previos

Antes de instalar y ejecutar la aplicación, asegúrate de tener instalado lo siguiente en tu sistema:

- **Node.js** (versión 18 o superior) 👉 [Descargar Node.js](https://nodejs.org/)
- **Angular CLI** (versión más reciente) 👉 Instalar con:
  ```sh
  npm install -g @angular/cli
  ```
- **Git** (para clonar el repositorio) 👉 [Descargar Git](https://git-scm.com/)

## 🚀 Instalación

1️⃣ **Clonar el repositorio:**
```sh
  git clone https://github.com/neoxyx/backoffice-tasks.git
```

2️⃣ **Ingresar al directorio del proyecto:**
```sh
  cd backoffice-tasks
```

3️⃣ **Instalar las dependencias:**
```sh
  npm install
```

## ▶️ Ejecución en Modo Desarrollo

Para correr la aplicación en un entorno local, usa el siguiente comando:
```sh
  npm start
```
Esto iniciará un servidor en `http://localhost:4200/`.

## 🛠️ Configuración de Variables de Entorno

La aplicación usa un archivo de configuración para definir las URLs de la API y otros parámetros. Asegúrate de modificar `src/environments/environment.ts` según tu entorno:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

## 📌 Estructura del Proyecto

```
├── src
│   ├── app
│   │   ├── components  # Componentes de la aplicación
│   │   ├── pages       # Páginas principales
│   │   ├── services    # Servicios para llamadas HTTP
│   │   ├── app.routes.ts  # Configuración de rutas
│   ├── environments   # Configuraciones de entorno
│   ├── assets         # Imágenes y archivos estáticos
│   ├── styles.scss    # Estilos globales
```

## 🔌 API Backend

Este proyecto consume una API que debe estar corriendo en `http://localhost:8000/`. Si la API está desplegada en otro dominio, actualiza `apiUrl` en `environment.ts`.

## 📦 Construcción para Producción

Para generar una versión optimizada para producción:
```sh
  npm run build
```
El código se generará en la carpeta `dist/` y estará listo para ser desplegado.

## 📜 Licencia

Este proyecto está bajo la licencia **MIT**.
