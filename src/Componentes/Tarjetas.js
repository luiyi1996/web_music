//este componente contiene todas las tarjetas
import React from 'react'
//importamos el componente Tarjeta
import Tarjeta from './Tarjeta'
//importamos la imagen
import bateria from '../assets/bateria.jpg'
import guitarra from '../assets/guitar.jpg'
import canto from '../assets/canto.jpg'
import bajo from '../assets/bajo.jpg'
import c from '../assets/c.jpg'
import piano from '../assets/piano.jpg'
const tarjetas = [
    {
        id: 1,
        title: 'BATERÍA',
        image: bateria,
        url: 'https://google.com.mx',
        text: 'El alumno aprenderá a interactuar con un conjunto musical para adaptar su propia ejecución a la dinámica de un grupo. De esta forma, será capaz de seguir indicaciones, variaciones y arreglos, desarrollando el gusto por el acompañamiento y la improvisación durante las interpretaciones.'
    },
    {
        id: 2,
        title: 'GUITARRA',
        image: guitarra,
        url: 'https://google.com.mx',
        text: 'El alumno podrá conectarse y relacionarse con otros músicos para encontrar y desarrollar su propio sonido y estilo interpretativo. De esta forma, podrá avanzar con paso firme hacia el desarrollo pleno de sus capacidades interpretativas. Tendrá la habilidad para leer notas musicales en cualquier afinación.'

    },
    {
        id: 3,
        title: 'VOZ',
        image: canto,
        url: 'https://google.com.mx',
        text: 'La colaboración de los alumnos con vocalistas y músicos profesionales les permite obtener una retroalimentación positiva de los profesionales en el desempeño en vivo y de los líderes de la industria de la música, lo que les proporciona un programa de estudio correctamente secuenciado.'
    },
    {
        id: 4,
        title: 'BAJO',
        image: bajo,
        url: 'https://google.com.mx',
        text: 'El alumno podrá tocar una amplia variedad de estilos contemporáneos y tradicionales, y podrá aplicar los conocimientos adquiridos en la improvisación y el acompañamiento de una sección rítmica. El diseño de nuestro plan de estudios fue cuidadosamente pensado para que el  alumno pueda superarse y pierda sus miedos a superarse y sea alguien en la vida. Este curso es uno de los mejores no te arrepentiras.'
    },
    {
        id: 5,
        title: 'COMPOSICIÓN',
        image: c,
        url: 'https://google.com.mx',
        text: 'Serás capaz de traducir las ideas de tus colaboradores o clientes en ideas o piezas musicales. Podrás analizar y evaluar una composición desde diferentes ángulos: forma, armonía, melodía y estilo. De esta forma, aprenderás a utilizar estos conocimientos tanto en tus propias composiciones como con otras colaboraciones. Tendrás la habilidad de trabajar con grandes compositores.'
    },
    {
        id: 6,
        title: 'PIANO',
        image: piano,
        url: 'https://google.com.mx',
        text: 'Max Music, llevará al  estudiante cómodamente a través del análisis de los estilos contemporáneos y populares, la técnica de ejecución del piano y las técnicas de acompañamiento. De esta forma, podrá interactuar con profesionales de la música en ensayos y presentaciones en vivo, desarrollando el entrenamiento personal del oído y las habilidades del lenguaje musical. La práctica musical ayúda a la mente.'
    }
]

function Tarjetas() {

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {/* Map es para recorrer el arreglo
                    card es cada uno de los objetos del arreglo, por cada recorrido, voy a devolver algo
                */}
                {
                    tarjetas.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Tarjeta title={card.title} imageSource={card.image} url={card.url} text={card.text} />

                        </div>

                    ))
                }


            </div>

        </div>
    )
}

export default Tarjetas
