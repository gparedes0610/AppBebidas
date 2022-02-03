import React from "react";

function Form() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <form>
            <fieldset className="text-center">
              <legend>Buscar bebida</legend>
            </fieldset>
            <div className="row mt-4">
              <div className="col-md-4 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar bebida"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="submit"
                  className="btn btn-block btn-primary"
                  value="Buscar Bebidas"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
