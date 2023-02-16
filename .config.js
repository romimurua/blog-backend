// Aquí vamos a definir todas las variables de entorno

require('dotenv').config()

const configs = {
    api: {
        nodeEnv: process.env.NODE_ENV, 
        port: process.env.PORT,
        host: process.env.HOST
    },
    db: {
        develpment: {
            dialect: 'postgres',
            host: 'localhost',
            username: 'postgres',
            password: 'root',
            database: 'posts_blog',
            define: {
                timestamps: true, // Va a utilizar por defecto el created_at y updated_at
                underscored: true, // Convierte camelCase en snake_case todos los nombres y atributos de mis modelos
                underscoredAll: true // revalidación
            }
        },
        test: {

        },
        production: {
           
        }
    }
}