import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Example from './components/Example';
import BlogArticle from './components/BlogArticle';

export default class Index extends Component {
    render() { 
        return (      
        <div className="container">
            <Router>
                <div>
                    <Link to="/">home</Link>
                    <Link to="/blog">Blog</Link>
                    <Route path="/" exact component={Example}/>
                    <Route path="/blog" exact component={Blog}/>
                    {/* <Route path="/blog/:id" exact render={props=> <BlogArticle{...props} /> }/> */}
                </div>
      
                </Router> 
        </div> 
        );
    }
} 




/*  export default class Index extends Component {
    render() { 
        return (      
        <div className="container">
            <Router>
                <div>
                    <Route path="/" component={Example}/>
                </div>
            </Router>     
            
        </div>  
        );
    }
}  */

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
