import React, {Component} from 'react';
import './App.css';
import {Link,BrowserRouter,Switch, Route} from 'react-router-dom';
import Main from './component/Main';

import Profile from './component/Profile';
import Kontak from './component/Kontak';
import Portofolio from './component/Portofolio';




class App extends Component {
   
   

    render() {
        return (
            <BrowserRouter>
            
            <Link to="/Kontak">kontak</Link>
            <Link to="/Profile">profile</Link>
            <Switch>
                <Route exact path="/" component={Main}/>
               <Route path ="/Kontak" component={Kontak}/>
               <Route path ="/Profile" component={Profile}/>
               <Route path ="/Portofolio" component={Portofolio}/>
           </Switch>
         
           </BrowserRouter>
        )
    }
}

export default App;
