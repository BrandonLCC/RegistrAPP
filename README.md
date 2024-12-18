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
- (1). Para instalar la libreria se ejecuto este comando dentro del visual estudio: ```  npm install @capacitor-mlkit/barcode-scanning@next ```
    
    La libreria llamada "barcode-scanning" sirve para el escaneo de QR y codigos de barras. Esta libreria esta vinculada con un archivo 
    llamado barcode-scanning-modal.component.ts. Este es un modal con diferentes funcionalidades como iniciar el escaneo, salir del escaneo, diseños y activación de  linterna entre otras funciones.
  
     
- (2). ```npm install --save-dev @types/capacitor-camera```
  
    La libreria llamada "capacitor-camera" Nos permite acceder a la camara de los dispositivos moviles. 
    
    PD: Probablemente pueda dar errores de dependencias o vulnerabilidades por lo que debes seguir el paso 3 para instalar el proyecto correctamente.

# Evidencia del consumo de API RandomUser

  Esta API se encuentra en un servicio el cual se comunica con los demas componetes de la aplicación movil.
  
## Conexión y Consultas síncronas y/o asíncronas

  <img width="418" alt="Evidencia randomUser 1" src="https://github.com/user-attachments/assets/49ccbf5b-ae1a-4717-b9c2-7a9d1de9a448" />

  <img width="461" alt="funcion asinc" src="https://github.com/user-attachments/assets/821b8eab-785b-422e-9599-bf67bacd814b" />

## Manejo de  las respuestas de manera estructurada y eficiente.

<img width="481" alt="state de la api" src="https://github.com/user-attachments/assets/3b4fbffc-9e3c-4794-8399-0396ace3633e" />

# Evidencia de la integración del plugin Escaneo de código QR

- Links de referencias: 

  https://www.youtube.com/watch?v=dhTLpXuYGOI
  
  https://capawesome.io/plugins/mlkit/barcode-scanning/
  
##  Este fue el proceso de la integración del plugin 

- Se instalo la importación  ``` npm install @capacitor-mlkit/barcode-scanning@next ```
-  Tambien debes importar ``` npm install --save-dev @types/capacitor-camera ```
- Y luego sincronizamos los cambios ``` npx ionic cap sync  ```

## Evidencia del plugin dentro del proyecto

  El archivo barcode-scanning-modal.component.ts es un modal que podemos   descargar y implementar en el proyecto
  
  <img width="400" alt="evidencia plugin " src="https://github.com/user-attachments/assets/808ca613-0a93-429a-8ba0-36f004088beb" />

  <img width="400" alt="evidencia plugin 2" src="https://github.com/user-attachments/assets/1c15b53a-0958-4cd1-b798-17208e7c779f" />

  Aqui encontramos la comunicación entre las funcionalidades de la página pagina-alumno-3.page.ts y el archivo barcode-scanning-modal.component.ts para utilizarlo con el HTML
  
  <img width="400" alt="evidencia de plugin 3" src="https://github.com/user-attachments/assets/e0dd0cb5-f2bb-4263-ad0a-7877ceeb64e7" />
  
Las funciónes del pagina-alumno-3.page.ts integrados al HTML

<img width="458" alt="html" src="https://github.com/user-attachments/assets/5e3f340d-7fa1-4d61-b440-880372ae206a" />


 Resultado final
  
  <img width="167" alt="evidencia qr 1" src="https://github.com/user-attachments/assets/79eed791-ee96-4080-9a6a-ea460309423a" />

  <img width="164" alt="evidenica qr 2" src="https://github.com/user-attachments/assets/ae317032-a588-4fa1-9e10-3d0a930410e5" />


# Genera APK de acuerdo con los estándares de testing con jasmin y karma.

## Pasos para realizar los testeos

- Se utiliza un servicio para realizar testeos ingresando datos validos y no validos esperando el resultado esperado, en este caso en el archivo auth.service.spec.ts
  
  <img width="572" alt="testeo1" src="https://github.com/user-attachments/assets/885cf400-36a2-49ae-a076-488a2209fbcc" />

- Identidicar los componentes a los realizaremos un testeo como por ejemplo: Inicio de sesion o Registro de usuario. Estos testeos se realizaron en el archivo first-page.page.spec.ts
  
  <img width="575" alt="testeo2" src="https://github.com/user-attachments/assets/bd512e5a-a104-4498-a32b-f74be1322c79" />

-  Como ultimo paso ejecutaremos en el terminal de visual Estudio el comando: ``` ng testing  ``` y esperaremos los resultados obtenidos del testeo.
  
![jasmin](https://github.com/user-attachments/assets/8e80f764-ec4b-4130-942f-2fa43101bc62)

## Creación del apk 



# Firma de la aplicación

- Firma el APK utilizando el comandos correspondiente:

 ``` keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias  ```

- Ubicación del archivo generado
  
<img width="122" alt="firma apk" src="https://github.com/user-    attachments/assets/0350727f-c2cb-4997-ac7c-951e391eed32" /> 
