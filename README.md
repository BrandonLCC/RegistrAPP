# Documentación Proyecto de RegistrAPP

## Requisitos que debes tomar en cuenta antes de utilizar el proyecto

- (1). node.js 
- (2). Ionic_CLI
- (3)  Realizar git clone al repositorio y luego instala las dependencias
  
```bash
git clone https://github.com/BrandonLCC/RegistrAPP.git o descarga del src

npm install  #Instalar dependencias

#Importaciónes necesarias
npm install @capacitor-mlkit/barcode-scanning@next 
npm install --save-dev @types/capacitor-camera

#Importaciones en caso de error
npm install --save-dev @types/capacitor-mlkit-barcode-scanning

npm audit fix
npx cap sync #Sincroniza los cambios 
```
  
- (4). Entrar en la carpeta con ``` cd PcMax ``` y Ejecutar el proyecto con: ``` ionic serve ```
- (5). Ejecutar el archivo en una terminal aparte del visual estudio utilizando este comando:  ``` node database.js ``` para activar la base de datos
- Resultado obtenido:  ``` node database.js Servidor en ejecución en http://localhost:3000 ``` 

# Librerias del proyecto
- (1). Para instalar la liberia sebes ejecutar este comando dentro del visual estudio: ```  npm install @capacitor-mlkit/barcode-scanning@next ```
    
    La libreria llamada "barcode-scanning" sirve para el escaneo de QR y codigos de barras. Esta libreria esta vinculada con un archivo 
    llamado barcode-scanning-modal.component.ts. Este es un modal con diferentes funcionalidades como iniciar escaneo, salir escaneo, diseños y activación de  linterna entre     otras funciones. Esta libreria se encuentra ubicada en la page: pagina-alumno-3.
  
     
- (2). ```npm install --save-dev @types/capacitor-camera```
  
    La libreria llamada "capacitor-camera" Nos permite acceder a la camara de los dispositivos moviles. 
    
    PD: Probablemente pueda dar errores de dependencias o vulnerabilidades por lo que debes seguir el paso 3 para instalar el proyecto correctamente.

# Evidencia del consumo de API RandomUser

  Esta API se encuentra en un servicio el cual se comunica con los demas componetes de la aplicación movil.
  
## Conexión y Consultas síncronas y/o asíncronas

  <img width="418" alt="Evidencia randomUser 1" src="https://github.com/user-attachments/assets/49ccbf5b-ae1a-4717-b9c2-7a9d1de9a448" />

  <img width="461" alt="funcion asinc" src<img width="461" alt="funcion asinc" src="https://github.com/user-attachments/assets/821b8eab-785b-422e-9599-bf67bacd814b" />

## Manejo de  las respuestas de manera estructurada y eficiente.


# Evidencia de la integración del plugin Escaneo de código QR

- Links de referencias: 

  https://www.youtube.com/watch?v=dhTLpXuYGOI
  
  https://capawesome.io/plugins/mlkit/barcode-scanning/
  
- Se instalo la importación  ``` npm install @capacitor-mlkit/barcode-scanning@next ```
- Y luego sincronizamos los cambios ``` npx ionic cap sync  ```

- evidencia dentro del proyecto
  <img width="400" alt="evidencia plugin " src="https://github.com/user-attachments/assets/808ca613-0a93-429a-8ba0-36f004088beb" />
  <img width="400" alt="evidencia plugin 2" src="https://github.com/user-attachments/assets/1c15b53a-0958-4cd1-b798-17208e7c779f" />
  <img width="400" alt="evidencia de plugin 3" src="https://github.com/user-attachments/assets/e0dd0cb5-f2bb-4263-ad0a-7877ceeb64e7" />


# Genera APK de acuerdo con los estándares de testing

# Testeo con jasmin y karma.

## Pasos para realizar los testeos
- (1). Identidicar los componentes a los realizaremos un testeo como por ejemplo: Inicio de sesion o Registro de usuario
- (2). Realizaremos testeos desd<img width="481" alt="state de la api" src="https://github.com/user-attachments/assets/3b4fbffc-9e3c-4794-8399-0396ace3633e" />
e un servicio como por ejemplo: auth.service.spec.ts para...
- (img)
- (3). Luego iremos al componente o funcionalidad del sistema al cual queremos testear, el archivo debe ser spec.ts

- (4).

- (7). Como ultimo paso ejecutaremos en el terminal de visual Estudio el comando: ``` node testing  ``` y esperaremos los resultados obtenidos del testeo.
##Resultado con jasmin y karma.
![jasmin](https://github.com/user-attachments/assets/8e80f764-ec4b-4130-942f-2fa43101bc62)

# Firma de la aplicación
