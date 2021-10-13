import React from 'react'
import Aux from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button'
//import classes from './Modal.css'
const orderSummary = (props) => {
   const ingreSumry = Object.keys(props.ingredients) 
   .map(igkey => {
   return <li key={igkey}>
       <span style={{textTransform:'capitalize'}}>{igkey}</span>  : <span>{props.ingredients[igkey]}</span>
        </li>
   })
return (
    <Aux>
 <h3>Your Order</h3>
 <p>A delicious burger with the follow :</p>
 <ul>
    {ingreSumry}
 </ul>
<p><strong>Total Price : {props.price}</strong></p>
 <p>Checkout ?</p>
 <Button btnType='Danger' clicked={props.purcCancel}>CANCEL</Button>
 <Button btnType='Success' clicked={props.purcContinue}>CONTINUE</Button>

    </Aux>
)
};

export default orderSummary ;
