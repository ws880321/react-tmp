import React, { Component } from 'react';
import { Link } from "react-router-dom";
class LayoutBox extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="sub-pages">
                {/*
                    这里可以房公共部分
                */}
                我这里公共部分
                <Link to="/subpage">a</Link>    
                <Link to="/subpage/2">a</Link>    
                {this.props.children}
            </div>
        )
    }
}

export default LayoutBox;