import React, { useState } from "react";

const ProductItems = ({ item, AddToCard, type }) => {
  const [showMore, setShowMore] = useState(false);

  const text = item.content;

  return (
    <>
      <div className="card">
        <img src={item.img} alt={item.product} />
        <div className="text">
          <h3>{item.product}</h3>
          <p>
            {showMore ? text : `${text.substring(0, 50)}`}
            <button onClick={() => setShowMore(!showMore)}>See more</button>
          </p>
          <div className="card-footer">
            <p>$ {item.pirce}</p>
            <button onClick={() => AddToCard(item, type)}>Add to card</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItems;
