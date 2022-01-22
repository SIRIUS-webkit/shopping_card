import React from "react";
import ProductItems from "./ProductItems";

export const Products = ({ products, AddToCard }) => {
  let category = [0, 1, 2];

  return (
    <>
      <div className="products">
        <div className="container">
          {category.map((index) => {
            return (
              <div key={index}>
                <div className="type">
                  <h2>{products.datas.data[index].type}</h2>
                </div>
                <div className="products-row">
                  {products.datas.data[index].items.map((item) => {
                    return (
                      <div key={item.id}>
                        <ProductItems
                          item={item}
                          key={item.id}
                          AddToCard={AddToCard}
                          type={products.datas.data[index].type}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
