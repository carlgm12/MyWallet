import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TransferForm from './TransferForm'
import TransferList from './TransferList'
import axios from 'axios';
import url from '../url'

export default class Example extends Component {
 
     constructor(props) {
        super(props)
        //console.log(super())
        this.state= {
            money:2.0,
            transfers:[], 
           // title:"hola",
            data:[],
            error:null,
            form:{
                description:'',
                amount:'',
                wallet_id: 5
            }
        }
        // para evento onchange para this objeto
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)          
    }

    async handleSubmit(e){
        e.preventDefault()
        try {
           let config={
               method: 'POST',
               headers:{
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
               body:JSON.stringify(this.state.form)
        }
        //console.log(config)
        let response = await fetch(`${url}/api/transfer`,config)
        let data = await response.json()
        console.log(data)
        // nueva data
        this.setState({
            transfers: this.state.transfers.concat(data),
            money: this.state.money + (parseInt(data.amount))
        }) 
        
        } catch(error){
            this.setState({
                error
            })
        }
        //console.log('sending...')
    }

    handleChange(e){
        //console.log(e.target.value)
        this.setState({
            form: {
                // evitar el error mantenga sino lo agrega
                ...this.state.form,
               [e.target.name]: e.target.value 
            }
        })
    }

/*     componentDidMount() {
        //console.log("hola");
        this.fetchData();
    } */ 


/*     constructor(props){
        super(props);
        this.state={
            post:{}
        };
        console.log(super())
    }

 */
    async componentDidMount() {
        //console.log(`jj ${url} años!`);
        const response = await fetch(`${url}/api/wallet`);
        const data = await response.json();
        this.setState({ 
            money: data.money,
            transfers: data.transfers 
        });
    }
/*      async componetDidMount() {
        try {
            let res=await fetch("https://jsonplaceholder.typicode.com/todos/1")           
            let data=await res.json()
            
            //console.log(res)
            
            this.setState({
                title: data.title,
                                         
            },console.log(state));
            
        }  catch (error) {
          this.setState({
              error
          })  
        }  
    } */  

/*     fetchData(){
        //console.log("hola1");
      fetch("http://127.0.0.1:8000/api/wallet")
        fetch("https://jsonplaceholder.typicode.com/todos/1")        
        .then(response => response.json())
        .then(parsedJSON=>console.log(parsedJSON.results))
        .catch(error=>console.log('parsing failed',error)) 
        //fetch("https://jsonplaceholder.typicode.com/todos/1")              
        .then(response => response.json())
        //.then(data => this.setState({ data }));
        //.then(data => this.setState({ data })); 
        .then(function(myJson) {
            console.log(myJson);

        })
        .catch(err=>console.error(err)); 

          
          
    } */

    render() {  
       // console.log(this.state);
        
        
         return (          
            <div className="container">
                
               <div className="row justify-content-center">
                   <div className="col-md-12 m-t-md">
                    <p className="title"> $ 
                    {this.state.money} 
                    </p>
                   </div>
                   <div className="col-md-12">
                        <TransferForm
                          form={this.state.form}
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit}               
                        />
                   </div>
               </div>
               <div className="m-t-mb">
                    <TransferList
                        transfers={this.state.transfers}
                    />
               </div>
               
           </div>  
        /*   
         <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">bloge Component</div>

                    <div className="card-body">I'm an bleeog component!</div>
                </div>
            </div>
        </div>*/   
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
