import React, { useState } from "react";
import styled from "styled-components";
import banner1 from "../images/banner1.png";
import banner2 from "../images/Banner2.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <Wrapper>
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <BannerContainer>
          <div className="banner-area">
            <div className="leftSide">
              <h1>BuyMe Ecommerce</h1>
              <p>
                “People were doing business with one another through the
                Internet already, through bulletin boards. But on the Web, we
                could make it interactive, we could create an auction, we could
                create a real marketplace. And that’s really what triggered my
                imagination, if you will, and that’s what I did.”
              </p>
              <p>
                In eCommerce, your prices have to be better because the consumer
                has to take a leap of faith in your product.
              </p>
            </div>
            <div className="rightSide">
              <div className="img">
                <img src={banner1} alt="" />
              </div>
            </div>
          </div>
        </BannerContainer>
        <BannerContainer>
          <div className="banner-area">
            <div className="leftSide">
              <h1>BuyMe Ecommerce</h1>
              <p>
                Because of the increased use of social media on smartphones and
                social media’s involvement in retail sales, “social selling” has
                become red hot. Anyone hoping to improve their online sales
                success must take advantage of emerging trends.”- Eddie
                Machaalani,co-founder and co-CEO
              </p>
              <p>
                You can’t wait for customers to come to you. You have to figure
                out where they are, go there and drag them back to your store.
              </p>
            </div>
            <div className="rightSide">
              <div className="img">
                <img src={banner2} alt="" />
              </div>
            </div>
          </div>
        </BannerContainer>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <AiOutlineArrowLeft />
        </div>
        <div className="icon" onClick={nextSlide}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  height: calc(100vh - 300px);
  width: 100%;
  position: relative;
  overflow: hidden;

  .container {
    width: 300vw;
    height: 100%;
    display: flex;
    transition: all 1s ease;

    img {
      width: 100vw;
      height: 100%;
      object-fit: cover;
    }
  }

  .icons {
    width: fit-content;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    gap: 10px;
    margin: auto;

    .icon {
      width: 50px;
      height: 50px;
      border: 1px solid #999;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
`;

const BannerContainer = styled.div`
  width: 100vw;
  height: 100%;
  .banner-area {
    display: flex;
    flex-direction: row;
    height: 100%;
    .leftSide {
      padding: 60px;
      padding-left: 80px;
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      h1 {
        font-size: 40px;
        font-weight: 700;
        color: #2879fe;
      }
    }
    .rightSide {
      width: auto;
      height: 100%;
      .img {
        height: 100%;
        width: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
