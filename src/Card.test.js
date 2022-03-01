import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


const IMAGE_ONE = TEST_IMAGES[0];


it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card caption={IMAGE_ONE.caption} src={IMAGE_ONE.src} currNum="1" totalNum="3" />);
});