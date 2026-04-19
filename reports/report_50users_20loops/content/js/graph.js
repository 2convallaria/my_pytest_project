/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 264.0, "minX": 0.0, "maxY": 2072.0, "series": [{"data": [[0.0, 264.0], [0.1, 266.0], [0.2, 266.0], [0.3, 267.0], [0.4, 268.0], [0.5, 269.0], [0.6, 269.0], [0.7, 269.0], [0.8, 271.0], [0.9, 271.0], [1.0, 271.0], [1.1, 271.0], [1.2, 272.0], [1.3, 272.0], [1.4, 272.0], [1.5, 273.0], [1.6, 273.0], [1.7, 273.0], [1.8, 274.0], [1.9, 274.0], [2.0, 274.0], [2.1, 274.0], [2.2, 275.0], [2.3, 275.0], [2.4, 275.0], [2.5, 275.0], [2.6, 275.0], [2.7, 276.0], [2.8, 276.0], [2.9, 276.0], [3.0, 276.0], [3.1, 277.0], [3.2, 277.0], [3.3, 277.0], [3.4, 277.0], [3.5, 277.0], [3.6, 277.0], [3.7, 277.0], [3.8, 277.0], [3.9, 277.0], [4.0, 278.0], [4.1, 278.0], [4.2, 278.0], [4.3, 278.0], [4.4, 278.0], [4.5, 278.0], [4.6, 279.0], [4.7, 279.0], [4.8, 279.0], [4.9, 279.0], [5.0, 279.0], [5.1, 279.0], [5.2, 279.0], [5.3, 279.0], [5.4, 280.0], [5.5, 280.0], [5.6, 280.0], [5.7, 280.0], [5.8, 280.0], [5.9, 280.0], [6.0, 280.0], [6.1, 280.0], [6.2, 280.0], [6.3, 280.0], [6.4, 280.0], [6.5, 280.0], [6.6, 281.0], [6.7, 281.0], [6.8, 281.0], [6.9, 281.0], [7.0, 281.0], [7.1, 281.0], [7.2, 281.0], [7.3, 281.0], [7.4, 281.0], [7.5, 281.0], [7.6, 281.0], [7.7, 282.0], [7.8, 282.0], [7.9, 282.0], [8.0, 282.0], [8.1, 282.0], [8.2, 282.0], [8.3, 282.0], [8.4, 282.0], [8.5, 282.0], [8.6, 282.0], [8.7, 282.0], [8.8, 283.0], [8.9, 283.0], [9.0, 283.0], [9.1, 283.0], [9.2, 283.0], [9.3, 283.0], [9.4, 283.0], [9.5, 283.0], [9.6, 283.0], [9.7, 283.0], [9.8, 283.0], [9.9, 283.0], [10.0, 283.0], [10.1, 284.0], [10.2, 284.0], [10.3, 284.0], [10.4, 284.0], [10.5, 284.0], [10.6, 284.0], [10.7, 284.0], [10.8, 285.0], [10.9, 285.0], [11.0, 285.0], [11.1, 285.0], [11.2, 285.0], [11.3, 285.0], [11.4, 285.0], [11.5, 285.0], [11.6, 285.0], [11.7, 285.0], [11.8, 285.0], [11.9, 286.0], [12.0, 286.0], [12.1, 286.0], [12.2, 286.0], [12.3, 286.0], [12.4, 286.0], [12.5, 286.0], [12.6, 286.0], [12.7, 286.0], [12.8, 286.0], [12.9, 286.0], [13.0, 286.0], [13.1, 286.0], [13.2, 286.0], [13.3, 287.0], [13.4, 287.0], [13.5, 287.0], [13.6, 287.0], [13.7, 287.0], [13.8, 287.0], [13.9, 287.0], [14.0, 287.0], [14.1, 287.0], [14.2, 287.0], [14.3, 287.0], [14.4, 287.0], [14.5, 287.0], [14.6, 288.0], [14.7, 288.0], [14.8, 288.0], [14.9, 288.0], [15.0, 288.0], [15.1, 288.0], [15.2, 288.0], [15.3, 288.0], [15.4, 288.0], [15.5, 288.0], [15.6, 288.0], [15.7, 288.0], [15.8, 288.0], [15.9, 288.0], [16.0, 288.0], [16.1, 288.0], [16.2, 288.0], [16.3, 288.0], [16.4, 288.0], [16.5, 289.0], [16.6, 289.0], [16.7, 289.0], [16.8, 289.0], [16.9, 289.0], [17.0, 289.0], [17.1, 289.0], [17.2, 289.0], [17.3, 289.0], [17.4, 289.0], [17.5, 289.0], [17.6, 289.0], [17.7, 289.0], [17.8, 289.0], [17.9, 289.0], [18.0, 289.0], [18.1, 290.0], [18.2, 290.0], [18.3, 290.0], [18.4, 290.0], [18.5, 290.0], [18.6, 290.0], [18.7, 290.0], [18.8, 290.0], [18.9, 290.0], [19.0, 290.0], [19.1, 290.0], [19.2, 290.0], [19.3, 291.0], [19.4, 291.0], [19.5, 291.0], [19.6, 291.0], [19.7, 291.0], [19.8, 291.0], [19.9, 291.0], [20.0, 291.0], [20.1, 291.0], [20.2, 291.0], [20.3, 291.0], [20.4, 291.0], [20.5, 291.0], [20.6, 292.0], [20.7, 292.0], [20.8, 292.0], [20.9, 292.0], [21.0, 292.0], [21.1, 292.0], [21.2, 292.0], [21.3, 292.0], [21.4, 292.0], [21.5, 292.0], [21.6, 292.0], [21.7, 292.0], [21.8, 292.0], [21.9, 292.0], [22.0, 293.0], [22.1, 293.0], [22.2, 293.0], [22.3, 293.0], [22.4, 293.0], [22.5, 293.0], [22.6, 293.0], [22.7, 293.0], [22.8, 293.0], [22.9, 293.0], [23.0, 293.0], [23.1, 293.0], [23.2, 293.0], [23.3, 293.0], [23.4, 293.0], [23.5, 293.0], [23.6, 293.0], [23.7, 293.0], [23.8, 293.0], [23.9, 294.0], [24.0, 294.0], [24.1, 294.0], [24.2, 294.0], [24.3, 294.0], [24.4, 294.0], [24.5, 294.0], [24.6, 294.0], [24.7, 294.0], [24.8, 294.0], [24.9, 294.0], [25.0, 294.0], [25.1, 294.0], [25.2, 294.0], [25.3, 294.0], [25.4, 294.0], [25.5, 295.0], [25.6, 295.0], [25.7, 295.0], [25.8, 295.0], [25.9, 295.0], [26.0, 295.0], [26.1, 295.0], [26.2, 295.0], [26.3, 295.0], [26.4, 295.0], [26.5, 295.0], [26.6, 295.0], [26.7, 295.0], [26.8, 295.0], [26.9, 295.0], [27.0, 295.0], [27.1, 295.0], [27.2, 295.0], [27.3, 295.0], [27.4, 296.0], [27.5, 296.0], [27.6, 296.0], [27.7, 296.0], [27.8, 296.0], [27.9, 296.0], [28.0, 296.0], [28.1, 296.0], [28.2, 296.0], [28.3, 296.0], [28.4, 296.0], [28.5, 296.0], [28.6, 296.0], [28.7, 296.0], [28.8, 297.0], [28.9, 297.0], [29.0, 297.0], [29.1, 297.0], [29.2, 297.0], [29.3, 297.0], [29.4, 297.0], [29.5, 297.0], [29.6, 297.0], [29.7, 297.0], [29.8, 297.0], [29.9, 297.0], [30.0, 297.0], [30.1, 297.0], [30.2, 297.0], [30.3, 297.0], [30.4, 297.0], [30.5, 297.0], [30.6, 297.0], [30.7, 298.0], [30.8, 298.0], [30.9, 298.0], [31.0, 298.0], [31.1, 298.0], [31.2, 298.0], [31.3, 298.0], [31.4, 298.0], [31.5, 298.0], [31.6, 298.0], [31.7, 298.0], [31.8, 298.0], [31.9, 298.0], [32.0, 298.0], [32.1, 298.0], [32.2, 298.0], [32.3, 298.0], [32.4, 298.0], [32.5, 298.0], [32.6, 299.0], [32.7, 299.0], [32.8, 299.0], [32.9, 299.0], [33.0, 299.0], [33.1, 299.0], [33.2, 299.0], [33.3, 299.0], [33.4, 299.0], [33.5, 299.0], [33.6, 299.0], [33.7, 299.0], [33.8, 299.0], [33.9, 299.0], [34.0, 299.0], [34.1, 299.0], [34.2, 300.0], [34.3, 300.0], [34.4, 300.0], [34.5, 300.0], [34.6, 300.0], [34.7, 300.0], [34.8, 300.0], [34.9, 300.0], [35.0, 300.0], [35.1, 300.0], [35.2, 300.0], [35.3, 300.0], [35.4, 301.0], [35.5, 301.0], [35.6, 301.0], [35.7, 301.0], [35.8, 301.0], [35.9, 301.0], [36.0, 301.0], [36.1, 301.0], [36.2, 301.0], [36.3, 301.0], [36.4, 301.0], [36.5, 301.0], [36.6, 301.0], [36.7, 301.0], [36.8, 301.0], [36.9, 301.0], [37.0, 301.0], [37.1, 301.0], [37.2, 302.0], [37.3, 302.0], [37.4, 302.0], [37.5, 302.0], [37.6, 302.0], [37.7, 302.0], [37.8, 302.0], [37.9, 302.0], [38.0, 302.0], [38.1, 302.0], [38.2, 302.0], [38.3, 302.0], [38.4, 302.0], [38.5, 302.0], [38.6, 302.0], [38.7, 303.0], [38.8, 303.0], [38.9, 303.0], [39.0, 303.0], [39.1, 303.0], [39.2, 303.0], [39.3, 303.0], [39.4, 303.0], [39.5, 303.0], [39.6, 303.0], [39.7, 303.0], [39.8, 303.0], [39.9, 303.0], [40.0, 303.0], [40.1, 303.0], [40.2, 303.0], [40.3, 303.0], [40.4, 303.0], [40.5, 304.0], [40.6, 304.0], [40.7, 304.0], [40.8, 304.0], [40.9, 304.0], [41.0, 304.0], [41.1, 304.0], [41.2, 304.0], [41.3, 304.0], [41.4, 304.0], [41.5, 304.0], [41.6, 304.0], [41.7, 304.0], [41.8, 304.0], [41.9, 304.0], [42.0, 304.0], [42.1, 304.0], [42.2, 304.0], [42.3, 305.0], [42.4, 305.0], [42.5, 305.0], [42.6, 305.0], [42.7, 305.0], [42.8, 305.0], [42.9, 305.0], [43.0, 305.0], [43.1, 305.0], [43.2, 305.0], [43.3, 305.0], [43.4, 305.0], [43.5, 305.0], [43.6, 305.0], [43.7, 305.0], [43.8, 305.0], [43.9, 305.0], [44.0, 305.0], [44.1, 305.0], [44.2, 305.0], [44.3, 305.0], [44.4, 305.0], [44.5, 305.0], [44.6, 305.0], [44.7, 305.0], [44.8, 305.0], [44.9, 306.0], [45.0, 306.0], [45.1, 306.0], [45.2, 306.0], [45.3, 306.0], [45.4, 306.0], [45.5, 306.0], [45.6, 306.0], [45.7, 306.0], [45.8, 306.0], [45.9, 306.0], [46.0, 306.0], [46.1, 306.0], [46.2, 306.0], [46.3, 306.0], [46.4, 307.0], [46.5, 307.0], [46.6, 307.0], [46.7, 307.0], [46.8, 307.0], [46.9, 307.0], [47.0, 307.0], [47.1, 307.0], [47.2, 307.0], [47.3, 307.0], [47.4, 307.0], [47.5, 307.0], [47.6, 307.0], [47.7, 307.0], [47.8, 307.0], [47.9, 307.0], [48.0, 307.0], [48.1, 308.0], [48.2, 308.0], [48.3, 308.0], [48.4, 308.0], [48.5, 308.0], [48.6, 308.0], [48.7, 308.0], [48.8, 308.0], [48.9, 308.0], [49.0, 308.0], [49.1, 308.0], [49.2, 308.0], [49.3, 308.0], [49.4, 309.0], [49.5, 309.0], [49.6, 309.0], [49.7, 309.0], [49.8, 309.0], [49.9, 309.0], [50.0, 309.0], [50.1, 309.0], [50.2, 309.0], [50.3, 309.0], [50.4, 309.0], [50.5, 309.0], [50.6, 309.0], [50.7, 309.0], [50.8, 309.0], [50.9, 309.0], [51.0, 309.0], [51.1, 309.0], [51.2, 309.0], [51.3, 310.0], [51.4, 310.0], [51.5, 310.0], [51.6, 310.0], [51.7, 310.0], [51.8, 310.0], [51.9, 310.0], [52.0, 310.0], [52.1, 310.0], [52.2, 310.0], [52.3, 310.0], [52.4, 310.0], [52.5, 310.0], [52.6, 310.0], [52.7, 310.0], [52.8, 310.0], [52.9, 310.0], [53.0, 311.0], [53.1, 311.0], [53.2, 311.0], [53.3, 311.0], [53.4, 311.0], [53.5, 311.0], [53.6, 311.0], [53.7, 311.0], [53.8, 311.0], [53.9, 311.0], [54.0, 311.0], [54.1, 311.0], [54.2, 311.0], [54.3, 311.0], [54.4, 312.0], [54.5, 312.0], [54.6, 312.0], [54.7, 312.0], [54.8, 312.0], [54.9, 312.0], [55.0, 312.0], [55.1, 312.0], [55.2, 313.0], [55.3, 313.0], [55.4, 313.0], [55.5, 313.0], [55.6, 313.0], [55.7, 313.0], [55.8, 313.0], [55.9, 313.0], [56.0, 313.0], [56.1, 313.0], [56.2, 313.0], [56.3, 313.0], [56.4, 313.0], [56.5, 313.0], [56.6, 313.0], [56.7, 314.0], [56.8, 314.0], [56.9, 314.0], [57.0, 314.0], [57.1, 314.0], [57.2, 314.0], [57.3, 314.0], [57.4, 314.0], [57.5, 314.0], [57.6, 314.0], [57.7, 314.0], [57.8, 314.0], [57.9, 314.0], [58.0, 314.0], [58.1, 314.0], [58.2, 314.0], [58.3, 314.0], [58.4, 314.0], [58.5, 315.0], [58.6, 315.0], [58.7, 315.0], [58.8, 315.0], [58.9, 315.0], [59.0, 315.0], [59.1, 315.0], [59.2, 315.0], [59.3, 315.0], [59.4, 315.0], [59.5, 315.0], [59.6, 315.0], [59.7, 315.0], [59.8, 315.0], [59.9, 315.0], [60.0, 316.0], [60.1, 316.0], [60.2, 316.0], [60.3, 316.0], [60.4, 316.0], [60.5, 316.0], [60.6, 316.0], [60.7, 316.0], [60.8, 316.0], [60.9, 316.0], [61.0, 316.0], [61.1, 316.0], [61.2, 316.0], [61.3, 316.0], [61.4, 317.0], [61.5, 317.0], [61.6, 317.0], [61.7, 317.0], [61.8, 317.0], [61.9, 317.0], [62.0, 317.0], [62.1, 317.0], [62.2, 317.0], [62.3, 317.0], [62.4, 317.0], [62.5, 317.0], [62.6, 317.0], [62.7, 318.0], [62.8, 318.0], [62.9, 318.0], [63.0, 318.0], [63.1, 318.0], [63.2, 318.0], [63.3, 318.0], [63.4, 318.0], [63.5, 318.0], [63.6, 318.0], [63.7, 318.0], [63.8, 318.0], [63.9, 318.0], [64.0, 319.0], [64.1, 319.0], [64.2, 319.0], [64.3, 319.0], [64.4, 319.0], [64.5, 319.0], [64.6, 319.0], [64.7, 319.0], [64.8, 319.0], [64.9, 319.0], [65.0, 319.0], [65.1, 319.0], [65.2, 320.0], [65.3, 320.0], [65.4, 320.0], [65.5, 320.0], [65.6, 320.0], [65.7, 320.0], [65.8, 320.0], [65.9, 321.0], [66.0, 321.0], [66.1, 321.0], [66.2, 321.0], [66.3, 321.0], [66.4, 321.0], [66.5, 321.0], [66.6, 321.0], [66.7, 321.0], [66.8, 322.0], [66.9, 322.0], [67.0, 322.0], [67.1, 322.0], [67.2, 322.0], [67.3, 322.0], [67.4, 322.0], [67.5, 322.0], [67.6, 322.0], [67.7, 322.0], [67.8, 322.0], [67.9, 323.0], [68.0, 323.0], [68.1, 323.0], [68.2, 323.0], [68.3, 323.0], [68.4, 323.0], [68.5, 323.0], [68.6, 323.0], [68.7, 323.0], [68.8, 323.0], [68.9, 324.0], [69.0, 324.0], [69.1, 324.0], [69.2, 324.0], [69.3, 324.0], [69.4, 324.0], [69.5, 324.0], [69.6, 324.0], [69.7, 325.0], [69.8, 325.0], [69.9, 325.0], [70.0, 325.0], [70.1, 325.0], [70.2, 325.0], [70.3, 325.0], [70.4, 325.0], [70.5, 326.0], [70.6, 326.0], [70.7, 326.0], [70.8, 326.0], [70.9, 326.0], [71.0, 326.0], [71.1, 326.0], [71.2, 326.0], [71.3, 326.0], [71.4, 326.0], [71.5, 327.0], [71.6, 327.0], [71.7, 327.0], [71.8, 327.0], [71.9, 327.0], [72.0, 328.0], [72.1, 328.0], [72.2, 328.0], [72.3, 328.0], [72.4, 328.0], [72.5, 328.0], [72.6, 329.0], [72.7, 329.0], [72.8, 329.0], [72.9, 329.0], [73.0, 329.0], [73.1, 329.0], [73.2, 329.0], [73.3, 330.0], [73.4, 330.0], [73.5, 330.0], [73.6, 330.0], [73.7, 330.0], [73.8, 330.0], [73.9, 330.0], [74.0, 331.0], [74.1, 331.0], [74.2, 331.0], [74.3, 331.0], [74.4, 332.0], [74.5, 332.0], [74.6, 332.0], [74.7, 332.0], [74.8, 332.0], [74.9, 333.0], [75.0, 333.0], [75.1, 333.0], [75.2, 334.0], [75.3, 334.0], [75.4, 334.0], [75.5, 334.0], [75.6, 334.0], [75.7, 334.0], [75.8, 334.0], [75.9, 335.0], [76.0, 335.0], [76.1, 335.0], [76.2, 335.0], [76.3, 335.0], [76.4, 335.0], [76.5, 335.0], [76.6, 336.0], [76.7, 336.0], [76.8, 336.0], [76.9, 337.0], [77.0, 337.0], [77.1, 337.0], [77.2, 337.0], [77.3, 337.0], [77.4, 337.0], [77.5, 338.0], [77.6, 338.0], [77.7, 338.0], [77.8, 339.0], [77.9, 339.0], [78.0, 339.0], [78.1, 339.0], [78.2, 339.0], [78.3, 340.0], [78.4, 340.0], [78.5, 340.0], [78.6, 340.0], [78.7, 340.0], [78.8, 340.0], [78.9, 341.0], [79.0, 341.0], [79.1, 341.0], [79.2, 341.0], [79.3, 342.0], [79.4, 342.0], [79.5, 342.0], [79.6, 342.0], [79.7, 343.0], [79.8, 343.0], [79.9, 344.0], [80.0, 344.0], [80.1, 344.0], [80.2, 345.0], [80.3, 345.0], [80.4, 345.0], [80.5, 345.0], [80.6, 346.0], [80.7, 347.0], [80.8, 347.0], [80.9, 347.0], [81.0, 347.0], [81.1, 348.0], [81.2, 349.0], [81.3, 350.0], [81.4, 350.0], [81.5, 350.0], [81.6, 350.0], [81.7, 351.0], [81.8, 351.0], [81.9, 351.0], [82.0, 352.0], [82.1, 352.0], [82.2, 352.0], [82.3, 353.0], [82.4, 354.0], [82.5, 355.0], [82.6, 356.0], [82.7, 357.0], [82.8, 357.0], [82.9, 358.0], [83.0, 358.0], [83.1, 359.0], [83.2, 359.0], [83.3, 360.0], [83.4, 360.0], [83.5, 362.0], [83.6, 362.0], [83.7, 362.0], [83.8, 363.0], [83.9, 363.0], [84.0, 364.0], [84.1, 365.0], [84.2, 366.0], [84.3, 366.0], [84.4, 367.0], [84.5, 367.0], [84.6, 368.0], [84.7, 369.0], [84.8, 370.0], [84.9, 370.0], [85.0, 371.0], [85.1, 372.0], [85.2, 372.0], [85.3, 373.0], [85.4, 374.0], [85.5, 374.0], [85.6, 375.0], [85.7, 375.0], [85.8, 376.0], [85.9, 376.0], [86.0, 376.0], [86.1, 378.0], [86.2, 379.0], [86.3, 379.0], [86.4, 380.0], [86.5, 380.0], [86.6, 381.0], [86.7, 381.0], [86.8, 381.0], [86.9, 382.0], [87.0, 385.0], [87.1, 385.0], [87.2, 386.0], [87.3, 387.0], [87.4, 387.0], [87.5, 388.0], [87.6, 389.0], [87.7, 390.0], [87.8, 391.0], [87.9, 392.0], [88.0, 392.0], [88.1, 394.0], [88.2, 394.0], [88.3, 395.0], [88.4, 398.0], [88.5, 399.0], [88.6, 399.0], [88.7, 400.0], [88.8, 402.0], [88.9, 402.0], [89.0, 404.0], [89.1, 404.0], [89.2, 405.0], [89.3, 405.0], [89.4, 407.0], [89.5, 411.0], [89.6, 416.0], [89.7, 416.0], [89.8, 419.0], [89.9, 423.0], [90.0, 427.0], [90.1, 428.0], [90.2, 429.0], [90.3, 433.0], [90.4, 438.0], [90.5, 439.0], [90.6, 441.0], [90.7, 445.0], [90.8, 446.0], [90.9, 451.0], [91.0, 454.0], [91.1, 457.0], [91.2, 461.0], [91.3, 464.0], [91.4, 466.0], [91.5, 470.0], [91.6, 471.0], [91.7, 471.0], [91.8, 475.0], [91.9, 479.0], [92.0, 488.0], [92.1, 492.0], [92.2, 493.0], [92.3, 503.0], [92.4, 504.0], [92.5, 508.0], [92.6, 511.0], [92.7, 513.0], [92.8, 515.0], [92.9, 517.0], [93.0, 537.0], [93.1, 544.0], [93.2, 546.0], [93.3, 546.0], [93.4, 550.0], [93.5, 551.0], [93.6, 552.0], [93.7, 554.0], [93.8, 558.0], [93.9, 563.0], [94.0, 567.0], [94.1, 571.0], [94.2, 579.0], [94.3, 580.0], [94.4, 582.0], [94.5, 584.0], [94.6, 591.0], [94.7, 597.0], [94.8, 604.0], [94.9, 620.0], [95.0, 624.0], [95.1, 627.0], [95.2, 633.0], [95.3, 638.0], [95.4, 640.0], [95.5, 645.0], [95.6, 649.0], [95.7, 651.0], [95.8, 660.0], [95.9, 669.0], [96.0, 674.0], [96.1, 678.0], [96.2, 685.0], [96.3, 691.0], [96.4, 699.0], [96.5, 705.0], [96.6, 772.0], [96.7, 773.0], [96.8, 774.0], [96.9, 776.0], [97.0, 790.0], [97.1, 792.0], [97.2, 821.0], [97.3, 924.0], [97.4, 941.0], [97.5, 1313.0], [97.6, 1335.0], [97.7, 1353.0], [97.8, 1359.0], [97.9, 1362.0], [98.0, 1369.0], [98.1, 1370.0], [98.2, 1377.0], [98.3, 1381.0], [98.4, 1386.0], [98.5, 1400.0], [98.6, 1411.0], [98.7, 1416.0], [98.8, 1431.0], [98.9, 1452.0], [99.0, 1459.0], [99.1, 1461.0], [99.2, 1471.0], [99.3, 1496.0], [99.4, 1505.0], [99.5, 1540.0], [99.6, 1599.0], [99.7, 1677.0], [99.8, 1721.0], [99.9, 1904.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1090.0, "series": [{"data": [[600.0, 34.0], [700.0, 15.0], [200.0, 682.0], [800.0, 2.0], [900.0, 3.0], [1100.0, 1.0], [300.0, 1090.0], [1300.0, 20.0], [1400.0, 18.0], [1500.0, 5.0], [400.0, 74.0], [1600.0, 2.0], [1700.0, 3.0], [1900.0, 1.0], [500.0, 49.0], [2000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 12.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1846.0, "series": [{"data": [[0.0, 1846.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 142.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 12.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 12.841592201462241, "minX": 1.77649224E12, "maxY": 14.196358907672314, "series": [{"data": [[1.77649224E12, 14.196358907672314], [1.7764923E12, 12.841592201462241]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7764923E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 283.0, "minX": 1.0, "maxY": 454.75675675675683, "series": [{"data": [[2.0, 445.3], [8.0, 425.8064516129033], [9.0, 374.5205479452055], [10.0, 341.1111111111111], [11.0, 330.28089887640436], [3.0, 397.75000000000006], [12.0, 404.4736842105264], [13.0, 353.0548780487803], [14.0, 347.579075425791], [15.0, 346.0814814814816], [4.0, 372.52631578947376], [16.0, 372.53243243243236], [1.0, 283.0], [17.0, 454.75675675675683], [5.0, 349.75862068965523], [6.0, 374.3076923076923], [7.0, 355.6136363636364]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[13.362500000000004, 360.7970000000002]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 17.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2412.5666666666666, "minX": 1.77649224E12, "maxY": 854161.2666666667, "series": [{"data": [[1.77649224E12, 456124.6666666667], [1.7764923E12, 854161.2666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77649224E12, 2412.5666666666666], [1.7764923E12, 3870.766666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7764923E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 335.00487408610894, "minX": 1.77649224E12, "maxY": 402.08452535760705, "series": [{"data": [[1.77649224E12, 402.08452535760705], [1.7764923E12, 335.00487408610894]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7764923E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 325.79122664500426, "minX": 1.77649224E12, "maxY": 378.1716514954486, "series": [{"data": [[1.77649224E12, 378.1716514954486], [1.7764923E12, 325.79122664500426]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7764923E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 11.637692932575145, "minX": 1.77649224E12, "maxY": 23.526657997399187, "series": [{"data": [[1.77649224E12, 23.526657997399187], [1.7764923E12, 11.637692932575145]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7764923E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 264.0, "minX": 1.77649224E12, "maxY": 2072.0, "series": [{"data": [[1.77649224E12, 2072.0], [1.7764923E12, 1776.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77649224E12, 620.0], [1.7764923E12, 353.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77649224E12, 1582.199999999999], [1.7764923E12, 1395.520000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77649224E12, 775.5], [1.7764923E12, 394.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77649224E12, 266.0], [1.7764923E12, 264.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77649224E12, 315.0], [1.7764923E12, 307.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7764923E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 289.0, "minX": 1.0, "maxY": 1002.0, "series": [{"data": [[35.0, 310.0], [34.0, 317.5], [37.0, 321.5], [36.0, 325.0], [39.0, 316.0], [38.0, 314.0], [41.0, 303.0], [40.0, 310.0], [42.0, 301.5], [43.0, 310.0], [44.0, 307.0], [47.0, 303.0], [46.0, 311.0], [48.0, 325.5], [49.0, 289.0], [50.0, 297.0], [51.0, 293.0], [5.0, 315.0], [6.0, 380.5], [8.0, 314.0], [9.0, 298.0], [12.0, 298.5], [13.0, 301.0], [14.0, 326.5], [15.0, 552.0], [1.0, 1002.0], [16.0, 512.5], [17.0, 320.5], [19.0, 304.0], [20.0, 370.5], [25.0, 313.0], [26.0, 293.5], [27.0, 314.0], [28.0, 318.5], [31.0, 313.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 287.0, "minX": 1.0, "maxY": 870.5, "series": [{"data": [[35.0, 310.0], [34.0, 314.5], [37.0, 319.0], [36.0, 320.5], [39.0, 314.0], [38.0, 312.5], [41.0, 301.5], [40.0, 307.5], [42.0, 298.5], [43.0, 306.5], [44.0, 305.0], [47.0, 300.0], [46.0, 308.0], [48.0, 322.0], [49.0, 287.0], [50.0, 296.5], [51.0, 289.5], [5.0, 314.0], [6.0, 378.5], [8.0, 313.5], [9.0, 296.0], [12.0, 292.5], [13.0, 298.0], [14.0, 326.0], [15.0, 316.0], [1.0, 870.5], [16.0, 510.0], [17.0, 319.5], [19.0, 297.0], [20.0, 365.0], [25.0, 308.0], [26.0, 291.5], [27.0, 313.0], [28.0, 306.0], [31.0, 312.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 13.083333333333334, "minX": 1.77649224E12, "maxY": 20.25, "series": [{"data": [[1.77649224E12, 13.083333333333334], [1.7764923E12, 20.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7764923E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 12.816666666666666, "minX": 1.77649224E12, "maxY": 20.516666666666666, "series": [{"data": [[1.77649224E12, 12.816666666666666], [1.7764923E12, 20.516666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7764923E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 12.816666666666666, "minX": 1.77649224E12, "maxY": 20.516666666666666, "series": [{"data": [[1.77649224E12, 12.816666666666666], [1.7764923E12, 20.516666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7764923E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 12.816666666666666, "minX": 1.77649224E12, "maxY": 20.516666666666666, "series": [{"data": [[1.77649224E12, 12.816666666666666], [1.7764923E12, 20.516666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7764923E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

