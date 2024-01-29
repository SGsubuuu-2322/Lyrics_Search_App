const form = document.getElementById("form");
const SearchEl = document.getElementById("search");
const resultEl = document.getElementById("result");
const moreEl = document.getElementById("more");

const apiUrl = "https://api.lyrics.ovh";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = SearchEl.value.trim();
  console.log(searchTerm);
});
