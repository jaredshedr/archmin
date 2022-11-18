import React, { useState, useEffect } from "react";
import AddBowlForm from "./AddBowlForm.jsx";
import ItemCards from "./ItemCards.jsx";
import axios from "axios";

function Home() {
  const [inventory, setInventory] = useState([]);
  const [addBowlModal, setAddBowlModal] = useState(false);

  function submitForm(name, price, size, images) {
    event.preventDefault();

    let temp = { name: name, price: price, size: size, images: images };
    // console.log(temp);
    axios
      .post("/addbowl", temp)
      .then((res) => getAll())
      .catch((err) => console.log(err));
  }

  function getAll() {
    axios
      .get("/getall")
      .then((res) => setInventory(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAll();
  }, []);

  if (addBowlModal) {
    return (
      <AddBowlForm submitForm={submitForm} setAddBowlModal={setAddBowlModal} />
    );
  }

  return (
    <div>
      <button onClick={() => setAddBowlModal((prev) => !prev)}>Add Bowl</button>
      <div style={{display: "flex", marginTop:"10px"}}>
        {inventory && inventory.map((item, index) => <ItemCards key={index} item={item} />)}
      </div>
    </div>
  );
}

export default Home;
