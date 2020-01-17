import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class BlogArticle extends Component {

    constructor(props){
        super(props);
        this.state={
            post:{}
        };
    }

    componentDidMount() {
        axios.get("/blog/" + this.props.match.match.params.id).then(response => {
            this.setState({post: response.data[0] });
        }).catch(error=>console.log(error));
    }

    render() {
       console.log(this.props); 
       return (
        <div>    
            <h1>{this.state.post.name}</h1>
            <p>{this.state.post.body}</p>
        </div>
        ); 
    }
}
