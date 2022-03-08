import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <footer className="py-5">
      <div className="container border-top-fade-black-1-2px">
        <div className="row w-100 pt-5">
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start text-uppercase">
              <h3 className="fs-6 mb-4">proccess</h3>
            </div>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <nav className="text-uppercase">
                <Link
                  className="text-fade-1 text-decoration-none mb-1 d-block"
                  to="#"
                >
                  project
                </Link>
                <Link
                  className="text-fade-1 text-decoration-none mb-1 d-block"
                  to="#"
                >
                  services
                </Link>
                <Link
                  className="text-fade-1 text-decoration-none mb-1 d-block"
                  to="#"
                >
                  about
                </Link>
                <Link
                  className="text-fade-1 text-decoration-none mb-1 d-block"
                  to="#"
                >
                  proccess
                </Link>
                <Link
                  className="text-fade-1 text-decoration-none mb-1 d-block"
                  to="#"
                >
                  news
                </Link>
                <Link
                  className="text-fade-1 text-decoration-none mb-1 d-block"
                  to="#"
                >
                  contact
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <div className="wrapper text-center text-lg-start">
              <nav className="text-uppercase">
                <Link
                  className="text-fade-1 text-decoration-none mb-1 d-block"
                  to="#"
                >
                  lorem
                </Link>
                <Link
                  className="text-fade-1 text-decoration-none mb-1 d-block"
                  to="#"
                >
                  ipsum
                </Link>
                <Link
                  className="text-fade-1 text-decoration-none mb-1 d-block"
                  to="#"
                >
                  dolor
                </Link>
                <Link
                  className="text-fade-1 text-decoration-none mb-1 d-block"
                  to="#"
                >
                  sit
                </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-3 mb-5 mb-lg-0">
            <Link
              className="text-fade-1 text-decoration-none mb-1 d-block text-center text-lg-start"
              to="#"
            >
              Lorem ipsum dolor sit amet.
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
