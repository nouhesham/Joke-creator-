"strict";
const button = document.querySelector(".button-36");
const word = document.querySelector(".joke");
console.log(button);
console.log(word);
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious&type=single";

let getjoke = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => (word.innerHTML = item.joke));
};
getjoke();

button.addEventListener("click", getjoke);
