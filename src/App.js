import React,{ Component }  from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';

class App extends Component{
  constructor()
 {
   super()
   this.state=
   {
       robots:[],
       searchinputtxt:''
   }
 }

componentDidMount(){
    
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => {  
       return response.json()
   })
   .then(users => this.setState({robots:users}))
}

searchinputtxtfn = (event) =>
{

   this.setState({searchinputtxt:event.target.value}) 
} 

render(){
   if(this.state.robots.length > 0)
   {

    const filterRobo = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchinputtxt.toLowerCase())
    }) 
  
    return (
      <div className='tc'>  
        <h1>Robo Friends </h1>
        <Searchbox searchChange={this.searchinputtxtfn }/>
       <Scroll>
        <Cardlist robots={filterRobo}/>
       </Scroll>
      </div>
    )
   }else
   { 
       return (<h1>Loading.... </h1>)
   } 
 

}}

export default App;