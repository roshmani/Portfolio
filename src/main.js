import React from "react";
import { Route } from "react-router-dom";
import Navi from "./navigation";
import About from "./about";
import Contact from "./contact";
import Home from "./homepage";
import Portfolio from "./portfolio";

export default class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Navi />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}
