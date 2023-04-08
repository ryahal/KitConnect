import ReactDOM, { hydrate } from "react-dom";
import React, { Component } from "react";
import PanZoom from "react-easy-panzoom";

function testAlert() {
  alert("Hello");
}

function Item() {
  return (
    <div
      style={{
        backgroundColor: "blue"
      }}
    >
      {" "}
      Hello
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateRows: "7.5% 85% 7.5%",
          height: "1080px"
        }}
      >
        <div
          id="top-nav"
          style={{
            backgroundColor: "gray",
            padding: 10,
            zIndex: 10
          }}
        >
          Hello, please click this button to add a DIV
          <AddItemButton />
        </div>

        <PanZoom>
          <div
            id="item-area"
            style={{
              backgroundColor: "gray"
            }}
          >
            {" "}
            This is the Item Area
          </div>
        </PanZoom>

        <div
          id="bottom-nav"
          style={{
            backgroundColor: "gray",
            zIndex: 10,
            padding: 10
          }}
        >
          Div 3
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

function AddItemButton() {
  return (
    <button message="Hello" onClick={AddItem}>
      {" "}
      Add Div{" "}
    </button>
  );
}

function AddItem() {
  alert(this.message);
}
