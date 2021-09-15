//import logo from './logo.svg';
import './App.css';
//Mandar a llamar la librería de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Importar las hojas de estilo de EDgrid (que metimos en el archivo scss)
//import "./styles/style.scss"
import React from 'react';
//Importamos el componente Tarjetas
import Tarjetas from './Componentes/Tarjetas';
import imageMax from './assets/max.jpg';
//import { Carousel } from 'bootstrap';
//Imagenes de la galeria
import car1 from './assets/car1.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import car2 from './assets/car2.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import car3 from './assets/car3.jpg';
import img9 from './assets/img9.jpg';
import img10 from './assets/img10.jpg';
//Importamos a formulario
import Contacto from './Componentes/Contacto';
//Importamos Galería
//import Galeria from './Componentes/Galeria';
//Componentes que vamos a utilizar para visualizar las imagenes
//import {RViewerTrigger, RViewer} from 'react-viewerjs';
import swal from 'sweetalert';



//En React, siempre hay que cerrar las etiquetas :)
function App() {
  const mostrarAlerta = () => {

    swal({
      title: "Lo Sentimos :(",
      text: "Página en mantenimiento",
      icon: "error",
      buttons: false,
      timer: "3800"

    });


  }

  return (
    <div className="App container">
      <header id="menu" className="App-header">

        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#curso">Nuestros Cursos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#galeria">Galería</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </header>

      <img src={imageMax} alt="..." class="img-thumbnail" />

      <div class="jumbotron">
        <h1 class="display-4">Hola, Bienvenido</h1>
        <p class="lead">
          Max Music por más de 2 años, ha sido el lugar donde nuestros alumnos,
          han desarrollado sus habilidades para sobresalir en la industria del entretenimiento.
          Esto ha hecho de esta institución la cuna líder de una de las industrias mas grandes del estado.
          Entre otros reconocimientos, los egresados de nuestra institución han acumulado más de un centenar de premios.
        </p>
        <hr class="my-4" />
        <p>
          Los cursos de Max Music han sido diseñados por líderes de la industria para formar graduados que posean el conocimiento teórico/práctico y las habilidades que se requieren en el competitivo mundo musical actual.

        </p>

      </div>
      <center><h1>Nuestros Cursos<span id="curso" class="badge badge-secondary">Explora</span></h1></center>



      <Tarjetas />

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#menu">Ir al menú</a>
        </li>
      </ul>
      <hr class="my-4" />

      <center><h1>Nuestra Galería<span id="galeria" class="badge badge-secondary">Observa</span></h1></center>


      {/*<Galeria/> */}
      <div>

        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src={car1}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />

            <img
              src="https://wallpapercave.com/wp/wp5781687.jpg"
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={img4}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />

            <img
              src={img3}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={img5}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />

            <img
              src={img6}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>
        </div>



        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src={car2}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />

            <img
              src={img7}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={img8}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />

            <img
              src={car3}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <img
              src={img9}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />

            <img
              src={img10}
              class="w-100 shadow-1-strong rounded mb-4"
              alt=""
            />
          </div>
        </div>
      </div>

      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#menu">Ir al menú</a>
        </li>
      </ul>
      <hr class="my-4" />




      <Contacto />
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#menu">Ir al menú</a>
        </li>
      </ul>

      {/* footer*/}
      <div>

        <footer class="text-center text-lg-start bg-light text-muted">

          <section
            class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
          >

            <div class="me-5 d-none d-lg-block">
              <span>Gracias por visitar nuestra página web.</span>
            </div>

          </section>

          <section class="">
            <div class="container text-center text-md-start mt-5">

              <div class="row mt-3">

                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>Privacidad
                  </h6>
                  <p>
                    Preservar tu privacidad y la seguridad de tu información personal es importante para nosotros.
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 class="text-uppercase fw-bold mb-4">
                    CRUD
                  </h6>
                  <p>
                    <a onClick={() => mostrarAlerta()} href="#!" class="text-reset">Registrar Alumnos o Profesores</a>
                  </p>
                  <p>
                    <a onClick={() => mostrarAlerta()} href="#!" class="text-reset">Modificar Alumnos o Profesores</a>
                  </p>
                  <p>
                    <a onClick={() => mostrarAlerta()} href="#!" class="text-reset">Mostrar Alumnos o Profesores</a>
                  </p>
                  <p>
                    <a onClick={() => mostrarAlerta()} href="#!" class="text-reset">Eliminar Alumnos o Profesores</a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 class="text-uppercase fw-bold mb-4">
                    Actividades
                  </h6>
                  <p>
                    <a onClick={() => mostrarAlerta()} href="#!" class="text-reset">Asignar clases</a>
                  </p>
                  <p>
                    <a onClick={() => mostrarAlerta()} href="#!" class="text-reset">Asignar Profesores</a>
                  </p>
                  <p>
                    <a onClick={() => mostrarAlerta()} href="#!" class="text-reset">Asignar Horarios</a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <h6 class="text-uppercase fw-bold mb-4">
                    Contacto
                  </h6>
                  <p><i class="fas fa-home me-3"></i> Av. de la República 01, Tabacalera, Cuauhtémoc, 06030 Ciudad de México, CDMX</p>
                  <p>
                    <i class="fas fa-envelope me-3"></i>
                    info@maxmusic.edu
                  </p>
                  <p><i class="fas fa-phone me-3"></i> + 55 78 50 36 10</p>
                  <p><i class="fas fa-print me-3"></i> + 69 47 52 10 30</p>
                </div>

              </div>

            </div>
          </section>

          <div class="text-center p-3">
            © 2021 Copyright:
            <a class="text-dark" href="#!">maxmusic.com.mx</a>
          </div>

        </footer>

      </div>






    </div>



  );
}

export default App;
