import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import style from './style.scss';
class App extends Component{
    render(){
        return (
            <div className="main-wrap">
                <Link to="subpage">12321</Link>
            </div>
        )
    }
}
export default App;