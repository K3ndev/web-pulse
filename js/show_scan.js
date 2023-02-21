"use strict";

// import
import fetchData from "./fetch.js";

// variables
const scanInsight = document.querySelector("#scanInsight");
const elScan = document.querySelector("#resultScan");
const inputURL = document.querySelector("#inputURL");

// loading svg
const loadingSvg = `
<svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" style="width: 1.22rem"
  viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
      <animateTransform 
         attributeName="transform" 
         attributeType="XML" 
         type="rotate"
         dur="1s" 
         from="0 50 50"
         to="360 50 50" 
         repeatCount="indefinite" />
  </path>
</svg>
`;

scanInsight?.addEventListener("click", () => {
  // guard
  if (inputURL.value === "") {
    inputURL.classList.add("ut-input-warning");
    return;
  }
  scanInsight.innerHTML = `Run Test ${loadingSvg}`;
  scanInsight.disabled = true;

  // create element
  const resultScan = document.createElement("div");
  resultScan.innerHTML = `<div class='ut-container px-3 '><p class='bg-primary'>SCAN RESULT</p></div>`;

  // timer
  setTimeout(() => {
    scanInsight.innerHTML = `Run Test`;
    scanInsight.disabled = false;
    inputURL.classList.remove("ut-input-warning");
    elScan.innerHTML = "";
    elScan.appendChild(resultScan);

    console.log(inputURL.value);
    // fetch data
    const { data } = fetchData("cacheOn", inputURL.value);
    console.log(data);
  }, 3000);
});
