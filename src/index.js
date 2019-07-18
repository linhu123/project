import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginPage from './components/loginPage/loginPage.js';  // 导入App组件
import FormExample from './components/example/example.js'; // 导入About组件
import App from './components/App.js';

import './styles/style.css';
import { Home } from './components/home/home.js';
export default class Routing extends Component {

    render() {
        return (
            <div style={{ width: "80%", margin: "0 auto" }}>
                <Router>
                    <div style={{display:"float"}}>
                        <Menu mode="horizontal" style={{height:"60px"}}>
                            <Menu.Item><a>汇忆</a></Menu.Item>
                            <Menu.Item key="home">
                                <Link to="/">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="index">
                                <Link to="/example">Example</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <br/>
                    {/*<Route component={App}>*/}
                    <Route exact path="/" component={Home} />
                    <Route path="/example" component={FormExample} />
                    {/*</Route>*/}
                </Router>
            </div>
        )
    }
}
ReactDOM.render(<Routing />, document.getElementById('root'));