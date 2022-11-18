import React, { useState, useEffect } from "react";
import AddBowlForm from "./AddBowlForm.jsx";

function Home() {
  const [inventory, setInventory] = useState([]);
  const [addBowlModal, setAddBowlModal] = useState(false);

  function submitForm(name, category, size, images) {
    event.preventDefault();
    console.log('in home', name, category, size, images)
  }


  if (addBowlModal) {
    return <AddBowlForm submitForm={submitForm} setAddBowlModal={setAddBowlModal}/>;
  }

  return (
    <div>
      <button onClick={() => setAddBowlModal((prev) => !prev)}>Add Bowl</button>
    </div>
  );
}

export default Home;
