import React, {Component} from 'React';
import '/.List2.css';
class List2 extends React.Component{
    render(){
      return(
        <div id="list">
         <ul class="list-group">
          <li class="list-group-item"><a href="#">Grade seven<span class="badge badge-danger float-right">7</span></a></li>
          <li class="list-group-item"><a href="#">Grade eightt<span class="badge badge-danger float-right">8</span></a></li>
          <li class="list-group-item"><a href="#">Grade nine<span class="badge badge-danger float-right">9</span></a></li>
          <li class="list-group-item"><a href="#">Grade ten<span class="badge badge-danger float-right">10</span></a></li>
          <li class="list-group-item"><a href="#">Grade eleven<span class="badge badge-danger float-right">11</span></a></li>
          <li class="list-group-item"><a href="#">Grade twalve<span class="badge badge-danger float-right">12</span></a></li>
          </ul> 
        </div>
          
      )
    }
  }
export default List2