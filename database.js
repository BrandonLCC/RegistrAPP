const { createPool } = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Azulazul1%yono",
    database: "sys",
    connectionLimit: 15
});

// Ruta para manejar el registro de usuarios
app.post('/api/usuarioo', (req, res) => {
    const { nombre, correo, contrasena } = req.body;

    // Consulta para insertar los datos en la tabla `usuarioo`
    pool.query(
        `INSERT INTO usuarioo (nombre, correo, contrasena) VALUES (?, ?, ?)`,
        [nombre, correo, contrasena],
        (err, result) => {
            if (err) {
                console.error('Error insertando usuario:', err);
                return res.status(500).json({ error: 'Error al registrar el usuario' });
            }

            res.status(200).json({ message: 'Usuario registrado con éxito' });
        }
    );
});

// Ruta para manejar el restablecimiento de contraseña
app.post('/api/reset-password', (req, res) => {
    const { correo, nuevaContrasena } = req.body; // Aquí se recibe nuevaContrasena

    // Consulta para verificar si el correo está registrado
    pool.query(
        `SELECT * FROM usuarioo WHERE correo = ?`,
        [correo],
        (err, results) => {
            if (err) {
                console.error('Error al verificar el correo:', err);
                return res.status(500).json({ error: 'Error al verificar el correo' });
            }

            if (results.length === 0) {
                // Si no se encuentra ningún usuario con ese correo
                return res.status(404).json({ error: 'El correo electrónico no está registrado' });
            }

            // Si el usuario existe, actualizar la contraseña en el campo `contrasena`
            pool.query(
                `UPDATE usuarioo SET contrasena = ? WHERE correo = ?`,
                [nuevaContrasena, correo], // nuevaContrasena se usa para actualizar el campo contrasena
                (err) => {
                    if (err) {
                        console.error('Error al actualizar la contraseña:', err);
                        return res.status(500).json({ error: 'Error al actualizar la contraseña' });
                    }

                    res.status(200).json({ message: 'Contraseña restablecida exitosamente' });
                }
            );
        }
    );
});

// ruta para validar usuario
app.post('/api/validate-user', (req, res) => {
    const { correo, contrasena } = req.body; // Obtener correo y contraseña de la solicitud

    // Consulta para verificar las credenciales del usuario
    pool.query(
        `SELECT * FROM usuarioo WHERE correo = ? AND contrasena = ?`,
        [correo, contrasena],
        (err, results) => {
            if (err) {
                console.error('Error al validar el usuario:', err);
                return res.status(500).json({ error: 'Error al validar el usuario' });
            }

            if (results.length == 0) {
                // Si no se encuentra ningún usuario con esos datos
                return res.status(401).json({ error: 'Nombre de usuario o contraseña incorrectos' });
            }

            // Si las credenciales son correctas
            res.status(200).json({ message: 'Usuario validado exitosamente' });
        }
    );
});



// Escuchar en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
