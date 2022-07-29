# Geoguessr Cheat

![Image](https://www.geoguessr.com/_next/static/images/logo-dd3c3286e6d14f72653800dbdf5340a0.svg)

## [GeoGuessr Website](https://www.geoguessr.com)

# Installation

1. Clone the repo
    ```sh
    git clone 
    ```
2. Install Package
    ```sh
    npm install
    ```
4. Setup Environment on .env
     ```js
    GOOGLE_MAP_API_KEY= //YOURKEY
   ```
5. Run on NodeJs
    ```
    node index.js
    ```
# How to use

1. Run program
    ```sh
    npm start
    ```
    or
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
    ![image1](https://github.com/siraom15/Geoguessr-Cheat/blob/main/images/1.png?raw=true)
2. Open Network tap on Developer console
    ![image2](https://github.com/siraom15/Geoguessr-Cheat/blob/main/images/2.png?raw=true)
3. Play some game (can use in everymode)
4. Find package on Network tap which start with
    ```
    cbk?cb_client=
    ```
    ![image2](https://github.com/siraom15/Geoguessr-Cheat/blob/main/images/3.png?raw=true)
5. Click on the package that match in 4. and click on right tap named payload
    ```
    payload
    ```
    ![image2](https://github.com/siraom15/Geoguessr-Cheat/blob/main/images/4.png?raw=true)
6. Get panoid from payload
    ```
    panoid: xxxxxxxxxxx
    ```
    ![image2](https://github.com/siraom15/Geoguessr-Cheat/blob/main/images/4.png?raw=true)
7. Enter PanoId from (6.) to this program
    ```
    Enter Pano Id: xxxxxxxxxxx
    ```
8. Get Result
    ```
    Result Url = https://www.google.com/maps/place/xxxxxxxxxxx
    ```
9. Copy/Following the result url
# How to get GOOGLE_MAP_API_KEY

Get your GOOGLE_MAP_API_KEY by following this [Google documentation](https://developers.google.com/maps/documentation/javascript/get-api-key)

---
Enjoy 😀