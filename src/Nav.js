import React , {Component} from 'React';
import '/.Nav.css';
class Nav extends React.Component{
  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
<div class="container-fluid">
  <a class="navbar-brand" href="#"><img src="123.jpeg" class="rounded-circle"/> Cordoba</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">
          Dropdown
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Disabled</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control form-control-sm me-2" type="search" placeholder="Search"/>
      <button class="btn btn-outline-success btn-sm" type="submit">Search</button>
    </form>
    <form class="d-flex">
      <button class="btn btn-outline-success btn-sm" data-toggle="modal" data-target="#demo" type="button">login</button>
    </form>

<div class="modal fade" id="demo">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-body">
      <form>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleInputEmail1" />
  
</div>
<div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleInputPassword1"/>
</div>
<div class="mb-3 form-check">
  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
  <label class="form-check-label" for="exampleCheck1">remember me</label>
</div>
<button type="submit" class="btn btn-primary">login</button>
</form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">sign up</button>
    </div>
  </div>
</div>
</div>

  </div>
</div>
</nav>
      </div>
        
    )
  }
}
  export default Nav