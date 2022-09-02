import React, { useState, useEffect } from "react";
import Initial from "../init-form/Initial";
import Navbar from "../navbar/Navbar";

function Jumbotron() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const Masuk = (name) => {
    setName(name);
    setError("");
  };

  //store the name in localStorage when the component is mounted
  useEffect(() => {
    const dataName = localStorage.getItem("name");
    if (dataName) {
      setName(dataName);
    } else {
      setName("");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <>
      {name !== "" ? (
        <>
          <Navbar />
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ minHeight: "80vh" }}
          >
            <h1 className="h4">Halo,</h1>
            <h4 className="h1 text-center">{name}</h4>
            <button type="button" className="btn btn-primary mt-3 text-white">
              Explore <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </>
      ) : (
        <Initial Masuk={Masuk} Error={error} />
      )}
    </>
  );
}

export default Jumbotron;
