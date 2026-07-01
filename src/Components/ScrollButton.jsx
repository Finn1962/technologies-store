import styled from "styled-components";

export default function ScrollButton() {
  return (
    <StyledIconWrapper
      onClick={() =>
        window.scrollTo({
          top: window.innerHeight - 50,
          behavior: "smooth",
        })
      }
    >
      <div className="main__action">
        <div className="main__scroll-box">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.9997 13.1716L7.04996     8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z"
              fill="rgb(220, 220, 220)"
            ></path>
          </svg>
        </div>
        <span className="main__scroll-text">Scroll</span>
      </div>
    </StyledIconWrapper>
  );
}

const StyledIconWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  z-index: 2;

  .main__scroll-text {
    color: rgb(220, 220, 220);
    transition: 0.2s ease;
  }

  svg path {
    transition: 0.2s ease;
  }

  &:hover .main__scroll-text,
  &:hover svg path {
    color: #fff;
    fill: #fff;
  }

  .main__action .main__scroll-box {
    animation: scroll-down 2s infinite;
  }

  span {
    font-weight: 500;
  }

  @keyframes scroll-down {
    0%,
    100% {
      transform: translateY(0rem);
      opacity: 1;
    }

    35% {
      transform: translateY(1rem);
      opacity: 0;
    }

    70% {
      transform: translateY(-1rem);
      opacity: 0;
    }
  }
`;
