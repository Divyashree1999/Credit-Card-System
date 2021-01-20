import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import CustomStatement from './CustomStatement';
import CustomStatementForm from './CustomStatementForm';
import Home from './Home';



function ReactRouter() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link className="nav-link" to="/customStatement" ></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/viewCustomStatementForm">Custom Statement</Link>
                                </li>           
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Trainee" >Monthly Statement</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/registerCard" >Register Card</Link>
                                </li>                  
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                
                <Switch>
                <Route exact path="/">
                       <Home></Home>
                    </Route> 
                    <Route exact path="/customStatement">
                       <CustomStatement></CustomStatement>
                    </Route> 
                    <Route exact path="/viewCustomStatementForm">
                       <CustomStatementForm></CustomStatementForm>
                    </Route>  
                    <Route exact path="/registerCard">
                      
                    </Route>                   
                </Switch>
                
            </div>
        </Router>
    )
}

export default ReactRouter