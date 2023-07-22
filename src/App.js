import React,{useState,useEffect} from "react";
import Cardlist from "./Cardlist";
import Searchbox from "./searchbox";
import Scroll from "./scroll";
import "./App.css";
 function App ()  {
    
     const onsearchchange=(event)=>{
        setSearchfield(event.target.value)
        
    }
    const [robots,setRobots]=useState([])
    const [searchfield,setSearchfield]=useState("")
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(users=>setRobots(users))
    },[])
    {
        const filteredrobots=robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (robots.length===0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div id="app">
                <h1>RoboFriends</h1>
                <Searchbox searchchange={onsearchchange}></Searchbox>
                <Scroll>
                <Cardlist robots={filteredrobots}></Cardlist>
                </Scroll>
                </div>
            )
        }
    }
    
}
export default App;