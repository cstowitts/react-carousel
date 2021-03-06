import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx !== 0 && <i
          className="Carousel-left-arrow fas fa-chevron-circle-left fa-2x"
          onClick={goBackward}
        />}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx !== 2 && <i
          className="Carousel-right-arrow fas fa-chevron-circle-right fa-2x"
          onClick={goForward}
        />}
      </div>
    </div>
  );
}

//TODO: WHY LINE 37 EVALS TO ELS?
//w/e is left of && is eval first 
  //if that evals to falsey
    //left of && is determinant 
  //if truthy, then move on to the right of the &&
    //right side of && is determinant



export default Carousel;
