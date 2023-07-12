import React from "react";
import { connect } from "react-redux";
import {addCake,removeCake} from './Action'


class CakeShop extends React.Component{
    handleAddCake=()=>{
        const newCake ={id:this.props.cakes.length +1 ,flover:'butterscotch'}
        this.props.addCake(newCake)
        // console.log(newcake)
    };
    handleRemoveCake=(cakeId)=>{
     this.props.removeCake(cakeId)
    };

    render(){
    const {cakes} =this.props
    console.log(cakes)
        return(

            <div>
            <h2>Welcome to the Cake Shop!</h2>
            <button onClick={this.handleAddCake}>Add Cake</button>
            <ul>
          {cakes.map(cake => (
            <li key={cake.id}>
              {cake.flover} Cake
              <button onClick={() => this.handleRemoveCake(cake.id)}>Remove</button>
            </li>
          ))}
        </ul>
          </div>
        
        )
    }

}

const mapStateToProps=state=>{
    return{
        cakes:state.cakes
    };
};
 const mapDispatchToProps=dispatch=>{
    return{
        addCake:cake =>dispatch(addCake(cake)),
        removeCake:cakeId =>dispatch(removeCake(cakeId))
    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(CakeShop);