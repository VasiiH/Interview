import 'bootstrap/dist/css/bootstrap.min.css';
import  {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

import Login from './login'
import View from './view'

function App() {
  return (
    <Router>

      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <h3 style={{color:'#6fc3ed'}}>Omobio Exam</h3>
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
  
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
             <Link to={'/'} className="nav-link" style={{color:'#ffffff'}}>Home</Link>
          </li>
          <li class="nav-item active">
             <Link to={'/insert'} className="nav-link " style={{color:'#ffffff'}}>Tutorials</Link>
          </li>
          <li class="nav-item active">
             <Link to={'/view'} className="nav-link" style={{color:'#ffffff'}}>View</Link>
          </li>
          <li class="nav-item active" >
             <Link to={'/login'} className="nav-link" style={{color:'#ffffff'}}><b>Login</b></Link>
          </li>
      
    </ul>
  </div>
</nav>

        <div style={{margin:10}}>
          <h3 style={{color:'#881219'}}>Welocom to Omobio </h3>
          <small class="text-muted"> Please login to our system first</small>
        
        </div>
        

        <Switch>
            <Route exact path= '/login' component ={Login}/>
            <Route exact path= '/view' component ={View}/>
        </Switch>

     </Router>
    
  );
}

export default App;
