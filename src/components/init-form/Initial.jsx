import React, { useState } from "react";

function Initial({ Masuk, Error }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3) {
      Error("Nama minimal 3 karakter");
    } else {
      Masuk(name);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  //store the name in localStorage when the component is mounted

  return (
    <div className="container mx-auto center">
      <div
        className="d-flex justify-content-center align-items-center enter-card"
        style={{ height: "70vh" }}
      >
        <form action="" onSubmit={handleSubmit}>
          {Error !== "" ? (
            <div class="alert alert-danger" role="alert">
              {Error}
            </div>
          ) : (
            ""
          )}
          <div className="mb-3">
            <label htmlFor="name" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Nama"
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              {" "}
              Masuk{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Initial;
