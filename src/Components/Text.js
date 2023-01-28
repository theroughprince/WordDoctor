import React, { useState } from "react";

function Text(props) {
  const UpperCase = () => {
    let newText = TextA.toUpperCase();
    setTextA(newText);
    setCap("form-control");
  };
  const LowerCase = () => {
    let newText = TextA.toLowerCase();
    setTextA(newText);
    setCap("form-control");
  };
  const clear = () => {
    let newText = "";
    setTextA(newText);
    setCap("form-control");
  };
  const Capital = () => {
    let newText = TextA.toLowerCase();
    setTextA(newText);
    setCap("form-control text-capitalize");
  };
  const Copy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const RemoveExtraSpaces = () => {
    let newText = TextA.split(/[ ]+/);
    setTextA(newText.join(" "));
  };
  const TextEnter = (event) => {
    setTextA(event.target.value);
  };
  const [TextA, setTextA] = useState("");
  const [Cap, setCap] = useState("form-control");
  return (
    <>
      <div className="container my-5 text-center">
        <h2>
          {TextA.split(" ").length} Words and {TextA.length} Characters
        </h2>
      </div>
      <div className="mb-3 container mt-4">
        <textarea
          className={Cap}
          value={TextA}
          id="exampleFormControlTextarea1"
          onChange={TextEnter}
          rows="10"
        ></textarea>

        <div className="container text-center">
          <div className="row">
            <div className="col-sm-6">
              <div className="col-sm btn-group align-center">
                <button
                  type="button"
                  className="btn btn-dark mt-2"
                  onClick={UpperCase}
                >
                  Upper Case
                </button>
                <button
                  type="button"
                  className="btn btn-dark mt-2 ms-1"
                  onClick={LowerCase}
                >
                  Lower Case
                </button>
                <button
                  type="button"
                  className="btn btn-dark mt-2 ms-1"
                  onClick={Capital}
                >
                  Capital words
                </button>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="col-sm btn-group align-center">
                <button
                  type="button"
                  className="btn btn-dark mt-2 ms-1"
                  onClick={RemoveExtraSpaces}
                >
                  Remove Spaces
                </button>
                <button
                  type="button"
                  className="btn btn-dark mt-2 ms-1"
                  onClick={Copy}
                >Copy
                </button>
                <button
                  type="button"
                  className="btn btn-danger mt-2 ms-1"
                  onClick={clear}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Text;
