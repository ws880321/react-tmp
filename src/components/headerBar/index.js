import React,{Component } from "react";   
import './style.scss'
class HeaderBar extends Component{
    render(){
        return(
            <header className="header-bar">
                <h1>teact-tmp</h1>
                <div className='user-info'>
                    admin
                </div>
            </header>
        )
    }
}
export default HeaderBar;