import React from 'react'
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'
const controls = [
    {label : 'Salad', type : 'salad'},
    {label : 'Bacon', type : 'bacon'},
    {label : 'Cheese', type : 'cheese'},
    {label : 'Meat', type : 'meat'}

]
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price : {props.price.toFixed(2)}</p>
    {controls.map (ctrl =>(
        <BuildControl key={ctrl.label} 
        label={ctrl.label} 
        removed = {()=> props.ingredRemove(ctrl.type)}
        added={() =>props.ingrAdded(ctrl.type)}
        disabled = {props.disabled[ctrl.type]}
        />
        
    ))}
    <button className={classes.OrderButton} disabled= { !props.purchaseable }
    onClick={props.orderd}
    >Order Now</button>
    </div>
)



export default buildControls ;