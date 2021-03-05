// class Meme
class Meme {
  constructor(name, width, height, url) {
    (this.name = name),
      (this.width = width),
      (this.height = height),
      (this.url = url);
  }
  // get meme data handler
  async memeData(param = "") {
    let log = console.log;
    if (!param)
      return console.error(`search key word required. Try "meme names"`);

    const arrayChecker = [
      "meme names",
      "meme height",
      "meme width",
      "meme box-count",
      "meme box-url",
    ];

    if (!arrayChecker.includes(param))
      return console.error(
        `Sorry resources not found! could be a typo or an invalid search data type`
      );

    try {
      const data_request = await fetch("https://api.imgflip.com/get_memes");
      const chunk = await data_request.json();
      const { memes } = chunk.data;

      memes.forEach((object) => {
        const { name, id, height, width, box_count, url } = object;

        param === "meme names"
          ? log(`Meme-IDs: ${id}, Name: ${name}`)
          : param === "meme height"
          ? log(`Meme-IDs: ${id}, Meme Height: ${height}`)
          : param === "meme width"
          ? log(`Meme-IDs: ${id}, Meme Width: ${width}`)
          : param === "meme box-count"
          ? log(`Meme-IDs: ${id}, Meme Box-Count: ${box_count}`)
          : param === "meme box-url"
          ? log(`Meme-IDs: ${id}, Meme URL: ${url}`)
          : false;

        log("done");
      });
    } catch (e) {
      console.error(e);
    }
  }

  // ==========get names function================
}

// new up meme class
const newMeme = new Meme();
const getMemeData = newMeme.memeData;

export { getMemeData };
