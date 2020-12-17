import React, { Component } from 'react'

export class Search extends Component {

   // api search/users?q=userID
   state= {
      text: ''
   }

   onChange = (ev) =>this.setState({[ev.target.name]: ev.target.value});
   
   // un prop se salida searchUsers
   onSubmit = (ev) => {
      // para evitar burbujeo
      ev.preventDefault();
      console.log(this.state.text);
      this.props.searchUsers(this.state.text);
      //clear state
      this.setState({ text: ''});
   }


   render() {
      return (
         <div>
            {/* bind(this) */}
            <form onSubmit={this.onSubmit} className="form">
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
