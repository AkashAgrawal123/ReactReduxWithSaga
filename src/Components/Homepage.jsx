import React, { useEffect, useState } from "react";
import "../Styles/Homepage.scss";
import { addToCart, emptyCart } from "../Services/Action";
import { productList } from "../Services/Action/ProductAction";
import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  const [showFullDetail, setShowFullDetail] = useState(false);

  const dispatch = useDispatch();

  const productData = useSelector((state) => state.productData);

  console.log(productData, 'productDataJI');

  const handleShowDetail = () => {
    setShowFullDetail(!showFullDetail);
  };

  useEffect(() => {
    dispatch(productList());
  }, []);

  const productDescription = showFullDetail ? (
    <>
      <p className="salsa-regular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eum
        officiis laborum at quae deleniti earum vero praesentium harum esse?
        Laboriosam omnis illo consectetur consequatur eaque aliquam dolore nobis
        similique.
        <button className="salsa-regular" onClick={handleShowDetail}>
          Show less
        </button>
      </p>
    </>
  ) : (
    <>
      <p className="salsa-regular">
        Lorem ipsum dolor sit amet consectetur...{" "}
        <button className="salsa-regular" onClick={handleShowDetail}>
          Read more
        </button>
      </p>
    </>
  );
  return (
    <>
      <div className="homepage">
        <div className="homepage__cart--empty">
          <button
            className="salsa-regular"
            onClick={() => dispatch(emptyCart())}
          >
            Empty Cart
          </button>
        </div>
        <div className="homepage__wrapper">
          <div className="homepage__content">
            {productData.map((item) => (
              <div className="homepage__product--card" key={item.id}>
                <div className="homepage__product--image">
                  <img src={item.photo} alt="name" />
                </div>
                <div className="homepage__product--name">
                  <p className="homepage__Product--item-name salsa-regular">
                    {item.name}
                  </p>
                  <p className="homepage__product--price salsa-regular">
                    {item.price}
                  </p>
                </div>
                <div className="homepage__product--brand">
                  <p className="salsa-regular">Color: {item.color}</p>
                  <p className="salsa-regular">{item.brand}</p>
                </div>
                <div className="homepage__product--detail">
                  {item.description}
                </div>
                <div className="homepage__product--add-button">
                  <button
                    className="salsa-regular"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
