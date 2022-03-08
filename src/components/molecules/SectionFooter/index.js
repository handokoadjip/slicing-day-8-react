import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section>
      <div className="container">
        <div className="row min-vh-100 justify-content-center">
          <div className="col-lg-8">
            <div className="wrapper d-flex align-items-center h-100">
              <div className="w-100">
                <h1 className="display-2 fw-normal">Start a project?</h1>
                <Link
                  className="fs-4 text-uppercase border-bottom-fade-black-1-2px "
                  to="#"
                >
                  contact us <i className="ms-2 fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
