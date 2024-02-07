## Proyecto de Aplicación de Blogs

Este es un proyecto que combina tanto el desarrollo de frontend como backend utilizando varias tecnologías populares. La aplicación resultante es un sistema de gestión de blogs que permite listar, actualizar, editar y eliminar entradas de blog. 

## Tecnologías Utilizadas

  - **Frontend:**
    - React: Biblioteca JavaScript para construir interfaces de usuario.
    - Vite: Herramienta de compilación rápida para aplicaciones web modernas.
    - Axios: Cliente HTTP para realizar peticiones a la API del backend.

  - **Backend:**
    - Express: Framework web de Node.js para la construcción de API RESTful.
    - Node.js: Entorno de ejecución de JavaScript del lado del servidor.
    - Nodemon: Utilidad para reiniciar automáticamente la aplicación Node.js cuando se detectan cambios en los archivos.

  - **Base de Datos:**
    - MySQL: Sistema de gestión de bases de datos relacional utilizado para almacenar los datos de los blogs.

  ## Instrucciones de Ejecución

  1. Clona este repositorio en tu dispositivo local:

     ```bash
     git clone <URL_DEL_REPO>
     ```

  2. Configura la base de datos MySQL. Asegúrate de tener MySQL instalado en tu máquina y crea una base de datos para la aplicación.

  3. Configura la conexión a la base de datos en el archivo de configuración del backend.

  4. Instala las dependencias del proyecto backend y frontend:

     ```bash
     cd node
     npm install

     cd ../vitefront
     npm install
     ```

  5. Inicia el servidor backend:

     ```bash
     cd backend
     nodemon app
     ```

  6. Inicia la aplicación frontend:

     ```bash
     cd frontend
     npm run dev
     ```

  7. Abre tu navegador web y visita la dirección local donde se está ejecutando la aplicación frontend (por defecto, `http://localhost:3000`).

Juan Carlos Henao Hernandez 🦅
