import React, { Component } from 'react';

class SubPages extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
    }
    render() {
        return (
            <div className="sub-pages">
                {this.props.match.params.id ? this.props.match.params.id:'我是子路由!'}
            </div>
        )
    }
}

export default SubPages;