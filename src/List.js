import React, {Component} from 'react';
import '/.List.css';
class List extends React.Component{
    render(){
      return(
        <div id="list">
         <ul class="list-group">
          <li class="list-group-item"><a href="#">Grade one<span class="badge badge-danger float-right">1</span></a></li>
          <li class="list-group-item"><a href="#">Grade two<span class="badge badge-danger float-right">2</span></a></li>
          <li class="list-group-item"><a href="#">Grade three <span class="badge badge-danger float-right">3</span></a></li>
          <li class="list-group-item"><a href="#">Grade four<span class="badge badge-danger float-right">4</span></a></li>
          <li class="list-group-item"><a href="#">Grade five<span class="badge badge-danger float-right">5</span></a></li>
          <li class="list-group-item"><a href="#">Grade six<span class="badge badge-danger float-right">6</span></a></li>
          </ul> 
        </div>
          
      )
    }
  }
  export default List