import React, { useState, useEffect } from "react";


function ItemCards({item}) {
  console.log(item)
  return (
    <div>
      <img style={{width: "100px", height: "100px"}} src={item.thumbnail[0]} ></img>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div>{item.size}</div>
    </div>
  );
}

export default ItemCards;
