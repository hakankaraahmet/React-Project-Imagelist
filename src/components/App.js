import React, { Component } from 'react'
import Searchinput from './Searchinput'
import axios from "axios";
import ImageList from './ImageList';

  class App extends Component {
    constructor(props){
        super(props)
        this.state = {images : []}
    }
    

     onSearchSubmit = async (entry) => {
      const response = await axios.get(`https://pixabay.com/api/?key=22894181-7e572a260989de6a95dbcf54b&q=${entry}&image_type=photo`)
      this.setState({images:response.data.hits})
    }


     render() {
         return (
             <div className="ui container" style={{marginTop:"30px"}}>
                 <Searchinput onSearchSubmit={this.onSearchSubmit}/>
                 <ImageList images = {this.state.images}/>
             </div>
         )
     }
 }
 
 export default App