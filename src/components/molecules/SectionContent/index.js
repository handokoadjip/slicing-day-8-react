import { Img1, Img2, Img3, Img4, Img5 } from "assets/source/image";
import React from "react";

const index = () => {
  const lists = [
    {
      title: "Lorem, ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic rerum nesciunt assumenda accusamus dignissimos numquam minus, accusantium, ea sit autem inventore delectus ut similique officia. Fugit voluptatum",
      image: Img1,
      link: "#",
    },
    {
      title: "Lorem, ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic rerum nesciunt assumenda accusamus dignissimos numquam minus, accusantium, ea sit autem inventore delectus ut similique officia. Fugit voluptatum",
      image: Img2,
      link: "#",
    },
    {
      title: "Lorem, ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic rerum nesciunt assumenda accusamus dignissimos numquam minus, accusantium, ea sit autem inventore delectus ut similique officia. Fugit voluptatum",
      image: Img3,
      link: "#",
    },
    {
      title: "Lorem, ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic rerum nesciunt assumenda accusamus dignissimos numquam minus, accusantium, ea sit autem inventore delectus ut similique officia. Fugit voluptatum",
      image: Img4,
      link: "#",
    },
    {
      title: "Lorem, ipsum dolor",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic rerum nesciunt assumenda accusamus dignissimos numquam minus, accusantium, ea sit autem inventore delectus ut similique officia. Fugit voluptatum",
      image: Img5,
      link: "#",
    },
  ];

  return lists ? (
    lists.map((list, index) => {
      return (
        <section key={`text-${index}`}>
          <div className="container">
            <div className="row pb-4">
              <div className="col-md-12 mb-4">
                <div className="border-top-fade-black-2-2px"></div>
              </div>
              <div className="col-lg-4">
                <div className="wrapper">
                  <p className="fs-5 text-fade-black-1">{list.title}</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="wrapper d-flex flex-column justify-content-between h-100">
                  <p className="fs-5">{list.content}</p>
                  <div className="link mb-3 mb-lg-0">
                    <a
                      className="fs-5 border-bottom-fade-black-1-2px"
                      href={list.link}
                    >
                      Lorem, ipsum dolor.
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="wrapper">
                  <figure class="m-0">
                    <img
                      className="w-100 h-image-400px grayscale"
                      src={list.image}
                      alt={`image-${index}`}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    })
  ) : (
    <p>No List in this section</p>
  );
};

export default index;
