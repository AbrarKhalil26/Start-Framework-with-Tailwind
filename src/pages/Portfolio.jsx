import React from "react";
import port1 from "../assets/imgi_1_poert1.png";
import port2 from "../assets/imgi_2_port2.png";
import port3 from "../assets/imgi_3_port3.png";
import { Product } from "../components/Product";
import { TitleHeader } from "../components/TitleHeader";

export const Portfolio = ({ setModalImage }) => {
  const products = [
    {
      id: 1,
      img: port1,
    },
    {
      id: 2,
      img: port2,
    },
    {
      id: 3,
      img: port3,
    },
    {
      id: 4,
      img: port1,
    },
    {
      id: 5,
      img: port2,
    },
    {
      id: 6,
      img: port3,
    },
  ];

  return (
    <div className="text-dark flex justify-center items-center py-10">
      <div className="container mx-auto px-4 md:px-2">
        <div className="w-fit mx-auto mb-8">
          <TitleHeader title={"Portfolio Component"} />
        </div>
        <div className="grid grid-cols-3 gap-12">
          {products.map((product) => (
            <Product product={product} setModalImage={setModalImage} />
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};
