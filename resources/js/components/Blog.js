import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


export default class Blog extends Component {
    constructor() {
        super();
        this.state={
            bl: []
        }
       // console.log(super());
    }

    componentWillMount() {

          axios.get('/blog').then(response => {
                this.setState({
                  bl:response.data  
                });                        
        }).catch(errors => {
            console.log(errors);
        })     
    }

    render() {    
        return (
            <div className="container">
                {this.state.bl.map(blog => 
                    <li>
                        <Link to={"/blog/" + blog.id}>{blog.name}</Link>
                    </li>
                )}
            </div>
        ); 
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Blog />, document.getElementById('example'));
}
