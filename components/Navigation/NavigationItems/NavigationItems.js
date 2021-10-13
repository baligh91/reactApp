import React from 'react'
import classes from './NavigationsItems.css'
import NavItem from './NavigationItem/NavigationItem'
const navItems = (props) => (
   
<ul className={classes.NavigationItems}>
<NavItem link="/" active>Burger Builder</NavItem>
<NavItem link="/">Checkout</NavItem>

</ul>
 
);

export default navItems ;