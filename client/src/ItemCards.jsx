import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #979797;
  border-radius: 20px;
  width: 300px;
  height: 200px;
  margin-right: 10px;
  padding: 10px;
  display: flex;
`

function ItemCards({item}) {

  return (
    <Card>
      <img style={{width: "200px", height: "200px"}} src={item.thumbnail[0]} ></img>
      <div style={{marginLeft: "20px"}}>
        <div>{item.name}</div>
        <div>{item.price}</div>
        <div>{item.size}</div>
      </div>
      <button style={{ width:"40px", height: "20px"}}>edit</button>
    </Card>
  );
}

export default ItemCards;
