import React, {Component} from 'React';
import './Carousel.css';
class Carousel extends React.Component{
    render(){
      return(
        <div id="Car">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li class="active" data-slide-to="0" data-target="#carouselExampleCaptions"></li>
          <li  data-slide-to="1" data-target="#carouselExampleCaptions"></li>
          <li  data-slide-to="2" data-target="#carouselExampleCaptions"></li>
          </ul>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img id="owa" src="owais.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption">
              <h5>Owais naser al-din</h5>
              <p>grade one international Cordoba school</p>
            </div>
          </div>
          <div class="carousel-item">
            <img id="sul" src="sultan.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Sultan Ahmad Adel</h5>
              <p>grade one international Cordoba school</p>
            </div>
          </div>
          <div class="carousel-item">
            <img id="tea" src="teacher.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Teachers</h5>
              <p>Teachers group of Cordoba school</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
          <span>Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span class="carousel-control-next-icon"></span>
          <span >Next</span>
        </button>
      </div>
        </div>
          
      )
    }
  }

export default Carousel