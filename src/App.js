import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./components/Products";
import datas from "../src/components/Data/data.json";
import Card from "./components/Card";
import Header from "../src/components/Header";

function App() {
  const products = { datas };
  const [allproducts, setAllproducts] = useState([]);
  let [cardItems, setCardItems] = useState([]);
  let [deleteArray, setDeleteArray] = useState([]);

  useEffect(() => {
    function insertCatgory() {
      for (var i = 0; i < products.datas.data.length; i++) {
        setAllproducts([...allproducts, products.datas.data[i].items]);
      }
    }
    insertCatgory();
  }, []);

  // add product item to card
  function AddToCard(product, type) {
    const ProductExitst = cardItems.find((item) => item.id === product.id);
    if (ProductExitst) {
      setCardItems(
        cardItems.map((item) =>
          item.id === product.id
            ? {
                ...ProductExitst,
                quantity: ProductExitst.quantity + 1,
                type: type,
              }
            : item
        )
      );
    } else {
      setCardItems([...cardItems, { ...product, quantity: 1, type: type }]);
    }
  }

  // remove item from card
  function RemoveFromCard(product, type) {
    const ProductExitst = cardItems.find((item) => item.id === product.id);
    if (ProductExitst.quantity === 1) {
      setCardItems(cardItems.filter((item) => item.id !== product.id));
    } else {
      setCardItems(
        cardItems.map((item) =>
          item.id === product.id
            ? {
                ...ProductExitst,
                quantity: ProductExitst.quantity - 1,
                type: type,
              }
            : item
        )
      );
    }
  }

  // check checkbox is true or false
  function checkBox(e, id) {
    const checked = e.target.checked;
    if (checked) {
      setDeleteArray([...deleteArray, id]);
    } else {
      deleteArray = deleteArray.filter((item) => item !== id);
      setDeleteArray([...deleteArray]);
    }
  }

  // delete checked items
  function DeleteProduct() {
    if (deleteArray.length <= 0) {
      alert("Please select an item!");
    } else {
      for (var i = 0; i < deleteArray.length; i++) {
        cardItems = cardItems.filter((item) => item.id !== deleteArray[i]);

        setCardItems([...cardItems]);
      }
      for (var i = 0; i < deleteArray.length; i++) {
        deleteArray = deleteArray.filter((item) => item !== deleteArray[i]);
        setDeleteArray([...deleteArray]);
      }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header cardItems={cardItems} />
        <Routes>
          <Route
            path="/"
            element={<Products products={products} AddToCard={AddToCard} />}
          />
          <Route
            path="/cart"
            element={
              <Card
                cardItems={cardItems}
                AddToCard={AddToCard}
                RemoveFromCard={RemoveFromCard}
                checkBox={checkBox}
                DeleteProduct={DeleteProduct}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
