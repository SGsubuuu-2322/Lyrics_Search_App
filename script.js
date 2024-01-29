const form = document.getElementById("form");
const SearchEl = document.getElementById("search");
const resultEl = document.getElementById("result");
const moreEl = document.getElementById("more");

const apiUrl = "https://api.lyrics.ovh";

async function searchSong(term) {
    const res = await fetch(`${apiUrl}/suggest/${term}`);
    const data = res.json();

    showData(data);
}

function showData(data){

}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = SearchEl.value.trim();

  if (!searchTerm) {
    alert("Please enter in a song or a artist name...");
  } else {
    searchSong(searchTerm);
  }
});
