
import React from 'react'
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngred'


const burger = (props) => {
    let transfIngred = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
               return <BurgerIngredient key={igKey + i} type ={igKey}/>
            }) 
        }).reduce((arr,el) => {
            return arr.concat(el)
        } , []);

    if(transfIngred.length === 0) {
        transfIngred = <p>Please start adding ingredients</p>
    }
 return (
     <div className = {classes.Burger}>
         <BurgerIngredient  type='bread-top'/>
         {transfIngred}
         <BurgerIngredient  type='bread-bottom'/>

     </div>
 )

 };
 
export default burger ;
