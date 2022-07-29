"use strict";

const axios = require("axios").default;
require("dotenv").config();

const key = process.env.GOOGLE_MAP_API_KEY;

async function findLocationFromPanoId(panoId) {
  const url = `https://maps.googleapis.com/maps/api/streetview/metadata?pano=${panoId}&key=${key}`;
  let findLocation = null;
  await axios
    .get(url)
    .then(function (response) {
      let resultLocation =
        response.data.location.lat + "," + response.data.location.lng;
      findLocation = `https://www.google.com/maps/place/${resultLocation}`;
    })
    .catch(function (error) {});
  return findLocation;
}

function main() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question("Enter Pano Id: ", async (panoId) => {
    let data = await findLocationFromPanoId(panoId);
    if (!data) {
      console.log("No Result Found");
    } else {
      console.log("Result Url = " + data);
    }
    readline.close();
  });
}

main();
