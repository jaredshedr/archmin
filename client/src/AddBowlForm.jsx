import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Modal = styled.div`
  text-align: center;
  background-color: whitesmoke;
  border: 1px solid #979797;
  border-radius: 20px;
  width: 1400px;
  margin: auto;
  margin-top: 63px;
`;

function AddBowlForm({ setAddBowlModal, submitForm }) {
  let [selectedImage, setSelectedImage] = useState([]);
  let [bowlName, setBowlName] = useState("");
  let [category, setCategory] = useState("");
  let [size, setSize] = useState("");

  function cloudinaryLoad(image) {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "pmrrp4z4");
    data.append("cloud_name", "dm84tjpoq");
    fetch("https://api.cloudinary.com/v1_1/dm84tjpoq/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((response) => {
        setSelectedImage(selectedImage.concat([response.url]));
      })
      .catch((err) => console.log(err));
  }

  return (
    <Modal>
      <div style={{ marginTop: "15px" }} className="container">
        <button
          style={{ float: "right", marginRight: "10px", marginTop: "5px" }}
          onClick={() => setAddBowlModal((prev) => !prev)}
        >
          x
        </button>
        <form
          onSubmit={() => {
            submitForm(bowlName, category, size, selectedImage);
            setAddBowlModal((prev) => !prev)
          }}
          className="well form-horizontal"
        >
          <fieldset>
            <legend>Add Bowl</legend>

            <div className="form-group">
              <label className="col-md-4 control-label">Bowl Name</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-bookmark"></i>
                  </span>
                  <input
                    required
                    onChange={(event) => setBowlName(event.target.value)}
                    name="Bowl Name"
                    placeholder="Bowl Name"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Category</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-earphone"></i>
                  </span>
                  <input
                    name="category"
                    onChange={(event) => setCategory(event.target.value)}
                    placeholder="Category"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Size</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-time"></i>
                  </span>
                  <input
                    required
                    name="size"
                    onChange={(event) => setSize(event.target.value)}
                    placeholder="Size"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label">Attach Pictures</label>
              <div className="col-md-4 inputGroupContainer">
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-book"></i>
                  </span>
                  <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      cloudinaryLoad(event.target.files[0]);
                    }}
                  />
                </div>
              </div>
              {selectedImage.length > 0
                ? selectedImage.map((image, index) => (
                    <>
                      <img
                        key={index}
                        alt="not found"
                        width="50px"
                        height="50px"
                        src={image}
                      />
                      <button
                        onClick={() => {
                          event.preventDefault();
                          let newArray = selectedImage
                            .slice(0, index)
                            .concat(selectedImage.slice(index + 1));
                          setSelectedImage(newArray);
                        }}
                      >
                        x
                      </button>
                    </>
                  ))
                : null}
            </div>

            <div className="form-group">
              <label className="col-md-4 control-label"></label>
              <div className="col-md-4">
                <button type="submit" className="button-55">
                  Add <span className="glyphicon glyphicon-send"></span>
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </Modal>
  );
}

export default AddBowlForm;
