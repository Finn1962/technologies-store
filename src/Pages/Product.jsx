//Libarys
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

//Contexts
import { CartContext } from "../contexts/CartContext.jsx";
import { PopUpContext } from "../contexts/PopUpContext.jsx";

//Services
import { useFetchProductData } from "../services/fetchProductData.js";

//Components
import AddToCartButton from "../Components/AddToCartButton.jsx";
import RatingStars from "../Components/RatingStars.jsx";
import QuantityInput from "../Components/QuantityInput.jsx";
import ImageGalery from "../Components/ImageGalery.jsx";
import Loader from "../Components/Loader.jsx";

//Contexts
import { LoaderContext } from "../contexts/LoaderContext.jsx";

export default function Product() {
  const { fetchProduct } = useFetchProductData();
  const { addProductToCart } = useContext(CartContext);
  const { showPopUp } = useContext(PopUpContext);
  const { isLoaderVisible, showLoader, hideLoader } = useContext(LoaderContext);

  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    showLoader();
    fetchProduct(productId)
      .then((product) => setProduct(product))
      .catch((error) => console.log(error))
      .finally(() => hideLoader());
  }, []);

  return (
    <StyledPageWrapper>
      <Loader className="loader" />

      {product.title && !isLoaderVisible && (
        <div className="content-container">
          <ImageGalery images={product.images} />
          <div>
            <p className="brand">{product.brand}</p>
            <h1 className="product-name">{product.title}</h1>
            <RatingStars rating={product.rating} />
            <p className="price">
              {product.price.toFixed(2).replaceAll(".", ",")}$
            </p>
            <p className="description">{product.description}</p>
            <p className="dimensions">
              Height: {product.dimensions?.height} Zoll, Width:{" "}
              {product.dimensions?.width} Zoll
            </p>
            <QuantityInput
              className="quantity-input"
              quantity={quantity}
              setQuantity={setQuantity}
            />
            <AddToCartButton
              className="add-to-cart-button"
              onClick={() => {
                addProductToCart({ product: product, quantity: quantity });
                showPopUp();
              }}
            />
          </div>
          <div className="reviews-container">
            <h3>Reviews</h3>
            {product.reviews?.map((review, index) => {
              return (
                <div className="review" key={index}>
                  <p className="review-user-name">{review.reviewerName}</p>
                  <RatingStars rating={review.rating} />
                  <p className="review-comment">{review.comment}</p>
                  <p className="review-date">{review.date.split("T")[0]}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {!product.title && !isLoaderVisible && (
        <p className="no-result">Product couldn't be loaded.</p>
      )}
    </StyledPageWrapper>
  );
}

const StyledPageWrapper = styled.div`
  width: 100%;
  padding: 80px 20px 40px 20px;
  display: flex;
  justify-content: center;
  align-items: start;

  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60px);
  }

  .content-container {
    max-width: var(--page-width);
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 20px;
  }

  .brand {
    opacity: 0.5;
    font-size: 0.8rem;
    margin-bottom: 5px;
  }

  .product-name {
    margin: 0px 0;
    line-height: 1.1;
  }

  .price {
    font-weight: 600;
    font-size: 1.2rem;
    margin: 15px 0 15px 0;
  }

  .description {
    font-size: 1rem;
    font-weight: light;
    opacity: 0.6;
  }

  .dimensions {
    opacity: 0.5;
    font-size: 0.8rem;
    margin: 20px 0 25px 0;
  }

  .quantity-input {
    margin-bottom: 25px;
  }

  .add-to-cart-button {
    width: 100%;
  }

  .reviews-container {
    grid-column: 1 / 3;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 20px;
    padding-top: 25px;
  }

  .review {
    width: 100%;
    background-color: rgb(246, 246, 246);
    padding: 15px;
    border-radius: 10px;
  }

  .review-user-name {
    font-size: 0.8rem;
    opacity: 0.5;
  }

  .review-rating-stars {
    margin-bottom: 10px;
  }

  .review-comment {
    margin: 5px 0;
  }

  .review-date {
    font-size: 0.8rem;
    opacity: 0.5;
  }

  .no-result {
    position: absolute;
    top: 45%;
    font-weight: 800;
  }

  @media (max-width: 700px) {
    .content-container {
      grid-template-columns: 1fr;
    }

    .reviews-container {
      grid-column: 1 / 2;
    }
  }
`;
