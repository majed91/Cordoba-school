      import React, {Component} from 'React';

      import Nav from './Nav';
      import List from './List';
      import Carousel from './Carousel';
      import List2 from './List2';
      import Big from './Big';
      import Small from './Small';
      import Card from './Card';
      import Coment from './Coment';
      import Footer from './Footer';
      class App extends React.Component{
        render(){
          return(
            <div>
             <Nav />
             <List />
             <Carousel />
             <List2 />
             <Big />
             <Small />
             <Card />
             <Coment />
             <Footer />
             
            </div>
              
          )
        }
      }
    export default App