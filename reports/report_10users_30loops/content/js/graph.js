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
        data: {"result": {"minY": 262.0, "minX": 0.0, "maxY": 4130.0, "series": [{"data": [[0.0, 262.0], [0.1, 262.0], [0.2, 262.0], [0.3, 262.0], [0.4, 263.0], [0.5, 264.0], [0.6, 264.0], [0.7, 266.0], [0.8, 266.0], [0.9, 267.0], [1.0, 268.0], [1.1, 268.0], [1.2, 268.0], [1.3, 268.0], [1.4, 269.0], [1.5, 269.0], [1.6, 269.0], [1.7, 269.0], [1.8, 269.0], [1.9, 269.0], [2.0, 270.0], [2.1, 270.0], [2.2, 270.0], [2.3, 270.0], [2.4, 270.0], [2.5, 271.0], [2.6, 271.0], [2.7, 271.0], [2.8, 271.0], [2.9, 271.0], [3.0, 271.0], [3.1, 271.0], [3.2, 272.0], [3.3, 272.0], [3.4, 272.0], [3.5, 272.0], [3.6, 272.0], [3.7, 273.0], [3.8, 273.0], [3.9, 273.0], [4.0, 274.0], [4.1, 274.0], [4.2, 274.0], [4.3, 274.0], [4.4, 274.0], [4.5, 274.0], [4.6, 274.0], [4.7, 274.0], [4.8, 274.0], [4.9, 274.0], [5.0, 274.0], [5.1, 274.0], [5.2, 274.0], [5.3, 274.0], [5.4, 274.0], [5.5, 275.0], [5.6, 275.0], [5.7, 275.0], [5.8, 275.0], [5.9, 276.0], [6.0, 276.0], [6.1, 276.0], [6.2, 276.0], [6.3, 276.0], [6.4, 276.0], [6.5, 276.0], [6.6, 276.0], [6.7, 276.0], [6.8, 276.0], [6.9, 276.0], [7.0, 277.0], [7.1, 277.0], [7.2, 277.0], [7.3, 277.0], [7.4, 277.0], [7.5, 277.0], [7.6, 277.0], [7.7, 277.0], [7.8, 277.0], [7.9, 277.0], [8.0, 277.0], [8.1, 277.0], [8.2, 277.0], [8.3, 277.0], [8.4, 277.0], [8.5, 278.0], [8.6, 278.0], [8.7, 278.0], [8.8, 278.0], [8.9, 278.0], [9.0, 278.0], [9.1, 278.0], [9.2, 278.0], [9.3, 278.0], [9.4, 278.0], [9.5, 278.0], [9.6, 278.0], [9.7, 278.0], [9.8, 278.0], [9.9, 278.0], [10.0, 278.0], [10.1, 278.0], [10.2, 278.0], [10.3, 278.0], [10.4, 278.0], [10.5, 278.0], [10.6, 278.0], [10.7, 278.0], [10.8, 278.0], [10.9, 278.0], [11.0, 278.0], [11.1, 278.0], [11.2, 279.0], [11.3, 279.0], [11.4, 279.0], [11.5, 279.0], [11.6, 279.0], [11.7, 279.0], [11.8, 279.0], [11.9, 279.0], [12.0, 279.0], [12.1, 279.0], [12.2, 279.0], [12.3, 279.0], [12.4, 279.0], [12.5, 279.0], [12.6, 279.0], [12.7, 279.0], [12.8, 279.0], [12.9, 279.0], [13.0, 280.0], [13.1, 280.0], [13.2, 280.0], [13.3, 280.0], [13.4, 280.0], [13.5, 280.0], [13.6, 280.0], [13.7, 280.0], [13.8, 280.0], [13.9, 280.0], [14.0, 280.0], [14.1, 280.0], [14.2, 280.0], [14.3, 280.0], [14.4, 281.0], [14.5, 281.0], [14.6, 281.0], [14.7, 281.0], [14.8, 281.0], [14.9, 281.0], [15.0, 281.0], [15.1, 281.0], [15.2, 281.0], [15.3, 281.0], [15.4, 281.0], [15.5, 281.0], [15.6, 281.0], [15.7, 282.0], [15.8, 282.0], [15.9, 282.0], [16.0, 282.0], [16.1, 282.0], [16.2, 282.0], [16.3, 282.0], [16.4, 282.0], [16.5, 282.0], [16.6, 282.0], [16.7, 282.0], [16.8, 282.0], [16.9, 282.0], [17.0, 282.0], [17.1, 282.0], [17.2, 282.0], [17.3, 282.0], [17.4, 283.0], [17.5, 283.0], [17.6, 283.0], [17.7, 283.0], [17.8, 283.0], [17.9, 283.0], [18.0, 283.0], [18.1, 283.0], [18.2, 283.0], [18.3, 283.0], [18.4, 283.0], [18.5, 283.0], [18.6, 284.0], [18.7, 284.0], [18.8, 284.0], [18.9, 284.0], [19.0, 284.0], [19.1, 284.0], [19.2, 284.0], [19.3, 284.0], [19.4, 284.0], [19.5, 284.0], [19.6, 284.0], [19.7, 284.0], [19.8, 284.0], [19.9, 284.0], [20.0, 284.0], [20.1, 284.0], [20.2, 284.0], [20.3, 284.0], [20.4, 284.0], [20.5, 284.0], [20.6, 284.0], [20.7, 285.0], [20.8, 285.0], [20.9, 285.0], [21.0, 285.0], [21.1, 285.0], [21.2, 285.0], [21.3, 285.0], [21.4, 285.0], [21.5, 285.0], [21.6, 285.0], [21.7, 285.0], [21.8, 285.0], [21.9, 285.0], [22.0, 285.0], [22.1, 286.0], [22.2, 286.0], [22.3, 286.0], [22.4, 286.0], [22.5, 286.0], [22.6, 286.0], [22.7, 286.0], [22.8, 286.0], [22.9, 286.0], [23.0, 286.0], [23.1, 286.0], [23.2, 286.0], [23.3, 286.0], [23.4, 286.0], [23.5, 286.0], [23.6, 286.0], [23.7, 286.0], [23.8, 286.0], [23.9, 287.0], [24.0, 287.0], [24.1, 287.0], [24.2, 287.0], [24.3, 287.0], [24.4, 287.0], [24.5, 287.0], [24.6, 287.0], [24.7, 287.0], [24.8, 287.0], [24.9, 287.0], [25.0, 287.0], [25.1, 287.0], [25.2, 287.0], [25.3, 287.0], [25.4, 287.0], [25.5, 287.0], [25.6, 288.0], [25.7, 288.0], [25.8, 288.0], [25.9, 288.0], [26.0, 288.0], [26.1, 288.0], [26.2, 288.0], [26.3, 288.0], [26.4, 288.0], [26.5, 288.0], [26.6, 288.0], [26.7, 288.0], [26.8, 288.0], [26.9, 289.0], [27.0, 289.0], [27.1, 289.0], [27.2, 289.0], [27.3, 289.0], [27.4, 289.0], [27.5, 289.0], [27.6, 289.0], [27.7, 289.0], [27.8, 289.0], [27.9, 290.0], [28.0, 290.0], [28.1, 290.0], [28.2, 290.0], [28.3, 290.0], [28.4, 290.0], [28.5, 290.0], [28.6, 290.0], [28.7, 290.0], [28.8, 290.0], [28.9, 290.0], [29.0, 290.0], [29.1, 290.0], [29.2, 290.0], [29.3, 290.0], [29.4, 291.0], [29.5, 291.0], [29.6, 291.0], [29.7, 291.0], [29.8, 291.0], [29.9, 291.0], [30.0, 291.0], [30.1, 291.0], [30.2, 291.0], [30.3, 291.0], [30.4, 291.0], [30.5, 291.0], [30.6, 291.0], [30.7, 291.0], [30.8, 291.0], [30.9, 291.0], [31.0, 291.0], [31.1, 292.0], [31.2, 292.0], [31.3, 292.0], [31.4, 292.0], [31.5, 292.0], [31.6, 292.0], [31.7, 292.0], [31.8, 292.0], [31.9, 292.0], [32.0, 292.0], [32.1, 292.0], [32.2, 293.0], [32.3, 293.0], [32.4, 293.0], [32.5, 293.0], [32.6, 293.0], [32.7, 293.0], [32.8, 293.0], [32.9, 293.0], [33.0, 293.0], [33.1, 293.0], [33.2, 293.0], [33.3, 293.0], [33.4, 293.0], [33.5, 293.0], [33.6, 293.0], [33.7, 294.0], [33.8, 294.0], [33.9, 294.0], [34.0, 294.0], [34.1, 294.0], [34.2, 294.0], [34.3, 294.0], [34.4, 294.0], [34.5, 294.0], [34.6, 294.0], [34.7, 294.0], [34.8, 294.0], [34.9, 294.0], [35.0, 294.0], [35.1, 294.0], [35.2, 294.0], [35.3, 294.0], [35.4, 294.0], [35.5, 294.0], [35.6, 294.0], [35.7, 294.0], [35.8, 294.0], [35.9, 295.0], [36.0, 295.0], [36.1, 295.0], [36.2, 295.0], [36.3, 295.0], [36.4, 295.0], [36.5, 295.0], [36.6, 295.0], [36.7, 295.0], [36.8, 295.0], [36.9, 295.0], [37.0, 295.0], [37.1, 295.0], [37.2, 295.0], [37.3, 295.0], [37.4, 295.0], [37.5, 295.0], [37.6, 295.0], [37.7, 295.0], [37.8, 295.0], [37.9, 295.0], [38.0, 295.0], [38.1, 295.0], [38.2, 295.0], [38.3, 295.0], [38.4, 295.0], [38.5, 295.0], [38.6, 295.0], [38.7, 296.0], [38.8, 296.0], [38.9, 296.0], [39.0, 296.0], [39.1, 296.0], [39.2, 296.0], [39.3, 296.0], [39.4, 296.0], [39.5, 296.0], [39.6, 296.0], [39.7, 296.0], [39.8, 296.0], [39.9, 296.0], [40.0, 296.0], [40.1, 296.0], [40.2, 296.0], [40.3, 296.0], [40.4, 296.0], [40.5, 296.0], [40.6, 297.0], [40.7, 297.0], [40.8, 297.0], [40.9, 297.0], [41.0, 297.0], [41.1, 297.0], [41.2, 297.0], [41.3, 297.0], [41.4, 297.0], [41.5, 297.0], [41.6, 298.0], [41.7, 298.0], [41.8, 298.0], [41.9, 298.0], [42.0, 298.0], [42.1, 298.0], [42.2, 298.0], [42.3, 298.0], [42.4, 298.0], [42.5, 298.0], [42.6, 298.0], [42.7, 298.0], [42.8, 298.0], [42.9, 298.0], [43.0, 298.0], [43.1, 298.0], [43.2, 298.0], [43.3, 298.0], [43.4, 298.0], [43.5, 298.0], [43.6, 298.0], [43.7, 299.0], [43.8, 299.0], [43.9, 299.0], [44.0, 299.0], [44.1, 299.0], [44.2, 299.0], [44.3, 299.0], [44.4, 300.0], [44.5, 300.0], [44.6, 300.0], [44.7, 300.0], [44.8, 300.0], [44.9, 300.0], [45.0, 300.0], [45.1, 300.0], [45.2, 300.0], [45.3, 300.0], [45.4, 300.0], [45.5, 301.0], [45.6, 301.0], [45.7, 301.0], [45.8, 301.0], [45.9, 301.0], [46.0, 301.0], [46.1, 301.0], [46.2, 301.0], [46.3, 301.0], [46.4, 301.0], [46.5, 301.0], [46.6, 301.0], [46.7, 301.0], [46.8, 301.0], [46.9, 302.0], [47.0, 302.0], [47.1, 302.0], [47.2, 302.0], [47.3, 302.0], [47.4, 302.0], [47.5, 302.0], [47.6, 302.0], [47.7, 302.0], [47.8, 302.0], [47.9, 303.0], [48.0, 304.0], [48.1, 304.0], [48.2, 304.0], [48.3, 304.0], [48.4, 304.0], [48.5, 304.0], [48.6, 304.0], [48.7, 304.0], [48.8, 304.0], [48.9, 304.0], [49.0, 304.0], [49.1, 304.0], [49.2, 304.0], [49.3, 304.0], [49.4, 304.0], [49.5, 304.0], [49.6, 304.0], [49.7, 304.0], [49.8, 304.0], [49.9, 304.0], [50.0, 304.0], [50.1, 304.0], [50.2, 305.0], [50.3, 305.0], [50.4, 305.0], [50.5, 305.0], [50.6, 305.0], [50.7, 305.0], [50.8, 305.0], [50.9, 305.0], [51.0, 306.0], [51.1, 306.0], [51.2, 306.0], [51.3, 306.0], [51.4, 306.0], [51.5, 306.0], [51.6, 306.0], [51.7, 307.0], [51.8, 307.0], [51.9, 307.0], [52.0, 307.0], [52.1, 307.0], [52.2, 307.0], [52.3, 307.0], [52.4, 307.0], [52.5, 307.0], [52.6, 307.0], [52.7, 307.0], [52.8, 307.0], [52.9, 307.0], [53.0, 307.0], [53.1, 307.0], [53.2, 307.0], [53.3, 307.0], [53.4, 308.0], [53.5, 308.0], [53.6, 308.0], [53.7, 308.0], [53.8, 308.0], [53.9, 308.0], [54.0, 308.0], [54.1, 308.0], [54.2, 309.0], [54.3, 309.0], [54.4, 309.0], [54.5, 309.0], [54.6, 309.0], [54.7, 309.0], [54.8, 309.0], [54.9, 309.0], [55.0, 309.0], [55.1, 309.0], [55.2, 309.0], [55.3, 309.0], [55.4, 309.0], [55.5, 309.0], [55.6, 309.0], [55.7, 310.0], [55.8, 310.0], [55.9, 310.0], [56.0, 310.0], [56.1, 310.0], [56.2, 310.0], [56.3, 310.0], [56.4, 310.0], [56.5, 310.0], [56.6, 310.0], [56.7, 310.0], [56.8, 310.0], [56.9, 310.0], [57.0, 310.0], [57.1, 310.0], [57.2, 311.0], [57.3, 311.0], [57.4, 311.0], [57.5, 311.0], [57.6, 311.0], [57.7, 311.0], [57.8, 311.0], [57.9, 312.0], [58.0, 312.0], [58.1, 312.0], [58.2, 312.0], [58.3, 312.0], [58.4, 312.0], [58.5, 312.0], [58.6, 312.0], [58.7, 313.0], [58.8, 313.0], [58.9, 313.0], [59.0, 313.0], [59.1, 313.0], [59.2, 313.0], [59.3, 313.0], [59.4, 313.0], [59.5, 314.0], [59.6, 314.0], [59.7, 314.0], [59.8, 314.0], [59.9, 314.0], [60.0, 315.0], [60.1, 315.0], [60.2, 315.0], [60.3, 315.0], [60.4, 316.0], [60.5, 316.0], [60.6, 316.0], [60.7, 316.0], [60.8, 316.0], [60.9, 316.0], [61.0, 316.0], [61.1, 316.0], [61.2, 316.0], [61.3, 316.0], [61.4, 317.0], [61.5, 317.0], [61.6, 317.0], [61.7, 317.0], [61.8, 317.0], [61.9, 317.0], [62.0, 318.0], [62.1, 318.0], [62.2, 318.0], [62.3, 318.0], [62.4, 319.0], [62.5, 319.0], [62.6, 319.0], [62.7, 319.0], [62.8, 319.0], [62.9, 319.0], [63.0, 319.0], [63.1, 319.0], [63.2, 320.0], [63.3, 320.0], [63.4, 320.0], [63.5, 320.0], [63.6, 320.0], [63.7, 320.0], [63.8, 320.0], [63.9, 320.0], [64.0, 320.0], [64.1, 320.0], [64.2, 320.0], [64.3, 320.0], [64.4, 321.0], [64.5, 321.0], [64.6, 321.0], [64.7, 321.0], [64.8, 321.0], [64.9, 321.0], [65.0, 321.0], [65.1, 322.0], [65.2, 322.0], [65.3, 322.0], [65.4, 322.0], [65.5, 322.0], [65.6, 322.0], [65.7, 322.0], [65.8, 322.0], [65.9, 323.0], [66.0, 323.0], [66.1, 323.0], [66.2, 323.0], [66.3, 323.0], [66.4, 324.0], [66.5, 324.0], [66.6, 324.0], [66.7, 324.0], [66.8, 324.0], [66.9, 324.0], [67.0, 324.0], [67.1, 325.0], [67.2, 325.0], [67.3, 325.0], [67.4, 325.0], [67.5, 325.0], [67.6, 325.0], [67.7, 325.0], [67.8, 325.0], [67.9, 326.0], [68.0, 326.0], [68.1, 326.0], [68.2, 326.0], [68.3, 326.0], [68.4, 326.0], [68.5, 326.0], [68.6, 327.0], [68.7, 327.0], [68.8, 327.0], [68.9, 327.0], [69.0, 327.0], [69.1, 328.0], [69.2, 328.0], [69.3, 328.0], [69.4, 328.0], [69.5, 328.0], [69.6, 328.0], [69.7, 329.0], [69.8, 329.0], [69.9, 330.0], [70.0, 330.0], [70.1, 330.0], [70.2, 331.0], [70.3, 331.0], [70.4, 331.0], [70.5, 331.0], [70.6, 331.0], [70.7, 331.0], [70.8, 331.0], [70.9, 331.0], [71.0, 331.0], [71.1, 332.0], [71.2, 332.0], [71.3, 332.0], [71.4, 332.0], [71.5, 332.0], [71.6, 333.0], [71.7, 333.0], [71.8, 333.0], [71.9, 333.0], [72.0, 333.0], [72.1, 334.0], [72.2, 335.0], [72.3, 335.0], [72.4, 335.0], [72.5, 335.0], [72.6, 335.0], [72.7, 336.0], [72.8, 336.0], [72.9, 336.0], [73.0, 336.0], [73.1, 336.0], [73.2, 336.0], [73.3, 336.0], [73.4, 336.0], [73.5, 336.0], [73.6, 336.0], [73.7, 336.0], [73.8, 336.0], [73.9, 336.0], [74.0, 336.0], [74.1, 337.0], [74.2, 337.0], [74.3, 337.0], [74.4, 339.0], [74.5, 339.0], [74.6, 339.0], [74.7, 339.0], [74.8, 339.0], [74.9, 339.0], [75.0, 339.0], [75.1, 339.0], [75.2, 340.0], [75.3, 340.0], [75.4, 340.0], [75.5, 340.0], [75.6, 340.0], [75.7, 340.0], [75.8, 340.0], [75.9, 341.0], [76.0, 341.0], [76.1, 342.0], [76.2, 342.0], [76.3, 342.0], [76.4, 342.0], [76.5, 342.0], [76.6, 342.0], [76.7, 344.0], [76.8, 344.0], [76.9, 344.0], [77.0, 344.0], [77.1, 344.0], [77.2, 344.0], [77.3, 344.0], [77.4, 344.0], [77.5, 344.0], [77.6, 344.0], [77.7, 345.0], [77.8, 345.0], [77.9, 345.0], [78.0, 345.0], [78.1, 345.0], [78.2, 345.0], [78.3, 345.0], [78.4, 345.0], [78.5, 345.0], [78.6, 345.0], [78.7, 345.0], [78.8, 345.0], [78.9, 345.0], [79.0, 345.0], [79.1, 345.0], [79.2, 346.0], [79.3, 346.0], [79.4, 347.0], [79.5, 347.0], [79.6, 347.0], [79.7, 348.0], [79.8, 348.0], [79.9, 348.0], [80.0, 348.0], [80.1, 348.0], [80.2, 349.0], [80.3, 349.0], [80.4, 349.0], [80.5, 349.0], [80.6, 349.0], [80.7, 350.0], [80.8, 350.0], [80.9, 351.0], [81.0, 351.0], [81.1, 351.0], [81.2, 351.0], [81.3, 351.0], [81.4, 351.0], [81.5, 351.0], [81.6, 352.0], [81.7, 352.0], [81.8, 352.0], [81.9, 353.0], [82.0, 353.0], [82.1, 353.0], [82.2, 353.0], [82.3, 353.0], [82.4, 353.0], [82.5, 353.0], [82.6, 354.0], [82.7, 355.0], [82.8, 355.0], [82.9, 355.0], [83.0, 355.0], [83.1, 356.0], [83.2, 356.0], [83.3, 356.0], [83.4, 356.0], [83.5, 356.0], [83.6, 356.0], [83.7, 359.0], [83.8, 359.0], [83.9, 359.0], [84.0, 359.0], [84.1, 360.0], [84.2, 360.0], [84.3, 360.0], [84.4, 361.0], [84.5, 361.0], [84.6, 361.0], [84.7, 362.0], [84.8, 362.0], [84.9, 362.0], [85.0, 362.0], [85.1, 362.0], [85.2, 363.0], [85.3, 363.0], [85.4, 363.0], [85.5, 363.0], [85.6, 363.0], [85.7, 363.0], [85.8, 363.0], [85.9, 364.0], [86.0, 364.0], [86.1, 365.0], [86.2, 366.0], [86.3, 366.0], [86.4, 366.0], [86.5, 366.0], [86.6, 367.0], [86.7, 367.0], [86.8, 367.0], [86.9, 367.0], [87.0, 367.0], [87.1, 367.0], [87.2, 368.0], [87.3, 368.0], [87.4, 369.0], [87.5, 369.0], [87.6, 369.0], [87.7, 370.0], [87.8, 370.0], [87.9, 373.0], [88.0, 373.0], [88.1, 373.0], [88.2, 374.0], [88.3, 374.0], [88.4, 374.0], [88.5, 374.0], [88.6, 374.0], [88.7, 375.0], [88.8, 375.0], [88.9, 376.0], [89.0, 376.0], [89.1, 377.0], [89.2, 377.0], [89.3, 377.0], [89.4, 377.0], [89.5, 377.0], [89.6, 377.0], [89.7, 377.0], [89.8, 377.0], [89.9, 378.0], [90.0, 378.0], [90.1, 380.0], [90.2, 381.0], [90.3, 381.0], [90.4, 382.0], [90.5, 382.0], [90.6, 384.0], [90.7, 387.0], [90.8, 387.0], [90.9, 387.0], [91.0, 387.0], [91.1, 388.0], [91.2, 394.0], [91.3, 394.0], [91.4, 395.0], [91.5, 395.0], [91.6, 396.0], [91.7, 396.0], [91.8, 396.0], [91.9, 399.0], [92.0, 399.0], [92.1, 403.0], [92.2, 410.0], [92.3, 410.0], [92.4, 413.0], [92.5, 413.0], [92.6, 416.0], [92.7, 418.0], [92.8, 418.0], [92.9, 424.0], [93.0, 424.0], [93.1, 426.0], [93.2, 430.0], [93.3, 430.0], [93.4, 432.0], [93.5, 432.0], [93.6, 495.0], [93.7, 513.0], [93.8, 513.0], [93.9, 536.0], [94.0, 536.0], [94.1, 538.0], [94.2, 540.0], [94.3, 540.0], [94.4, 544.0], [94.5, 544.0], [94.6, 551.0], [94.7, 555.0], [94.8, 555.0], [94.9, 555.0], [95.0, 555.0], [95.1, 563.0], [95.2, 567.0], [95.3, 567.0], [95.4, 581.0], [95.5, 581.0], [95.6, 594.0], [95.7, 594.0], [95.8, 594.0], [95.9, 598.0], [96.0, 598.0], [96.1, 601.0], [96.2, 603.0], [96.3, 603.0], [96.4, 612.0], [96.5, 612.0], [96.6, 614.0], [96.7, 626.0], [96.8, 626.0], [96.9, 632.0], [97.0, 632.0], [97.1, 635.0], [97.2, 651.0], [97.3, 651.0], [97.4, 712.0], [97.5, 712.0], [97.6, 759.0], [97.7, 840.0], [97.8, 840.0], [97.9, 844.0], [98.0, 844.0], [98.1, 900.0], [98.2, 905.0], [98.3, 905.0], [98.4, 1669.0], [98.5, 1669.0], [98.6, 1673.0], [98.7, 1715.0], [98.8, 1715.0], [98.9, 1733.0], [99.0, 1733.0], [99.1, 1734.0], [99.2, 1756.0], [99.3, 1756.0], [99.4, 1963.0], [99.5, 1963.0], [99.6, 2233.0], [99.7, 3232.0], [99.8, 3232.0], [99.9, 4130.0], [100.0, 4130.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 286.0, "series": [{"data": [[2200.0, 1.0], [600.0, 8.0], [700.0, 2.0], [3200.0, 1.0], [200.0, 266.0], [800.0, 2.0], [900.0, 2.0], [4100.0, 1.0], [300.0, 286.0], [1600.0, 2.0], [400.0, 10.0], [1700.0, 4.0], [1900.0, 1.0], [500.0, 14.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 562.0, "series": [{"data": [[0.0, 562.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 28.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.77658398E12, "maxY": 8.912605042016812, "series": [{"data": [[1.77658404E12, 1.0], [1.77658398E12, 8.912605042016812]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77658404E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 288.5, "minX": 1.0, "maxY": 555.0952380952383, "series": [{"data": [[8.0, 379.3214285714286], [4.0, 377.55555555555554], [2.0, 288.5], [1.0, 336.25], [9.0, 386.5384615384616], [5.0, 555.0952380952383], [10.0, 333.1970802919708], [6.0, 432.49999999999994], [3.0, 339.8], [7.0, 347.2452830188679]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[8.846666666666675, 357.6950000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 16.083333333333332, "minX": 1.77658398E12, "maxY": 745961.1833333333, "series": [{"data": [[1.77658404E12, 5149.416666666667], [1.77658398E12, 745961.1833333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77658404E12, 16.083333333333332], [1.77658398E12, 1868.9166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77658404E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 334.6, "minX": 1.77658398E12, "maxY": 357.88907563025214, "series": [{"data": [[1.77658404E12, 334.6], [1.77658398E12, 357.88907563025214]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77658404E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 302.0, "minX": 1.77658398E12, "maxY": 323.62016806722687, "series": [{"data": [[1.77658404E12, 302.0], [1.77658398E12, 323.62016806722687]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77658404E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77658398E12, "maxY": 17.292436974789943, "series": [{"data": [[1.77658404E12, 0.0], [1.77658398E12, 17.292436974789943]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77658404E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 262.0, "minX": 1.77658398E12, "maxY": 4130.0, "series": [{"data": [[1.77658404E12, 396.0], [1.77658398E12, 4130.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77658404E12, 396.0], [1.77658398E12, 378.79999999999995]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77658404E12, 396.0], [1.77658398E12, 1734.8799999999992]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77658404E12, 396.0], [1.77658398E12, 563.7999999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77658404E12, 293.0], [1.77658398E12, 262.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77658404E12, 310.0], [1.77658398E12, 304.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77658404E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 287.5, "minX": 2.0, "maxY": 374.0, "series": [{"data": [[33.0, 299.0], [32.0, 294.0], [2.0, 335.0], [34.0, 302.5], [10.0, 295.0], [3.0, 374.0], [12.0, 307.0], [16.0, 287.5], [17.0, 304.0], [19.0, 298.0], [21.0, 310.0], [22.0, 291.0], [26.0, 307.5], [27.0, 307.0], [28.0, 352.5], [29.0, 330.0], [30.0, 299.5], [31.0, 300.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 283.0, "minX": 2.0, "maxY": 331.5, "series": [{"data": [[33.0, 286.0], [32.0, 283.0], [2.0, 295.5], [34.0, 293.0], [10.0, 289.5], [3.0, 312.0], [12.0, 296.5], [16.0, 283.0], [17.0, 291.5], [19.0, 292.0], [21.0, 288.0], [22.0, 283.0], [26.0, 295.0], [27.0, 293.0], [28.0, 331.5], [29.0, 316.0], [30.0, 295.5], [31.0, 296.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.77658398E12, "maxY": 9.933333333333334, "series": [{"data": [[1.77658404E12, 0.06666666666666667], [1.77658398E12, 9.933333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77658404E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.77658398E12, "maxY": 9.916666666666666, "series": [{"data": [[1.77658404E12, 0.08333333333333333], [1.77658398E12, 9.916666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77658404E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.77658398E12, "maxY": 9.916666666666666, "series": [{"data": [[1.77658404E12, 0.08333333333333333], [1.77658398E12, 9.916666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77658404E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.77658398E12, "maxY": 9.916666666666666, "series": [{"data": [[1.77658404E12, 0.08333333333333333], [1.77658398E12, 9.916666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77658404E12, "title": "Total Transactions Per Second"}},
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

