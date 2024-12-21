import fashionShowImage from "./images/fashion-show-image.jpg";
import React, { useEffect, useState } from "react";

function App() {
  const [inViewImageOne, setInViewImageOne] = useState(false);
  const [inViewImageTwo, setInViewImageTwo] = useState(false);
  const [inViewImageThree, setInViewImageThree] = useState(false);

  // Intersection Observer logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target.id === "image1") {
          setInViewImageOne(entry.isIntersecting); // Update first image visibility
        }
        if (entry.target.id === "image2") {
          setInViewImageTwo(entry.isIntersecting); // Update second image visibility
        }
        if (entry.target.id === "image3") {
          setInViewImageThree(entry.isIntersecting); // Update third image visibility
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the image is visible
    );

    // Observe the images
    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");

    observer.observe(image1);
    observer.observe(image2);
    observer.observe(image3);

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to determine the grayscale filter style based on visibility
  const imageStyle = (inView) => ({
    filter: inView ? "grayscale(0%)" : "grayscale(100%)",
    transition: "filter 0.5s ease-in-out",
  });

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* Text elements positioned over the image */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Vertically centers text
            alignItems: "center", // Horizontally centers text
            textAlign: "center", // Ensures text is centered within itself
            zIndex: 1,
          }}
        >
          <h1 style={{ color: "#671717", margin: 0 }}>act x.x.x</h1>
          <p style={{ color: "#671717", margin: 0 }}>Icons</p>
        </div>
        <img
          id="image1"
          style={{
            filter: "grayscale(100%)",
            objectFit: "cover", // Ensures the image covers the entire div
            height: "100%", // Fills the div's height
            width: "100%", // Fills the div's width
            position: "absolute", // Positions image behind text
            top: 0,
            left: 0,
            zIndex: 0, // Ensures image is below text
          }}
          alt="fashion show"
          src={fashionShowImage}
        />
      </div>
      <div
        style={{
          padding: "10px",
        }}
      />
      <div>
        <img
          id="image1"
          style={imageStyle(inViewImageOne)}
          height="400px"
          width="auto"
          alt="images"
          src={fashionShowImage}
        />
      </div>
      <div
        style={{
          padding: "10px",
        }}
      />
      <div>
        <img
          id="image2"
          style={imageStyle(inViewImageTwo)}
          height="400px"
          width="auto"
          alt="images"
          src={fashionShowImage}
        />
      </div>
      <div
        style={{
          padding: "10px",
        }}
      />
      <div>
        <img
          id="image3"
          style={imageStyle(inViewImageThree)}
          height="400px"
          width="auto"
          alt="images"
          src={fashionShowImage}
        />
      </div>
      <p>Dress as your favourite musical icon</p>
      <p>Location: Le Bab Covent Garden</p>
      <p>Time : 7:30 pm</p>
      <div>Are you attending?</div>
      <button class="button-23" role="button">
        Yes
      </button>{" "}
      <br />
      <br />
      <button class="button-23" role="button">
        No
      </button>
      <br />
      <br />
      <input class="input-grey" type="text" placeholder="enter name" />
      <br />
      <br />
      <button class="button-yes" role="button">
        Button 74
      </button>
    </div>
  );
}

export default App;
