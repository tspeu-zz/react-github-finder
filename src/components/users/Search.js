import React, { Component } from 'react'

export class Search extends Component {

   state= {
      text: ''
   }

   onChange = (ev) =>this.setState({[ev.target.name]: ev.target.value});
   
   onSubmit(ev){
      // para evitar burbujeo
      ev.preventDefault();
      console.log(this.state.text);

   }

   render() {
      return (
         <div>
            <form onSubmit={this.onSubmit.bind(this)} className="form">
               <input type="text" name="text" placeholder="Search users..."
               value={this.state.text} onChange={this.onChange}/>
               {/* <input type="email" name="email" placeholder="ponga email..."
               value={this.state.email} onChange={this.onChange}/> */}
               <input type="submit" value="search" className="btn btn-dark btn-block"/>
            </form>

         </div>
      )
   }
}

export default Search
