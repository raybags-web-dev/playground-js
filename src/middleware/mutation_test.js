async function mutation(testArray) {
  try {
    if (!testArray) return console.warn("test specimen required");

    const firstSpeciment = testArray[0].toLowerCase().split(" "),
      secondSpeciment = testArray[1].toLowerCase().split(" ");

    let results = secondSpeciment.every((charactor) =>
      firstSpeciment.includes(charactor)
    );

    if (results === true)
      console.log(
        `its a match: "${testArray[0]}" and "${testArray[1]} are the same."`
      );
    if (results === false)
      console.log(
        `mutation present: "${testArray[0]}" and "${testArray[1]} are not the same."`
      );

    return results;
  } catch (e) {
    console.table([
      [`Error Occured:`, `Details:`],
      [`error-name`, `${e.name || "not known"}`],
      [`error-message:`, `${e.message || "not known"}`],
      [`file with error:`, `${e.fileName || "not known"}`],
      [`error-on-line:`, `${e.lineNumber || "not known"}`],
      [`error-stack:`, `${e.stack}`],
      [`column-with-error:`, `${e.columnNumber || "not known"}`],
    ]);
  }
}

export { mutation };
