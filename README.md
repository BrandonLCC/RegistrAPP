# Documentación Proyecto de RegistrAPP

## Requisitos que debes tomar en cuenta antes de utilizar el proyecto

- (1). node.js 
- (2). Ionic_CLI
- (3)  Realizar Clone al repositorio y luego instala las dependencias (Ver los pasos al final)
  
```bash
git clone NombreRepositorio o src

Remove-Item -Path .\node_modules -Recurse -Force #Eliminar estos archivos obligadamente  
Remove-Item -Path .\package-lock.json -Force 

npm install  #Instalar dependencias
npx cap sync #Sincroniza los cambios 
```
  
- (4). Entrar en la carpeta PcMax y Ejecutar el proyecto con: ```ionic serve```
- (5). Ejecutar el archivo en una terminal aparte del visual estudio utilizando este comando:  ``` node database.js ``` para activar la base de datos
- (6) Resultado abtenido al ejecutar el comando:  ```  node database.js
                                          Servidor en ejecución en http://localhost:3000 ``` 

# Librerias del proyecto
- (1). Para instalar la liberia sebes ejecutar este comando dentro del visual estudio: ```npm install --save-dev @types/capacitor-mlkit-barcode-scanning ```
    
    La libreria llamada "barcode-scanning" sirve para el escaneo de QR y codigos de barras. Esta libreria esta vinculada con un archivo 
    llamado barcode-scanning-modal.component.ts. Este es un modal con diferentes funcionalidades como iniciar escaneo, salir escaneo, diseños y activar linterna entre            otras funciones. Esta libreria se encuentra ubicada en la page: pagina-alumno-3.
  
     
- (2). ```npm install --save-dev @types/capacitor-camera```
    La libreria llamada "capacitor-camera" Nos permite acceder a la camara de los dispositivos moviles. 
    
    PD: Probablemente pueda dar errores de dependencias o vulnerabilidades por lo que debes seguir el paso 3 para instalar el proyecto correctamente.

# Evidencia del consumo de API 
- (1). Api utilizada: RandomUser
    Esta API se encuentra en un servicio el cual se comunica con los demas componetes de la aplicación movil.

## Consultas síncronas y/o asíncronas
<img width="461" alt="funcion asinc" src<img width="461" alt="funcion asinc" src="https://github.com/user-attachments/assets/821b8eab-785b-422e-9599-bf67bacd814b" />
="https://github.com/user-attachments/assets/2330628c-afb1-45c5-876e-fc4932f50fdf" />








# Evidencia de la integración del plugin


# Genera APK de acuerdo con los estándares de testing

# Testeo con jasmin y karma.

## Pasos para realizar los testeos
- (1). Identidicar los componentes a los realizaremos un testeo como por ejemplo: Inicio de sesion o Registro de usuario
- (2). Realizaremos testeos desde un servicio como por ejemplo: auth.service.spec.ts para...
- (img)
- (3). Luego iremos al componente o funcionalidad del sistema al cual queremos testear, el archivo debe ser spec.ts
<img width="524" alt="evidencia <img width="527" alt="testeo evidencia 2" src="https://github.com/user-attachments/assets/d8379cd5-cb4d-47b5-b5c8-a80080cce1f9" />

- (4).

- (7). Como ultimo paso ejecutaremos en el terminal de visual Estudio el comando: ``` node testing  ``` y esperaremos los resultados obtenidos del testeo.
##Resultado con jasmin y karma.
![jasmin](https://github.com/user-attachments/assets/8e80f764-ec4b-4130-942f-2fa43101bc62)

# Firma de la aplicación
