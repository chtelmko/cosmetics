import React, { useState } from "react";
import Modal from "./modal.js";

export const ProducLineComponent = (props) => {
  //https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6
  const [showModal, setShowModal] = useState(false);

  // function detail() {
  //   let el = document.getElementById("settings");
  //   return (el.html = (
  //     <div className="detail_item">
  //       <div>{props.product.name}</div>
  //     </div>
  //   ));
  // }

  //const [isOn, turnOn] = useState();

  const showDetails = (e) => {
    alert("Hi!");
    setShowModal(true);
    //turnOn(!isOn);
    //detail();
    //e.preventDefault();
  };

  return (
    //image_link"
    //<script src="https://www.googleapis.com/customsearch/v1?key=YOUR-KEY&cx=017576662512468239146:omuauf_lfve&q=tomato&callback=hndlr">
    <div className="user-container">
      <Modal show={showModal} />

      <div className="panel_body">
        <h5 className="info-item">
          <div onClick={showDetails}>
            <img
              className="product_image"
              src={props.product.image_link}
              alt={props.product.name}
            ></img>
          </div>

          <>{props.product.name}</>
        </h5>
      </div>
      {/* <button onClick={showDetails}>{isOn ? "On" : "Off"} Details </button> */}
      <div id="settings"></div>
    </div>
  );
};

export default ProducLineComponent;
