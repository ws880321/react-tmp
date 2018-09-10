import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from '../pages/index';
import LayoutBox from '../components/layout';
import HeaderBar from '../components/headerBar';
import NavBar from '../components/navBar';
import FooterBar from '../components/footerBar';
import SubPages from '../pages/sub-pages';
// import Todolist from '../pages/todo';
import NovelBox from '../pages/novel';
class RouterBox extends Component {
    render() {
        return (
            <HashRouter>
                <div className='main-body'>
                    <HeaderBar />
                    <NavBar/>
                    <div className='main-content'>
                        <Switch>
                            <Route exact path="/" component={App} />
                            <Route exact path="/novel" component={NovelBox} />
                            <LayoutBox>
                                {/* <Route exact path="/index" component={Novel} /> */}
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
