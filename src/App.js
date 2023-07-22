import React,{Component} from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./searchbox";
import Scroll from "./scroll";
import "./App.css";
const state={
    robots:[],
    searchfield:""
}

class  App extends Component  {
    constructor(){
        super()
        this.state= {
            robots:[],
            searchfield:""
        }
    }
    onsearchchange=(event)=>{
        this.setState({searchfield:event.target.value})
        
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    }
    render(){
        const filteredrobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length===0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div id="app">
                <h1>RoboFriends</h1>
                <Searchbox searchchange={this.onsearchchange}></Searchbox>
                <Scroll>
                <Cardlist robots={filteredrobots}></Cardlist>
                </Scroll>
                </div>
            )
        }
    }
    
}
export default App;