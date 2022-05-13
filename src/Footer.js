import React, {Component} from 'React';
import '/.Footer.css';
class Footer extends React.Component{
    render(){
      return(
        <div id="footer"class="text-light">
          <div class="container">
            <div class="row">
              <img class="img1" src="sultan.jpg"/>
              <img class="img2" src="photo.2.jpg"/>
              <img class="img3" src="owais.jpg"/>
              <img class="img4" src="milion.jpg"/>
              </div>
              <div id="con">
              <h5>Contact Us</h5>
              <p>Email : Cordoba-school@gmail.com , tel : 05310103277</p>
              </div>
              <hr id="har"/>
            </div>
           <hr/>
           <div id="foo">perwered by majed anis</div><div id="foo2">project by React.js</div>
        </div>
          
      )
    }
  }
export default Footer