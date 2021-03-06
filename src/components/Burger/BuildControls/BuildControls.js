import React from "react";

import classes from "./BulidControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(element => (
        <BuildControl
          label={element.label}
          key={element.label}
          ingredientAdd={() => props.ingredientAdd(element.type)}
          removeIngredient={() => props.removeIngredient(element.type)}
          disabled={props.disabledInfo[element.type]}
        />
      ))}
      <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.updatePurchasing}>
        { props.isAuth ? 'Order Now' : 'Log in to continue'}
      </button>
    </div>
  );
};

export default BuildControls;
