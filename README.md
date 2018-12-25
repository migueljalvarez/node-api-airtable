# API Airtable 
Este API es una implementacion de las funcionabilidades del API de Airtable, como POST, PUT, DELETE. Cualquier Otro Feature puede ser agregado.

## 1 Docker

Para instalar Docker, sigue las Instrucciones de la documentacion, para distribuciones derivadas de
[Ubuntu](https://docs.docker.com/engine/installation/linux/ubuntulinux/), para instalar en otras [distribuciones](https://docs.docker.com/engine/installation/), asegutate de tener la `version 17.06.1-ce` de Docker corriendo la siguiente linea `docker -v`

## 2 Docker Compose

Luego de haber instalado Docker, se requiere la instalacion de [Docker Compose](https://docs.docker.com/compose/install/), luego comprueba la version del DockerCompose corriendo la siguiente linea `docker-compose -v`, asegutarte de que la version sea `>= 1.13.0`

## 3 NPM

En la Carpeta del Repositorio debes ejecutar la siguiente linea `npm install` para instalar todas las dependencias  y librerias necesarias para  proyecto.

## 4  Env

En la Carpeta del Repositorio, se encuentra la Carpeta `env` y dentro de esta se encuentran por defecto los siguientes archivos:

* `api.env.example`

creamos un archivo `api.env` de la siguiente forma:

```sh 
$ cp api.env.example api.env
```

### Configuracion del los .env

los archivo contienen una informacion de requerimiento que por default esta vacia.

`api.env`

* `NODE_ENV`= `development | production`
* `AIRTABLE_API_KEY` = Api Key de `Airtable`


## 5  Ejecucion

Para ejecutar el Api corre la siguiente linea `docker-compose up -d` o `docker-compose up` para dejar el `logs` abierto.

## Comandos Utiles

* Reiniciar los contenedores docker-compose `docker-compose restart`
* Visuallizar los container que estan corriendo `docker stats`

## Uso
utilice los metodos de crear, actualizar y eliminar de la siguiente forma. 

``` sh
POST http://example.com/api/v1/create/base/tabla
PUT http://example.com/api/v1/update/base/tabla
DELETE http://example.com/api/v1/delete/base/tabla
```
**Nota:** 
* `base` es un string que varia segun lo requerido.
* `tabla` se reffiere al nombre de la tabla con laque se va a interactuar.

