import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { callAPI } from "../utils/CallApi";
import ProductDetails from "./ProductDetails";
import { GB_CURRENCY } from "../utils/constants";
import { addToCart } from "../redux/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };

  useEffect(() => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  }, [id]);

  if (!product?.title) return <h1>Loading Product ...</h1>;

  return (
    product && (
      <div className="h-screen bg-amazonclone-background ">
        <div className="min-w[1000px] max-w-[1500px] m-auto p-4 ">
          <div className="grid grid-cols-10 gap-2">
            {/* left */}
            <div className="col-span-3 bg-white  rounded  p-8 m-auto">
              <img alt="img" src={`${product.image}`} />
            </div>
            {/* middle */}
            <div className="col-span-5 bg-white rounded p-4 divide-y divide-gray-400 ">
              <div className="mb-3">
                <ProductDetails product={product} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {product.description}
              </div>
            </div>
            {/* right */}
            <div className="col-span-2 p-4 rounded bg-white">
              <div className="text-xl xl:text-2xl text-right text-red-700 font-semibold">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg  text-right text-gray-500 font-semibold">
                RRP:
                <span className="line-through">
                  {GB_CURRENCY.format(product.oldPrice)}
                </span>
              </div>

              <div className="text-sm text-blue-500 xl:text-base font-semibold mt-3">
                FREE Returns
              </div>
              <div className="text-sm text-blue-500 xl:text-base font-semibold mt-1">
                FREE Delivery
              </div>
              <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                In Stock
              </div>
              <div className="text-base xl:text-lg  mt-1 ">
                Quantity:
                <select
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  className="p-2 bg-white border rounded-md focus:border-indigo-600"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              <Link to={`/checkout`}>
                <button
                  className="btn"
                  onClick={() => {
                    dispatch(addToCart(addQuantityToProduct()));
                  }}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
