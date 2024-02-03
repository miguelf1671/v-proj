import React, { useState } from "react";
import leoImg from "../assets/leo.jpg";
import "../App.css";

function Home() {
  const differentNoOptions = [
    "NO",
    "Are you sure?",
    "Think again",
    "This must be a mistake",
    "One more chance",
    "Really?",
    "Try again",
  ];

  const [changeImg, setChangeImg] = useState(true);

  const handleButtonYesClick = () => {
    setChangeImg(!changeImg);
  };

  const [buttonText, setButtonText] = useState(differentNoOptions[0]);

  const [index, setIndex] = useState(0);

  const [buttonSize, setButtonSize] = useState(50);

  const handleOnClick = () => {
    setButtonText(differentNoOptions[index]);
    setIndex((prevIndex) => (prevIndex + 1) % differentNoOptions.length);

    setButtonSize((prevSize) => prevSize + 25);
  };

  return (
    <div>
      {changeImg ? (
        <div>
          <div
            style={{
              width: "100%",
              height: 0,
              paddingBottom: "75%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/ikXcqqlSNH2Mw"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              className="giphy-embed"
              allowFullScreen
              title="Giphy Embed"
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/ikXcqqlSNH2Mw">via GIPHY</a>
            </p>
          </div>
          <h1 class="question">Will you be my Valentine?</h1>
          <div class="buttons">
            <button
              onClick={handleButtonYesClick}
              style={{ width: `${buttonSize}px`, height: `${buttonSize}px` }}
              id="yes-button"
            >
              YES
            </button>
            <button onClick={handleOnClick} id="no-button">
              {buttonText}
            </button>
          </div>
        </div>
      ) : (
        <img class="leo" src={leoImg} alt="" />
      )}
    </div>
  );
}

export default Home;
