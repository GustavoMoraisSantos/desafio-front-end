import React, { useContext } from "react";
import { CartContext } from "../../context";

import { BsFillCartFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { BoxAside } from "../Header/styles";
import ProductCart from "../ProductCart";

const ShoppingCart = () => {
  const { productsCart, totalPrice, setActiveCart } = useContext(CartContext);

  return (
    <>
      <BoxAside>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ padding: "8px", fontWeight: "600" }}>
            <BsFillCartFill />({productsCart.length})
          </p>
          <Button style={{ height: 35, marginTop: "2px" }}>
            Finalizar compra
          </Button>
          <Button
            variant="light"
            style={{ height: 35 }}
            onClick={() => setActiveCart(false)}
          >
            X
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <ProductCart />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          Valor total: {totalPrice}
        </div>
      </BoxAside>
    </>
  );
};

export default ShoppingCart;
