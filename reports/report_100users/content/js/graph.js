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
        data: {"result": {"minY": 262.0, "minX": 0.0, "maxY": 7888.0, "series": [{"data": [[0.0, 262.0], [0.1, 265.0], [0.2, 268.0], [0.3, 269.0], [0.4, 270.0], [0.5, 271.0], [0.6, 271.0], [0.7, 272.0], [0.8, 272.0], [0.9, 272.0], [1.0, 273.0], [1.1, 273.0], [1.2, 273.0], [1.3, 274.0], [1.4, 274.0], [1.5, 275.0], [1.6, 275.0], [1.7, 275.0], [1.8, 276.0], [1.9, 276.0], [2.0, 276.0], [2.1, 276.0], [2.2, 276.0], [2.3, 277.0], [2.4, 277.0], [2.5, 277.0], [2.6, 277.0], [2.7, 278.0], [2.8, 278.0], [2.9, 278.0], [3.0, 278.0], [3.1, 278.0], [3.2, 278.0], [3.3, 279.0], [3.4, 279.0], [3.5, 279.0], [3.6, 279.0], [3.7, 279.0], [3.8, 279.0], [3.9, 279.0], [4.0, 280.0], [4.1, 280.0], [4.2, 280.0], [4.3, 280.0], [4.4, 280.0], [4.5, 280.0], [4.6, 281.0], [4.7, 281.0], [4.8, 281.0], [4.9, 281.0], [5.0, 281.0], [5.1, 282.0], [5.2, 282.0], [5.3, 282.0], [5.4, 282.0], [5.5, 282.0], [5.6, 282.0], [5.7, 283.0], [5.8, 283.0], [5.9, 283.0], [6.0, 283.0], [6.1, 283.0], [6.2, 283.0], [6.3, 283.0], [6.4, 284.0], [6.5, 284.0], [6.6, 284.0], [6.7, 284.0], [6.8, 284.0], [6.9, 284.0], [7.0, 285.0], [7.1, 285.0], [7.2, 285.0], [7.3, 285.0], [7.4, 285.0], [7.5, 285.0], [7.6, 285.0], [7.7, 285.0], [7.8, 285.0], [7.9, 285.0], [8.0, 286.0], [8.1, 286.0], [8.2, 286.0], [8.3, 286.0], [8.4, 286.0], [8.5, 286.0], [8.6, 286.0], [8.7, 287.0], [8.8, 287.0], [8.9, 287.0], [9.0, 287.0], [9.1, 287.0], [9.2, 287.0], [9.3, 287.0], [9.4, 288.0], [9.5, 288.0], [9.6, 288.0], [9.7, 288.0], [9.8, 288.0], [9.9, 288.0], [10.0, 288.0], [10.1, 288.0], [10.2, 289.0], [10.3, 289.0], [10.4, 289.0], [10.5, 289.0], [10.6, 289.0], [10.7, 289.0], [10.8, 289.0], [10.9, 289.0], [11.0, 289.0], [11.1, 289.0], [11.2, 289.0], [11.3, 290.0], [11.4, 290.0], [11.5, 290.0], [11.6, 290.0], [11.7, 290.0], [11.8, 290.0], [11.9, 290.0], [12.0, 290.0], [12.1, 290.0], [12.2, 290.0], [12.3, 291.0], [12.4, 291.0], [12.5, 291.0], [12.6, 291.0], [12.7, 291.0], [12.8, 291.0], [12.9, 291.0], [13.0, 291.0], [13.1, 291.0], [13.2, 291.0], [13.3, 291.0], [13.4, 292.0], [13.5, 292.0], [13.6, 292.0], [13.7, 292.0], [13.8, 292.0], [13.9, 292.0], [14.0, 292.0], [14.1, 292.0], [14.2, 292.0], [14.3, 292.0], [14.4, 293.0], [14.5, 293.0], [14.6, 293.0], [14.7, 293.0], [14.8, 293.0], [14.9, 293.0], [15.0, 293.0], [15.1, 293.0], [15.2, 293.0], [15.3, 293.0], [15.4, 293.0], [15.5, 293.0], [15.6, 294.0], [15.7, 294.0], [15.8, 294.0], [15.9, 294.0], [16.0, 294.0], [16.1, 294.0], [16.2, 294.0], [16.3, 294.0], [16.4, 294.0], [16.5, 294.0], [16.6, 294.0], [16.7, 295.0], [16.8, 295.0], [16.9, 295.0], [17.0, 295.0], [17.1, 295.0], [17.2, 295.0], [17.3, 295.0], [17.4, 295.0], [17.5, 295.0], [17.6, 295.0], [17.7, 295.0], [17.8, 296.0], [17.9, 296.0], [18.0, 296.0], [18.1, 296.0], [18.2, 296.0], [18.3, 296.0], [18.4, 296.0], [18.5, 296.0], [18.6, 296.0], [18.7, 296.0], [18.8, 296.0], [18.9, 296.0], [19.0, 297.0], [19.1, 297.0], [19.2, 297.0], [19.3, 297.0], [19.4, 297.0], [19.5, 297.0], [19.6, 297.0], [19.7, 297.0], [19.8, 297.0], [19.9, 298.0], [20.0, 298.0], [20.1, 298.0], [20.2, 298.0], [20.3, 298.0], [20.4, 298.0], [20.5, 298.0], [20.6, 298.0], [20.7, 298.0], [20.8, 298.0], [20.9, 299.0], [21.0, 299.0], [21.1, 299.0], [21.2, 299.0], [21.3, 299.0], [21.4, 299.0], [21.5, 299.0], [21.6, 299.0], [21.7, 299.0], [21.8, 299.0], [21.9, 299.0], [22.0, 299.0], [22.1, 300.0], [22.2, 300.0], [22.3, 300.0], [22.4, 300.0], [22.5, 300.0], [22.6, 300.0], [22.7, 300.0], [22.8, 300.0], [22.9, 301.0], [23.0, 301.0], [23.1, 301.0], [23.2, 301.0], [23.3, 301.0], [23.4, 301.0], [23.5, 301.0], [23.6, 301.0], [23.7, 301.0], [23.8, 301.0], [23.9, 302.0], [24.0, 302.0], [24.1, 302.0], [24.2, 302.0], [24.3, 302.0], [24.4, 302.0], [24.5, 302.0], [24.6, 302.0], [24.7, 302.0], [24.8, 302.0], [24.9, 303.0], [25.0, 303.0], [25.1, 303.0], [25.2, 303.0], [25.3, 303.0], [25.4, 303.0], [25.5, 303.0], [25.6, 303.0], [25.7, 303.0], [25.8, 303.0], [25.9, 303.0], [26.0, 303.0], [26.1, 304.0], [26.2, 304.0], [26.3, 304.0], [26.4, 304.0], [26.5, 304.0], [26.6, 304.0], [26.7, 304.0], [26.8, 304.0], [26.9, 304.0], [27.0, 304.0], [27.1, 304.0], [27.2, 305.0], [27.3, 305.0], [27.4, 305.0], [27.5, 305.0], [27.6, 305.0], [27.7, 305.0], [27.8, 305.0], [27.9, 305.0], [28.0, 305.0], [28.1, 305.0], [28.2, 306.0], [28.3, 306.0], [28.4, 306.0], [28.5, 306.0], [28.6, 306.0], [28.7, 306.0], [28.8, 306.0], [28.9, 306.0], [29.0, 307.0], [29.1, 307.0], [29.2, 307.0], [29.3, 307.0], [29.4, 307.0], [29.5, 307.0], [29.6, 307.0], [29.7, 307.0], [29.8, 307.0], [29.9, 307.0], [30.0, 307.0], [30.1, 307.0], [30.2, 308.0], [30.3, 308.0], [30.4, 308.0], [30.5, 308.0], [30.6, 308.0], [30.7, 308.0], [30.8, 308.0], [30.9, 308.0], [31.0, 308.0], [31.1, 308.0], [31.2, 309.0], [31.3, 309.0], [31.4, 309.0], [31.5, 309.0], [31.6, 309.0], [31.7, 309.0], [31.8, 309.0], [31.9, 309.0], [32.0, 309.0], [32.1, 309.0], [32.2, 310.0], [32.3, 310.0], [32.4, 310.0], [32.5, 310.0], [32.6, 310.0], [32.7, 310.0], [32.8, 310.0], [32.9, 310.0], [33.0, 310.0], [33.1, 310.0], [33.2, 311.0], [33.3, 311.0], [33.4, 311.0], [33.5, 311.0], [33.6, 311.0], [33.7, 311.0], [33.8, 311.0], [33.9, 311.0], [34.0, 312.0], [34.1, 312.0], [34.2, 312.0], [34.3, 312.0], [34.4, 312.0], [34.5, 312.0], [34.6, 312.0], [34.7, 312.0], [34.8, 312.0], [34.9, 312.0], [35.0, 313.0], [35.1, 313.0], [35.2, 313.0], [35.3, 313.0], [35.4, 313.0], [35.5, 313.0], [35.6, 313.0], [35.7, 313.0], [35.8, 313.0], [35.9, 314.0], [36.0, 314.0], [36.1, 314.0], [36.2, 314.0], [36.3, 314.0], [36.4, 314.0], [36.5, 314.0], [36.6, 315.0], [36.7, 315.0], [36.8, 315.0], [36.9, 315.0], [37.0, 315.0], [37.1, 316.0], [37.2, 316.0], [37.3, 316.0], [37.4, 316.0], [37.5, 316.0], [37.6, 316.0], [37.7, 316.0], [37.8, 317.0], [37.9, 317.0], [38.0, 317.0], [38.1, 317.0], [38.2, 317.0], [38.3, 318.0], [38.4, 318.0], [38.5, 318.0], [38.6, 318.0], [38.7, 318.0], [38.8, 318.0], [38.9, 318.0], [39.0, 319.0], [39.1, 319.0], [39.2, 319.0], [39.3, 319.0], [39.4, 319.0], [39.5, 319.0], [39.6, 319.0], [39.7, 320.0], [39.8, 320.0], [39.9, 320.0], [40.0, 320.0], [40.1, 320.0], [40.2, 320.0], [40.3, 320.0], [40.4, 320.0], [40.5, 321.0], [40.6, 321.0], [40.7, 321.0], [40.8, 321.0], [40.9, 321.0], [41.0, 321.0], [41.1, 321.0], [41.2, 322.0], [41.3, 322.0], [41.4, 322.0], [41.5, 322.0], [41.6, 322.0], [41.7, 322.0], [41.8, 322.0], [41.9, 322.0], [42.0, 323.0], [42.1, 323.0], [42.2, 323.0], [42.3, 324.0], [42.4, 324.0], [42.5, 324.0], [42.6, 324.0], [42.7, 324.0], [42.8, 324.0], [42.9, 324.0], [43.0, 325.0], [43.1, 325.0], [43.2, 325.0], [43.3, 325.0], [43.4, 326.0], [43.5, 326.0], [43.6, 326.0], [43.7, 326.0], [43.8, 326.0], [43.9, 326.0], [44.0, 327.0], [44.1, 327.0], [44.2, 327.0], [44.3, 328.0], [44.4, 328.0], [44.5, 328.0], [44.6, 328.0], [44.7, 328.0], [44.8, 329.0], [44.9, 329.0], [45.0, 329.0], [45.1, 329.0], [45.2, 329.0], [45.3, 330.0], [45.4, 330.0], [45.5, 330.0], [45.6, 330.0], [45.7, 331.0], [45.8, 331.0], [45.9, 331.0], [46.0, 331.0], [46.1, 332.0], [46.2, 332.0], [46.3, 332.0], [46.4, 332.0], [46.5, 333.0], [46.6, 333.0], [46.7, 333.0], [46.8, 333.0], [46.9, 333.0], [47.0, 333.0], [47.1, 334.0], [47.2, 334.0], [47.3, 334.0], [47.4, 334.0], [47.5, 334.0], [47.6, 335.0], [47.7, 335.0], [47.8, 335.0], [47.9, 335.0], [48.0, 335.0], [48.1, 335.0], [48.2, 335.0], [48.3, 336.0], [48.4, 336.0], [48.5, 336.0], [48.6, 337.0], [48.7, 337.0], [48.8, 337.0], [48.9, 337.0], [49.0, 337.0], [49.1, 338.0], [49.2, 338.0], [49.3, 338.0], [49.4, 339.0], [49.5, 339.0], [49.6, 339.0], [49.7, 340.0], [49.8, 340.0], [49.9, 340.0], [50.0, 341.0], [50.1, 341.0], [50.2, 342.0], [50.3, 342.0], [50.4, 342.0], [50.5, 343.0], [50.6, 343.0], [50.7, 343.0], [50.8, 344.0], [50.9, 344.0], [51.0, 344.0], [51.1, 344.0], [51.2, 345.0], [51.3, 345.0], [51.4, 346.0], [51.5, 346.0], [51.6, 346.0], [51.7, 347.0], [51.8, 347.0], [51.9, 348.0], [52.0, 348.0], [52.1, 348.0], [52.2, 349.0], [52.3, 349.0], [52.4, 349.0], [52.5, 349.0], [52.6, 350.0], [52.7, 350.0], [52.8, 351.0], [52.9, 351.0], [53.0, 351.0], [53.1, 351.0], [53.2, 351.0], [53.3, 352.0], [53.4, 352.0], [53.5, 352.0], [53.6, 353.0], [53.7, 353.0], [53.8, 354.0], [53.9, 354.0], [54.0, 354.0], [54.1, 354.0], [54.2, 355.0], [54.3, 355.0], [54.4, 355.0], [54.5, 355.0], [54.6, 356.0], [54.7, 356.0], [54.8, 357.0], [54.9, 357.0], [55.0, 357.0], [55.1, 357.0], [55.2, 358.0], [55.3, 358.0], [55.4, 358.0], [55.5, 359.0], [55.6, 359.0], [55.7, 359.0], [55.8, 360.0], [55.9, 360.0], [56.0, 360.0], [56.1, 360.0], [56.2, 361.0], [56.3, 361.0], [56.4, 361.0], [56.5, 362.0], [56.6, 362.0], [56.7, 362.0], [56.8, 362.0], [56.9, 363.0], [57.0, 364.0], [57.1, 364.0], [57.2, 365.0], [57.3, 365.0], [57.4, 366.0], [57.5, 366.0], [57.6, 366.0], [57.7, 367.0], [57.8, 367.0], [57.9, 368.0], [58.0, 368.0], [58.1, 369.0], [58.2, 370.0], [58.3, 371.0], [58.4, 372.0], [58.5, 372.0], [58.6, 372.0], [58.7, 373.0], [58.8, 373.0], [58.9, 374.0], [59.0, 374.0], [59.1, 375.0], [59.2, 375.0], [59.3, 376.0], [59.4, 376.0], [59.5, 376.0], [59.6, 377.0], [59.7, 378.0], [59.8, 379.0], [59.9, 379.0], [60.0, 379.0], [60.1, 380.0], [60.2, 380.0], [60.3, 380.0], [60.4, 381.0], [60.5, 382.0], [60.6, 383.0], [60.7, 383.0], [60.8, 384.0], [60.9, 384.0], [61.0, 385.0], [61.1, 385.0], [61.2, 386.0], [61.3, 387.0], [61.4, 387.0], [61.5, 388.0], [61.6, 388.0], [61.7, 389.0], [61.8, 389.0], [61.9, 390.0], [62.0, 391.0], [62.1, 391.0], [62.2, 392.0], [62.3, 393.0], [62.4, 393.0], [62.5, 394.0], [62.6, 395.0], [62.7, 396.0], [62.8, 398.0], [62.9, 398.0], [63.0, 399.0], [63.1, 399.0], [63.2, 400.0], [63.3, 401.0], [63.4, 402.0], [63.5, 402.0], [63.6, 403.0], [63.7, 404.0], [63.8, 405.0], [63.9, 406.0], [64.0, 407.0], [64.1, 408.0], [64.2, 408.0], [64.3, 409.0], [64.4, 409.0], [64.5, 410.0], [64.6, 411.0], [64.7, 412.0], [64.8, 413.0], [64.9, 414.0], [65.0, 414.0], [65.1, 415.0], [65.2, 416.0], [65.3, 417.0], [65.4, 418.0], [65.5, 419.0], [65.6, 420.0], [65.7, 421.0], [65.8, 422.0], [65.9, 423.0], [66.0, 423.0], [66.1, 424.0], [66.2, 425.0], [66.3, 426.0], [66.4, 427.0], [66.5, 428.0], [66.6, 429.0], [66.7, 429.0], [66.8, 431.0], [66.9, 432.0], [67.0, 433.0], [67.1, 434.0], [67.2, 435.0], [67.3, 435.0], [67.4, 437.0], [67.5, 439.0], [67.6, 440.0], [67.7, 440.0], [67.8, 440.0], [67.9, 440.0], [68.0, 441.0], [68.1, 444.0], [68.2, 446.0], [68.3, 447.0], [68.4, 449.0], [68.5, 449.0], [68.6, 451.0], [68.7, 452.0], [68.8, 452.0], [68.9, 453.0], [69.0, 454.0], [69.1, 455.0], [69.2, 456.0], [69.3, 457.0], [69.4, 457.0], [69.5, 458.0], [69.6, 458.0], [69.7, 459.0], [69.8, 460.0], [69.9, 461.0], [70.0, 462.0], [70.1, 462.0], [70.2, 463.0], [70.3, 464.0], [70.4, 464.0], [70.5, 466.0], [70.6, 467.0], [70.7, 468.0], [70.8, 468.0], [70.9, 470.0], [71.0, 471.0], [71.1, 472.0], [71.2, 472.0], [71.3, 473.0], [71.4, 475.0], [71.5, 475.0], [71.6, 476.0], [71.7, 478.0], [71.8, 479.0], [71.9, 480.0], [72.0, 480.0], [72.1, 481.0], [72.2, 484.0], [72.3, 485.0], [72.4, 485.0], [72.5, 486.0], [72.6, 488.0], [72.7, 490.0], [72.8, 492.0], [72.9, 492.0], [73.0, 494.0], [73.1, 495.0], [73.2, 496.0], [73.3, 496.0], [73.4, 497.0], [73.5, 498.0], [73.6, 499.0], [73.7, 500.0], [73.8, 502.0], [73.9, 503.0], [74.0, 503.0], [74.1, 504.0], [74.2, 505.0], [74.3, 507.0], [74.4, 508.0], [74.5, 508.0], [74.6, 510.0], [74.7, 511.0], [74.8, 511.0], [74.9, 512.0], [75.0, 513.0], [75.1, 515.0], [75.2, 517.0], [75.3, 518.0], [75.4, 520.0], [75.5, 521.0], [75.6, 523.0], [75.7, 524.0], [75.8, 524.0], [75.9, 525.0], [76.0, 527.0], [76.1, 528.0], [76.2, 529.0], [76.3, 530.0], [76.4, 531.0], [76.5, 532.0], [76.6, 532.0], [76.7, 533.0], [76.8, 534.0], [76.9, 534.0], [77.0, 535.0], [77.1, 536.0], [77.2, 536.0], [77.3, 537.0], [77.4, 538.0], [77.5, 540.0], [77.6, 541.0], [77.7, 541.0], [77.8, 542.0], [77.9, 543.0], [78.0, 543.0], [78.1, 545.0], [78.2, 546.0], [78.3, 547.0], [78.4, 548.0], [78.5, 548.0], [78.6, 550.0], [78.7, 551.0], [78.8, 553.0], [78.9, 553.0], [79.0, 554.0], [79.1, 556.0], [79.2, 558.0], [79.3, 559.0], [79.4, 560.0], [79.5, 561.0], [79.6, 562.0], [79.7, 563.0], [79.8, 565.0], [79.9, 566.0], [80.0, 568.0], [80.1, 568.0], [80.2, 570.0], [80.3, 572.0], [80.4, 574.0], [80.5, 575.0], [80.6, 576.0], [80.7, 577.0], [80.8, 578.0], [80.9, 579.0], [81.0, 581.0], [81.1, 583.0], [81.2, 585.0], [81.3, 586.0], [81.4, 588.0], [81.5, 590.0], [81.6, 590.0], [81.7, 592.0], [81.8, 594.0], [81.9, 598.0], [82.0, 599.0], [82.1, 602.0], [82.2, 604.0], [82.3, 605.0], [82.4, 607.0], [82.5, 608.0], [82.6, 610.0], [82.7, 611.0], [82.8, 614.0], [82.9, 615.0], [83.0, 618.0], [83.1, 622.0], [83.2, 624.0], [83.3, 628.0], [83.4, 629.0], [83.5, 632.0], [83.6, 636.0], [83.7, 639.0], [83.8, 643.0], [83.9, 646.0], [84.0, 649.0], [84.1, 650.0], [84.2, 657.0], [84.3, 661.0], [84.4, 664.0], [84.5, 665.0], [84.6, 667.0], [84.7, 671.0], [84.8, 674.0], [84.9, 677.0], [85.0, 681.0], [85.1, 683.0], [85.2, 686.0], [85.3, 689.0], [85.4, 692.0], [85.5, 694.0], [85.6, 698.0], [85.7, 701.0], [85.8, 704.0], [85.9, 706.0], [86.0, 708.0], [86.1, 713.0], [86.2, 715.0], [86.3, 720.0], [86.4, 728.0], [86.5, 730.0], [86.6, 733.0], [86.7, 735.0], [86.8, 737.0], [86.9, 739.0], [87.0, 740.0], [87.1, 743.0], [87.2, 745.0], [87.3, 748.0], [87.4, 751.0], [87.5, 752.0], [87.6, 755.0], [87.7, 758.0], [87.8, 761.0], [87.9, 763.0], [88.0, 764.0], [88.1, 769.0], [88.2, 773.0], [88.3, 778.0], [88.4, 780.0], [88.5, 782.0], [88.6, 785.0], [88.7, 787.0], [88.8, 791.0], [88.9, 793.0], [89.0, 797.0], [89.1, 800.0], [89.2, 801.0], [89.3, 807.0], [89.4, 810.0], [89.5, 811.0], [89.6, 813.0], [89.7, 819.0], [89.8, 821.0], [89.9, 824.0], [90.0, 826.0], [90.1, 832.0], [90.2, 839.0], [90.3, 842.0], [90.4, 855.0], [90.5, 860.0], [90.6, 863.0], [90.7, 874.0], [90.8, 879.0], [90.9, 883.0], [91.0, 891.0], [91.1, 896.0], [91.2, 897.0], [91.3, 899.0], [91.4, 908.0], [91.5, 909.0], [91.6, 917.0], [91.7, 925.0], [91.8, 929.0], [91.9, 932.0], [92.0, 938.0], [92.1, 946.0], [92.2, 955.0], [92.3, 961.0], [92.4, 970.0], [92.5, 975.0], [92.6, 978.0], [92.7, 991.0], [92.8, 994.0], [92.9, 998.0], [93.0, 1001.0], [93.1, 1004.0], [93.2, 1007.0], [93.3, 1010.0], [93.4, 1016.0], [93.5, 1018.0], [93.6, 1025.0], [93.7, 1035.0], [93.8, 1038.0], [93.9, 1043.0], [94.0, 1048.0], [94.1, 1053.0], [94.2, 1062.0], [94.3, 1064.0], [94.4, 1074.0], [94.5, 1083.0], [94.6, 1092.0], [94.7, 1097.0], [94.8, 1125.0], [94.9, 1131.0], [95.0, 1153.0], [95.1, 1166.0], [95.2, 1180.0], [95.3, 1192.0], [95.4, 1210.0], [95.5, 1232.0], [95.6, 1241.0], [95.7, 1264.0], [95.8, 1293.0], [95.9, 1319.0], [96.0, 1345.0], [96.1, 1397.0], [96.2, 1455.0], [96.3, 1517.0], [96.4, 1539.0], [96.5, 1550.0], [96.6, 1560.0], [96.7, 1573.0], [96.8, 1582.0], [96.9, 1595.0], [97.0, 1600.0], [97.1, 1603.0], [97.2, 1608.0], [97.3, 1640.0], [97.4, 1649.0], [97.5, 1660.0], [97.6, 1683.0], [97.7, 1691.0], [97.8, 1726.0], [97.9, 1749.0], [98.0, 1790.0], [98.1, 1823.0], [98.2, 1853.0], [98.3, 1897.0], [98.4, 1920.0], [98.5, 1957.0], [98.6, 2004.0], [98.7, 2114.0], [98.8, 2143.0], [98.9, 2191.0], [99.0, 2242.0], [99.1, 2288.0], [99.2, 2328.0], [99.3, 2470.0], [99.4, 2534.0], [99.5, 2617.0], [99.6, 2663.0], [99.7, 2798.0], [99.8, 3024.0], [99.9, 3602.0], [100.0, 7888.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 1644.0, "series": [{"data": [[600.0, 145.0], [700.0, 138.0], [800.0, 89.0], [900.0, 66.0], [1000.0, 70.0], [1100.0, 25.0], [1200.0, 22.0], [1300.0, 9.0], [1400.0, 7.0], [1500.0, 28.0], [1600.0, 29.0], [1700.0, 12.0], [1800.0, 14.0], [1900.0, 8.0], [2000.0, 5.0], [2100.0, 9.0], [2200.0, 9.0], [2300.0, 4.0], [2400.0, 4.0], [2500.0, 5.0], [2600.0, 7.0], [2700.0, 3.0], [2800.0, 2.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 884.0], [3200.0, 1.0], [3500.0, 1.0], [3600.0, 1.0], [4200.0, 1.0], [4600.0, 1.0], [4500.0, 1.0], [300.0, 1644.0], [400.0, 419.0], [7800.0, 1.0], [500.0, 333.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 149.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2949.0, "series": [{"data": [[0.0, 2949.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 902.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 149.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 17.429811866859634, "minX": 1.77649236E12, "maxY": 21.11668185961713, "series": [{"data": [[1.77649242E12, 17.466094032549737], [1.77649248E12, 21.11668185961713], [1.77649236E12, 17.429811866859634]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77649248E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 313.0, "minX": 1.0, "maxY": 862.8421052631578, "series": [{"data": [[2.0, 313.0], [3.0, 810.6666666666666], [4.0, 619.0], [5.0, 472.2727272727273], [6.0, 360.3529411764706], [7.0, 467.1538461538462], [8.0, 439.1315789473684], [9.0, 587.6388888888888], [10.0, 381.6666666666667], [11.0, 480.65000000000003], [12.0, 503.4545454545454], [13.0, 388.85074626865656], [14.0, 396.7029411764703], [15.0, 435.5681818181817], [16.0, 415.39705882352933], [1.0, 315.25], [17.0, 417.79166666666663], [18.0, 451.87769784172656], [19.0, 570.5396825396824], [20.0, 497.00921658986204], [21.0, 456.4326530612246], [22.0, 565.1710526315792], [23.0, 628.5569620253168], [24.0, 661.7826086956524], [25.0, 668.9481132075471], [26.0, 560.0974842767295], [27.0, 862.8421052631578]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[18.46100000000003, 491.2087500000003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 27.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2167.516666666667, "minX": 1.77649236E12, "maxY": 2144054.2333333334, "series": [{"data": [[1.77649242E12, 2144054.2333333334], [1.77649248E12, 1259315.1166666667], [1.77649236E12, 564547.2666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77649242E12, 6950.116666666667], [1.77649248E12, 3449.0333333333333], [1.77649236E12, 2167.516666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77649248E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 479.69620253164516, "minX": 1.77649236E12, "maxY": 524.9840810419674, "series": [{"data": [[1.77649242E12, 479.69620253164516], [1.77649248E12, 493.14767547857736], [1.77649236E12, 524.9840810419674]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77649248E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 445.1803797468356, "minX": 1.77649236E12, "maxY": 485.6396526772791, "series": [{"data": [[1.77649242E12, 445.1803797468356], [1.77649248E12, 462.68094804010934], [1.77649236E12, 485.6396526772791]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77649248E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 11.436645396536013, "minX": 1.77649236E12, "maxY": 36.484804630969656, "series": [{"data": [[1.77649242E12, 21.809674502712497], [1.77649248E12, 11.436645396536013], [1.77649236E12, 36.484804630969656]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77649248E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 262.0, "minX": 1.77649236E12, "maxY": 7888.0, "series": [{"data": [[1.77649242E12, 4601.0], [1.77649248E12, 2773.0], [1.77649236E12, 7888.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77649242E12, 801.0], [1.77649248E12, 874.2], [1.77649236E12, 833.4000000000005]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77649242E12, 2481.3099999999986], [1.77649248E12, 1801.6199999999985], [1.77649236E12, 2063.920000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77649242E12, 1466.199999999997], [1.77649248E12, 1055.1999999999998], [1.77649236E12, 1075.7999999999981]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.77649242E12, 262.0], [1.77649248E12, 265.0], [1.77649236E12, 270.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77649242E12, 317.0], [1.77649248E12, 369.0], [1.77649236E12, 399.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77649248E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 296.0, "minX": 1.0, "maxY": 1825.0, "series": [{"data": [[2.0, 314.5], [3.0, 1749.0], [4.0, 303.5], [5.0, 778.0], [6.0, 1443.5], [7.0, 461.0], [11.0, 1024.0], [12.0, 613.0], [14.0, 450.5], [15.0, 819.0], [16.0, 921.0], [17.0, 1539.0], [18.0, 929.5], [19.0, 310.0], [20.0, 383.0], [21.0, 346.5], [22.0, 749.5], [25.0, 571.0], [26.0, 373.0], [27.0, 658.5], [28.0, 503.5], [29.0, 401.0], [30.0, 327.0], [31.0, 560.0], [33.0, 510.0], [32.0, 585.5], [34.0, 392.0], [37.0, 357.0], [36.0, 440.0], [39.0, 381.5], [38.0, 296.0], [40.0, 363.5], [41.0, 304.5], [42.0, 297.0], [43.0, 330.5], [44.0, 318.5], [45.0, 384.0], [47.0, 326.5], [46.0, 318.5], [48.0, 348.0], [50.0, 311.0], [52.0, 351.0], [53.0, 299.0], [55.0, 384.5], [56.0, 303.5], [57.0, 352.0], [59.0, 299.0], [61.0, 314.0], [62.0, 353.0], [71.0, 326.0], [72.0, 353.5], [1.0, 1825.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 291.0, "minX": 1.0, "maxY": 1822.0, "series": [{"data": [[2.0, 309.0], [3.0, 1473.0], [4.0, 303.5], [5.0, 581.0], [6.0, 1316.0], [7.0, 447.0], [11.0, 1009.0], [12.0, 565.5], [14.0, 432.5], [15.0, 819.0], [16.0, 895.0], [17.0, 1539.0], [18.0, 927.5], [19.0, 305.0], [20.0, 377.5], [21.0, 317.0], [22.0, 740.5], [25.0, 468.0], [26.0, 363.5], [27.0, 585.0], [28.0, 493.0], [29.0, 388.0], [30.0, 325.5], [31.0, 546.0], [33.0, 498.0], [32.0, 560.5], [34.0, 375.0], [37.0, 343.0], [36.0, 436.0], [39.0, 373.0], [38.0, 291.0], [40.0, 354.0], [41.0, 299.0], [42.0, 294.0], [43.0, 323.0], [44.0, 310.5], [45.0, 364.0], [47.0, 323.5], [46.0, 316.0], [48.0, 341.0], [50.0, 306.0], [52.0, 350.5], [53.0, 296.0], [55.0, 372.0], [56.0, 298.0], [57.0, 344.0], [59.0, 294.0], [61.0, 310.0], [62.0, 342.0], [71.0, 317.0], [72.0, 336.0], [1.0, 1822.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 72.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.85, "minX": 1.77649236E12, "maxY": 36.96666666666667, "series": [{"data": [[1.77649242E12, 36.96666666666667], [1.77649248E12, 17.85], [1.77649236E12, 11.85]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77649248E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 11.516666666666667, "minX": 1.77649236E12, "maxY": 36.86666666666667, "series": [{"data": [[1.77649242E12, 36.86666666666667], [1.77649248E12, 18.283333333333335], [1.77649236E12, 11.516666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77649248E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 11.516666666666667, "minX": 1.77649236E12, "maxY": 36.86666666666667, "series": [{"data": [[1.77649242E12, 36.86666666666667], [1.77649248E12, 18.283333333333335], [1.77649236E12, 11.516666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77649248E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 11.516666666666667, "minX": 1.77649236E12, "maxY": 36.86666666666667, "series": [{"data": [[1.77649242E12, 36.86666666666667], [1.77649248E12, 18.283333333333335], [1.77649236E12, 11.516666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77649248E12, "title": "Total Transactions Per Second"}},
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

