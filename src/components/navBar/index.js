import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
class Navbar extends Component{
    render(){
        return(
            <div className="nav-bar">
                <Link to='/'>新闻</Link>
                <Link to='/novel'>小说</Link>
                <Link to='/'>段子</Link>
                <Link to='/'>天气</Link>
            </div>
        )
    }
}


export default Navbar