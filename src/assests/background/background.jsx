import React, { useEffect, useRef, useCallback, useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import "./background.css";

const Background = () => {
  const { theme } = useContext(ThemeContext);
  const starsContainerRef = useRef(null);

  const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

  const createStar = useCallback(() => {
    const isAsteroid = Math.random() < 0.1;
    const star = document.createElement("div");
    star.classList.add(isAsteroid ? "asteroid" : "star");

    star.style.backgroundColor = theme === "dark" ? "white" : "black";
    star.style.position = "absolute";
    star.style.left = `${getRandomNumber(0, 100)}vw`;
    star.style.bottom = `${getRandomNumber(0, 100)}vh`;
    const size = isAsteroid ? getRandomNumber(3, 5) : getRandomNumber(1, 3);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animation = `move ${getRandomNumber(10, 15)}s linear infinite`;

    starsContainerRef.current?.appendChild(star);
  }, [theme]);

  const createStars = useCallback(() => {
    for (let i = 0; i < 111; i++) {
      createStar();
    }
  }, [createStar]);

  const updateStarColors = useCallback(() => {
    const stars = starsContainerRef.current?.querySelectorAll(".star");
    stars?.forEach((star) => {
      star.style.backgroundColor = theme === "dark" ? "white" : "black";
    });
  }, [theme]);

  useEffect(() => {
    const starsContainer = starsContainerRef.current;
    createStars();
    updateStarColors();

    return () => {
      if (starsContainer) {
        starsContainer.innerHTML = "";
      }
    };
  }, [theme, createStars, updateStarColors]);

  return (
    <>
      <div id="stars" ref={starsContainerRef}></div>
    </>
  )
};

export default Background;
