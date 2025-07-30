import { FaPlus } from "react-icons/fa6";

export const Product = ({ product, setModalImage }) => (
  <div
    className="cursor-pointer rounded-lg relative group"
    onClick={() => setModalImage(product.img)}
    key={product.id}
  >
    <img src={product.img} alt="img" className="img-fluid rounded" />
    <div className="opacity-0 group-hover:opacity-100 transition-smooth bg-cyan-transparent rounded absolute top-0 left-0 w-full h-full flex justify-center items-center">
      <FaPlus color="white" size={90} />
    </div>
  </div>
);
