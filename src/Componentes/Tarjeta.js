//rfce: crea componente
import React from 'react'
//importamos PropTypes
import PropTypes from 'prop-types'
//importar estilos
import './cards.css'
import swal from 'sweetalert';

//Los props son datos que recibe cada tarjeta





function Tarjeta({ title, imageSource, text, url }) {
    //función para el botón
    const mostrarAlerta = () => {

        swal({
            title: "¡Bienvenido!",
            text: "Acabas de agregar un nuevo curso",
            icon: "success",
            button: "Aceptar",

        });
    }


    return (
        <div className="card text-center animate__animated animate__bounceInUp">
            <div className="overflow">
                <img src={imageSource} alt="" className="card-img-top" />
            </div>
            {/*Especificar el contenido de la tarjeta */}
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {
                        text ? text : 'No hay texto para mostrar'
                    }

                </p>
                {/* Para abrir una pestña nueva target="_blank"
                target="_blank" rel = "noreferrer"
                */}
                {/*
                <a href={url} className="btn btn-outline-secondary rounded-0" >
                    Ir a la página 
                </a>
                */}
                <button onClick={() => mostrarAlerta()} type="button" class="btn btn-outline-secondary">Aceptar Curso</button>

            </div>

        </div>
    )
}

Tarjeta.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Tarjeta
