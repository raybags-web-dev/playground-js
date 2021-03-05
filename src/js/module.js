import { progress_bar, button } from "../index.js";

// Progress bar with CSS
export const worker = (seconds) => {
  button.addEventListener("click", () => {
    if (typeof seconds != "number" || !seconds)
      return console.error("time prameter required");
    progress_bar.style.cssText = `transition: ${seconds}s linear; width: 100%;`;
  });
};

// progress bar with javascript

export const worker2 = (seconds) => {
  button.addEventListener("click", () => {
    if (typeof seconds != "number" || !seconds)
      return console.error("time prameter required");

    let progress = 0;
    let interval = setInterval(() => {
      progress++;

      progress_bar.style.cssText = `width: ${progress}%;`;

      progress === 100 && clearInterval(interval);
    }, (seconds * 1000) / 1000);
  });
};
