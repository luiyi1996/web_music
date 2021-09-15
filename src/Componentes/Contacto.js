import React from 'react'
//importación de sweetalert
import swal from 'sweetalert';


function Contacto() {
    //función para el botón
    const mostrarAlerta = () => {

        swal({
            title: "Mensaje Enviado",
            text: "Nos pondremos en contacto con usted",
            icon: "success",
            button: "Aceptar",

        });


    }
    return (
        <div>
            <center><h1>Contáctanos <span id="contacto" className="badge badge-secondary">Ahora</span></h1></center>

            <form className="container">
                <div className="form-group">
                    <label for="nombre">Ingrese su nombre</label>
                    <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Ingrese su nombre" required />
                    <small id="nombreHelp" className="form-text text-muted">Por favor, solo ingrese su nombre(s)</small>
                </div>
                <div className="form-group">
                    <label for="apellido">Ingrese su Apellido</label>
                    <input type="text" className="form-control" id="apellido" aria-describedby="emailHelp" placeholder="Ingrese su Apellido" required />
                    <small id="nombreHelp" className="form-text text-muted">Por favor, solo ingrese un apellido</small>
                </div>
                <div className="form-group">
                    <label for="email">Ingrese su correo electrónico</label>
                    <input type="email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" className="form-control" id="email" placeholder="usuario@dominio.com" required />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Escribanos un mensaje</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <small id="nombreHelp" className="form-text text-muted">Escriba un mensaje, si lo desea.</small>

                </div>
                <div className="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">¿Recibir mensajes instantaneos?</label>
                </div>
                <button onClick={() => mostrarAlerta()} type="submit" className="btn btn-primary">Enviar</button>
                <button type="reset" className="btn btn-secondary">Limpiar</button>

            </form>
        </div>
    )
}

export default Contacto
