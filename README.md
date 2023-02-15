# `EsCine.com`. Guarda tus peliculas favoritas

Sitio web para guardar la información de tus peliculas favoritas

Inicia sesión con tu usuario y contraseña para guardar la información de tus peliculas favoritas. Aun no tienes un usuario? registrate llenando el formulario de registro, una vez enviado inicia sesión para acceder a tu perfil. Agrega tantas peliculas como desees haciendo clic en el boton "Agregar" y llenando el formulario, incluye el titulo de la pelicula, el año, el género, duración y si lo deseas una descripción y una imagen de la portada. Puedes modificar la información de las peliculas que ya hayas agregado y puedes eliminar la que ya no sea de tus favoritas.

## Tecnologias utilizadas

- React
- Redux
- Bootstrap
- Sass
- Express
- MySQL

## Modulos utilizados

- react
- react-hot-toast
- react-icons
- react-redux
- react-router-dom
- redux
- redux-thunk
- moment
- bootstrap
- sass

- express
- express-session
- bcryptjs
- cookie-parser
- cors
- fs-extra
- multer
- mysql
- passport
- passport-local


## Inicio

Página de bienvenida

![Página de bienvenida](/src/assets/images/home.png "Inicio")


## Registrarse

Todos los campos del formulario son obligatorios, el formulario se valida desde el frontend incluyendo la contraseña y confirmación de contraseña. La información se almacena en una base de datos de mysql. El módulo bcryptjs se utiliza para cifrar las contraseñas

![Página de registro](/src/assets/images/register.png "Registrarse")


## Inicio de sesión

Inicia sesión con tu nombre de usuario y contraseña, si el nombre de usuario no existe o la contraseña es incorrecta el sitio te muestra un mensaje generado con el modulo react-hot-toast. La autenticación de usuarios se realiza con los modulos passport y passport-local desde el servidor. El modulo express-session almacena la sesion de usuario en la memoria del servidor

![Página de inicio de sesión](/src/assets/images/login.png "Iniciar sesión")


## Agregar pelicula

En el formulario "agregar pelicula" solo los campos "descripción" e "imagen de portada" no son obligatorios. El módulo multer permite recibir formularios con imagenes en el servidor. La información de las peliculas se almacena en una tabla de mysql

![Página agregar pelicula](/src/assets/images/add.png "Agregar pelicula")


## Listado de peliculas

Se muestran las peliculas agregadas a la base de datos del usuario activo. Pasa el puntero por encima para ver la información de la pelicula, para editarla o eliminarla presionando el boton correspondiente.

![Página peliculas](/src/assets/images/movies.png "Peliculas")

![Página peliculas](/src/assets/images/movies_info.png "Peliculas")


## Notificaciones

En la aplicación se utiliza el módulo react-hot-toast para generar notificaciones que se muestran en la parte superior central de la pantalla, por ejemplo, al agregar, editar o eliminar una pelicula exitosamente.


## Diseño responsivo

Se incluyen css media queries para generar un diseño adaptado a distintos tamaños de pantallas: escritorio, tablet o smartphone.

![Página de registro](/src/assets/images/mobile_register.png "Registrarse") ![Página de inicio de sesión](/src/assets/images/mobile_login.png "Iniciar sesión") ![Página peliculas](/src/assets/images/mobile_movies.png "Peliculas")


## Estado global con Redux

La aplicación maneja un estado global gestionado con Redux en el que se almacena la información de las peliculas proveniente del servidor asi como los datos del usuario activo.


## Rutas protegidas

Las rutas estan protegidas con react-router-dom en el lado del cliente, es necesario iniciar sesión para poder agregar, editar, eliminar y ver el listado de peliculas. Ademas, las peticiones a la API tambien estan protegidas del lado del servidor, es necesario iniciar sesión para poder agregar, editar, eliminar y ver el listado de peliculas.


## Bootstrap

El diseño de la aplicación esta hecho con Bootstrap 5, además cuenta con estilos extra realizados con sass para elementos no encontrados en Bootstrap.


## Usuario de prueba

Usuario: daniel
Contraseña: 1234