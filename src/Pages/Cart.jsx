//Assets
import cartIcon from "../assets/cart-icon-two.svg";

//Libarys
import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";

//Contexts
import { CartContext } from "../contexts/CartContext.jsx";

//Komponents
import ProductPreview from "../Components/CartProductPreview.jsx";
import ExpressPaymentIcons from "../Components/ExpressPaymenButtons.jsx";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const fullPrice = cart.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0,
  );

  return (
    <StyledPageContainer>
      <div className="cart-wrapper">
        {cart.length > 0 && (
          <>
            <h1>Your cart</h1>
            <div className="label-container">
              <p>PRODUCT</p>
              <p>QUANTITY</p>
              <p>PRICE</p>
            </div>
            <hr />
            <div className="product-container">
              {cart.map((data) => {
                return <ProductPreview data={data} key={data.product.id} />;
              })}
            </div>
            <hr />
            <p className="allproducts-price">
              To pay: <br />
              <strong>{fullPrice.toFixed(2).replaceAll(".", ",")}$</strong>
            </p>
            <div className="checkout-button-container">
              <button className="button-secondary checkout-button">
                To the checkout
              </button>
              <ExpressPaymentIcons />
            </div>
          </>
        )}

        {cart.length === 0 && (
          <div className="empty-container">
            <img src={cartIcon} />
            <h1>Your cart is empty.</h1>
            <Link to="/shop?search=&filter=&categorie=&brand=">
              <button className="button-secondary">Continue shopping</button>
            </Link>
          </div>
        )}
      </div>
    </StyledPageContainer>
  );
}

const StyledPageContainer = styled.div`
  width: 100%;
  padding: 80px 20px 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relativ;

  .cart-wrapper {
    width: 100%;
    max-width: var(--page-width);
    position: relativ;
  }

  .label-container {
    width: 100%;
    padding-bottom: 15px;
    display: grid;
    grid-template-columns: 125px 2fr 120px 25px 1fr;
    column-gap: 20px;
  }

  .label-container p {
    opacity: 0.5;
    font-size: 0.8rem;
  }

  .label-container p:nth-child(2) {
    grid-column: 3 / 4;
  }

  .label-container p:nth-child(3) {
    grid-column: 5 / 6;
    justify-self: end;
  }

  .product-container {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 10px;
  }

  h1 {
    margin-bottom: 50px;
  }

  hr {
    opacity: 0.3;
  }

  .allproducts-price {
    text-align: end;
    margin-top: 20px;
    font-size: 1.1rem;
  }

  .checkout-button-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: end;
    margin-top: 20px;
  }

  .checkout-button-container .checkout-button {
    width: 100%;
    max-width: 300px;
    height: 50px;
    margin-bottom: 10px;
  }

  .empty-container {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .empty-container img {
    width: 150px;
  }

  .empty-container h1 {
    margin: 20px 0 60px 0;
    font-size: 2.5rem;
    font-weight: 300;
    text-align: center;
  }

  @media (max-width: 700px) {
    .label-container {
      grid-template-columns: 125px 1fr 1fr;
    }

    .label-container p:nth-child(2) {
      visibility: hidden;
    }

    .checkout-button-container .checkout-button {
      max-width: 100%;
    }
  }
`;
