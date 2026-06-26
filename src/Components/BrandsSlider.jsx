//Libarys
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Assets
import appleLogo from "../assets/apple-logo.svg";
import samsungLogo from "../assets/samsung-logo.svg";
import oppoLogo from "../assets/oppo-logo.svg";
import realmeLogo from "../assets/realme-logo.svg";
import vivoLogo from "../assets/vivo-logo.svg";
import asusLogo from "../assets/asus-logo.svg";
import huaweiLogo from "../assets/huawei-logo.svg";
import lenovoLogo from "../assets/lenovo-logo.svg";
import dellLogo from "../assets/dell-logo.svg";

const brands = [
  { image: appleLogo, size: 40, name: "apple" },
  { image: samsungLogo, size: 100, name: "samsung" },
  { image: oppoLogo, size: 100, name: "oppo" },
  { image: realmeLogo, size: 100, name: "realme" },
  { image: vivoLogo, size: 100, name: "vivo" },
  { image: asusLogo, size: 100, name: "asus" },
  { image: huaweiLogo, size: 40, name: "huawei" },
  { image: lenovoLogo, size: 100, name: "lenovo" },
  { image: dellLogo, size: 100, name: "dell" },
];

export default function BrandsSlider() {
  const logoContainerRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const container = logoContainerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!isHovering.current) {
        container.scrollLeft += 1;
      }

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  function handleMouseEnter(event) {
    event.preventDefault();
    isHovering.current = true;
  }

  function handleMouseLeave() {
    isHovering.current = false;
  }

  return (
    <StyledContainer>
      <div className="wrapper">
        <div className="slider-overlay">
          <div
            className="logo-container"
            ref={logoContainerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {[...brands, ...brands].map((logo, index) => (
              <Link
                key={index}
                to={`shop?search=&filter=&categorie=&brand=${logo.name}`}
              >
                <img
                  src={logo.image}
                  alt="brand logo"
                  style={{ width: logo.size }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 0 0 25px 0;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0 20px;

  .wrapper {
    max-width: var(--page-width);
    width: 100%;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  .slider-overlay {
    position: relative;
    width: 100%;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100px; /* Breite des Verlaufs */
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      z-index: 2;
      pointer-events: none;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 100px; /* Breite des Verlaufs */
      height: 100%;
      background: linear-gradient(
        to left,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      z-index: 2;
      pointer-events: none;
    }
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 50px;
    overflow-x: hidden;
    white-space: nowrap;
    padding: 10px 0;
  }

  .logo-container img {
    flex-shrink: 0;
    max-width: 100px;
    user-select: none;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
