import React, { Component } from 'react';
import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.7,
    bacon : 1,
    meat : 1.5
}

class BurgerBuilder extends Component {
/* constructor (props) {
    super(props);
    this.state = {...}
}
 */
state = {
    ingredients : {
        salad :0,
        bacon : 0,
        cheese : 0 ,
        meat : 0
    },
    totalPrice : 4,
    purchaseable : false,
    purchasing : false
}

purchaseHandler = () => {
    this.setState({purchasing : true})
}

updatePurchase (ingredients) {
  /*   const ingredients = {
        ...this.state.ingredients
    } */
    const sum = Object.keys(ingredients).map(igkey => {
        return ingredients[igkey]
    }).reduce((sum,el) => {
        return sum + el;
    },0)

    this.setState({purchaseable : sum > 0});
}

addIngredientHandler = (type) => {
const oldCount = this.state.ingredients[type];
const updateCounted = oldCount +1 ;
const updatedIngred = {
    ...this.state.ingredients
}
updatedIngred[type]= updateCounted;
const priceAddition = INGREDIENT_PRICES[type];
const oldPrice = this.state.totalPrice;
const newPrice = oldPrice + priceAddition;

this.setState({totalPrice : newPrice , ingredients : updatedIngred})
this.updatePurchase (updatedIngred)
}

removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <=0) {
        return;
    }
const updateCounted = oldCount - 1 ;
const updatedIngred = {
    ...this.state.ingredients
}
updatedIngred[type]= updateCounted;
const priceRed = INGREDIENT_PRICES[type];
const oldPrice = this.state.totalPrice;
const newPrice = oldPrice - priceRed;

this.setState({totalPrice : newPrice , ingredients : updatedIngred});
this.updatePurchase (updatedIngred)
}

purchaseCancel =()=> {
    this.setState({purchasing : false})
}
purchaseContinue =()=> {
   alert('Continue ! ')
}
render () {
    const disabledInfo = {
        ...this.state.ingredients
    }
    for (let key in disabledInfo) {
      
        disabledInfo[key]=disabledInfo[key] <=0
    }
  
    return (
        <Aux> 

            <Modal show = {this.state.purchasing} modalClosed = {this.purchaseCancel}>
                <OrderSummary ingredients={this.state.ingredients} 
                    purcCancel ={this.purchaseCancel}
                    purcContinue = {this.purchaseContinue}
                    price = {this.state.totalPrice}
                ></OrderSummary>
            </Modal>

            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            ingrAdded = {this.addIngredientHandler}
            ingredRemove = {this.removeIngredientHandler}
            disabled = {disabledInfo}
            purchaseable = {this.state.purchaseable}
            price ={this.state.totalPrice}
            orderd = {this.purchaseHandler}
            />


        </Aux>

    );

}

}

export  default BurgerBuilder ;
