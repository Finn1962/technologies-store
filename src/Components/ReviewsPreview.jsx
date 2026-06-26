//Libarys
import styled from "styled-components";

//Data
import reviews from "../data/reviews.json" with { type: "json" };

//Components
import RatingStars from "./RatingStars.jsx";

export default function ReviewsPreview() {
  return (
    <StyledContainer>
      <div className="wrapper">
        <h2>WHAT OUR CUSTOMERS SAY</h2>
        <div className="review-container">
          {reviews.slice(0, 10).map((review) => {
            return (
              <div className="review" key={review.key}>
                <p className="review-user-name">{review.reviewerName}</p>
                <p className="review-comment">{review.comment}</p>
                <RatingStars rating={review.rating} />
                <p className="review-date">{review.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #f8f8f8;
  padding: 30px 20px;

  h2 {
    margin-bottom: 40px;
    font-size: font-size: 1.8rem;
  }

  .wrapper {
    width: 100%;
    max-width: var(--page-width);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }

  .review-container {
    column-count: 4;
    column-gap: 15px;
  }

  .review {
    width: 100%;
    background-color: rgb(255, 255, 255);
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 15px;
    display: inline-block;
  }

  .review-user-name {
    font-size: 0.8rem;
    opacity: 0.5;
  }

  .review-comment {
    margin: 5px 0;
  }

  .review-date {
    font-size: 0.8rem;
    opacity: 0.5;
    margin-top: 10px;
  }

  @media(max-width: 700px) {
    .review-container {
      column-count: 2;
    }
  }

  @media(max-width: 400px) {
    .review-container {
      column-count: 1;
    }
  }
`;
