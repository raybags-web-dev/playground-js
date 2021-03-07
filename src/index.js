"use strict";
export const button = document.querySelector(".btn");
export const progress_bar = document.querySelector(".progress-bar");
// progress bar
import { worker, worker2 } from "./js/module.js";
// fetch meme data handler
import { getMemeData } from "./middleware/request_data.js";
// mutation check
import { mutation } from "./middleware/mutation_test.js";

// ====================================
// Progress bar with CSS
// worker(1);
// progress bar with javascript
// worker2(10);
// ================================

// Meme data Handler  method
// 1) get meme names;
// "meme names"
// getMemeData();

// 2) get meme width;
// "meme width"
// getMemeData();

// 3) get meme height;
// "meme height"
// getMemeData();

// 4) get meme box-count;
// "meme box-count"
// getMemeData();

// 5) get meme url
// "meme box-url"
// getMemeData();
// ================================

// mutation test. Test with array
// mutation();
