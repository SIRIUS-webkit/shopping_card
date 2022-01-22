import React from "react";
import { ReactComponent as CardIcon } from "../assests/shopping-card.svg";
import { Link } from "react-router-dom";

const Header = ({ cardItems }) => {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="row">
            <Link to="/cart">
              <div className="card-icon">
                <div className="card-count">
                  <span>{cardItems.length === 0 ? "0" : cardItems.length}</span>
                </div>

                <CardIcon />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
