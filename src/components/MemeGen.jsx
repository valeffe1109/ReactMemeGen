import React,{Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import MemeCreate from './MemeCreate'

class MemeGen extends Component {
    state = { 
        memes:null
     }
     componentDidMount(){
         fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(memes=>{
             this.setState({memes})
         })
    
     }
    render() { 
        const {memes} = this.state
        return ( 
            console.log(memes),
            <Router>
            <Route exact={true} path="/" render={() => (
                   <div className="container">
                   <div className="row">
                       {memes ? (
   
                           memes.data.memes.map(meme=> (
                               <div className="col-md-3">
   
                           <Link exact={true} to={`/${meme.url}`}> <img src={meme.url} alt="meme" key={meme.id} className="img-fluid"/></Link>
                            </div>
                           ))
   
                           ) : (
                               <div>Loading...</div>
                             )}
                         
   
                      
   
                       
                   </div>
               </div>
              
            )} />     
         

            <Route  path="/:url//:url/:url" component={MemeCreate} />

            </Router>
         );
    }
}



 
export default MemeGen;