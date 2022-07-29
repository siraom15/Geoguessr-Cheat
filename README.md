# Geoguessr Cheat

![Image](https://www.geoguessr.com/_next/static/images/logo-dd3c3286e6d14f72653800dbdf5340a0.svg)

# Installation

1. Clone the repo
    ```sh
    git clone 
    ```
2. Install Package
    ```sh
    npm install
    ```
3. Setup Environment
     ```js
    GOOGLE_MAP_API_KEY= //YOURKEY
   ```
4. Run on NodeJs
    ```
    node index.js
    ```
# How to use

1. Run program
    ```sh
    node index.js
    ```
2. Enter PanoId
    ```
    Enter Pano Id: Your PanoId
    ```
3. Get Result
    ```
    Result Url = https://www.google.com/maps/place/55.79095087313308,38.43603199976145
    ```

# How to get panoId ?

1. Open Developer console on GeoGuessr Tap
2. Open Network tap on Developer console
3. Play Game
4. Find package on Network tap which start with 
    ```
    cbk?cb_client=
    ```
5. Click on the package that match in 4. and click on right tap named payload
    ```
    payload
    ```
6. Get panoid from payload
    ```
    panoid: CrMe_B4GgCEsJFTL3mwl8g
    ```
7. Enter PanoId to this program
    ```
    Enter Pano Id: CrMe_B4GgCEsJFTL3mwl8g
    ```
8. Ez
    ```
    Result Url = https://www.google.com/maps/place/-1.283769731663547,36.82122965238813
    ```