import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  cardItems,
  AddToCard,
  RemoveFromCard,
  checkBox,
  DeleteProduct,
}) => {
  let totalprice = cardItems.reduce(
    (price, item) =>
      price + item.quantity * Number(item.pirce.split(",").join("")),
    0
  );
  totalprice = totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <>
      {cardItems.length <= 0 ? (
        <div>
          <div className="no-item">
            <div>
              <h1>Your Cart is empty</h1>
              <Link to="/">shop now</Link>
            </div>
          </div>
        </div>
      ) : (
        <section className="card-section">
          <div className="card-container">
            <div className="card-title">
              <h2>SHOPPING BAG</h2>
            </div>
            <div className="card-body">
              <div className="check-item">
                <input type="checkbox" defaultChecked />
              </div>
              <div className="product-title">
                <h3>PRODUCT</h3>
              </div>
              <div className="product-type">
                <h3>TYPE</h3>
              </div>
              <div className="product-quantity">
                <h3>QUANTITY</h3>
              </div>
              <div className="product-amount">
                <h3>Amount</h3>
              </div>
            </div>

            {cardItems.map((item) => {
              let price = Number(item.pirce.split(",").join(""));
              let result = item.quantity * price;
              result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return (
                <div key={item.id} className="card-body-item">
                  <div className="check-item">
                    <input
                      type="checkbox"
                      onChange={(e) => checkBox(e, item.id)}
                    />
                  </div>
                  <div className="product-title">
                    <h3>{item.product}</h3>
                  </div>
                  <div className="product-type">
                    <h3>{item.type}</h3>
                  </div>
                  <div className="product-quantity">
                    <span onClick={() => RemoveFromCard(item, item.type)}>
                      -
                    </span>
                    <h3>{item.quantity}</h3>
                    <span onClick={() => AddToCard(item, item.type)}>+</span>
                  </div>
                  <div className="product-amount">
                    <h3>${result}</h3>
                  </div>
                </div>
              );
            })}
            <div className="card-footer">
              <div className="delete-item-section">
                <div className="delete-btn">
                  <h3 onClick={DeleteProduct}>Delete item</h3>
                </div>
                <h3>Total</h3>
                <div className="total-price">
                  <h3>${totalprice}</h3>
                </div>
              </div>
            </div>
            <div className="check-out">
              <button>Check out</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Card;
