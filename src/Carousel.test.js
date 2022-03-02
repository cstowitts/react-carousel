import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

//smoke test
it("renders without crashing", function(){
  render(<Carousel photos={TEST_IMAGES} title="images for testing" />)
})

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // expect the first image to show, but not the second
  //the 'img[alt="testing image 1"]' is a CSS selector, think dataset attr
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  //TODO: change selector to Carousel-right-arrow
  const rightArrow = container.querySelector('.Carousel-right-arrow');
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
 
  // move forward in the carousel
  const rightArrow = container.querySelector('.Carousel-right-arrow');
  fireEvent.click(rightArrow);

  //move backward in the carousel
  const leftArrow = container.querySelector('.Carousel-left-arrow');
  fireEvent.click(leftArrow);

  //expect the first image to show, but not the second or third
  //(because we want to move backwards not forwards)
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).not.toBeInTheDocument();
});

it("hides the left arrow on the first image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
 
  //expect the left arrow to be hidden on when on the first image 
  expect(
    container.querySelector('.Carousel-left-arrow')
  ).not.toBeInTheDocument();

  //expect the right arrow to show on when on the first image
  expect(
    container.querySelector('.Carousel-right-arrow')
  ).toBeInTheDocument();
 
});

it("hides the right arrow on the last image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  //(Brit special): before we click the right arrow twice, we want to make sure it was there before any changes are made
  expect(
    container.querySelector('.Carousel-right-arrow')
  ).toBeInTheDocument();

  // move forward in the carousel to the last image
  const rightArrow = container.querySelector('.Carousel-right-arrow');
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
 
  //expect the right arrow to be hidden on when on the last image 
  expect(
    container.querySelector('.Carousel-right-arrow')
  ).not.toBeInTheDocument();

  //expect the left arrow to show on when on the last image
  expect(
    container.querySelector('.Carousel-left-arrow')
  ).toBeInTheDocument();
 
});


//snapshot test
it("matches snapshot", function () {
  const { container } = render( <Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
  expect(container).toMatchSnapshot();
});
