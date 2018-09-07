import React, { Component } from "react";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import App from '../pages/index';
import LayoutBox from '../components/layout';
import HeaderBar from '../components/headerBar';
import FooterBar from '../components/footerBar';
import SubPages from '../pages/sub-pages';
import Todolist from '../pages/todo';
class RouterBox extends Component {
    render() {
        return (
            <HashRouter>
                <div className='main-body'>
                    <HeaderBar />
                    <div className='main-content'>
                        <Switch>
                            <Route exact path="/" component={Todolist} />
                            <LayoutBox>
                                <Route exact path="/index" component={App} />
                                <Route exact path="/subpage" component={SubPages} />
                                <Route exact path="/subpage/:id" component={SubPages} />
                            </LayoutBox>
                        </Switch>
                    </div>
                    <FooterBar />
                </div>
            </HashRouter>

        )
    }
}


export default RouterBox;
