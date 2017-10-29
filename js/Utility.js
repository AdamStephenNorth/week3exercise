function reveal(obj) {
  return Object.prototype.toString.call(obj);
}

function reversed (string) {
  if (typeof string !== "string") {
    return string;
  } else {
    return string.split("").reverse().join("");
  }
}
