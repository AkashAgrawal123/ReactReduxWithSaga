import React, { useState } from "react";
import "../Styles/Homepage.scss";
import { addToCart, emptyCart } from "../Services/Action";
import { useDispatch } from "react-redux";

const Homepage = () => {
  const [showFullDetail, setShowFullDetail] = useState(false);

  const dispatch = useDispatch();

  const handleShowDetail = () => {
    setShowFullDetail(!showFullDetail);
  };

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
            <div className="homepage__product--card">
              <div className="homepage__product--image">
                <img src="https://picsum.photos/id/237/200/300" alt="name" />
              </div>
              <div className="homepage__product--name">
                <p className="homepage__Product--item-name salsa-regular">
                  Samsung
                </p>
                <p className="homepage__product--price salsa-regular">₹45646</p>
              </div>
              <div className="homepage__product--brand">
                <p className="salsa-regular">Color: Black</p>
                <p className="salsa-regular">AKAI</p>
              </div>
              <div className="homepage__product--detail">
                {productDescription}
              </div>
              <div className="homepage__product--add-button">
                <button
                  className="salsa-regular"
                  onClick={() => dispatch(addToCart())}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
