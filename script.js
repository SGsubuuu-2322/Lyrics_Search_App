const form = document.getElementById("form");
const SearchEl = document.getElementById("search");
const resultEl = document.getElementById("result");
const moreEl = document.getElementById("more");

const apiUrl = "https://api.lyrics.ovh";

async function searchSong(term) {
  const res = await fetch(`${apiUrl}/suggest/${term}`);
  const data = await res.json();

  showData(data);
}

function showData(data) {
  //   let output = "";

  //   data.data.forEach((song) => {
  //     output += `

  //     <li>
  //         <span>
  //             <strong>${song.artist.name}</strong> - ${song.title}
  //         </span>

  //         <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
  //     </li>

  //     `;
  //   });

  //   resultEl.innerHTML = `
  //     <ul class="songs">
  //         ${output}
  //     </ul>
  //   `;

  resultEl.innerHTML = `
    <ul class="songs">
    ${data.data
      .map(
        (song) => `
          <li>
                   <span>
                       <strong>${song.artist.name}</strong> - ${song.title}
                   </span>
        
                  <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
               </li>
          `
      )
      .join("")}
    </ul>

 `;

  if (data.prev || data.next) {
    moreEl.innerHTML = `
    ${data.prev ? `<button class="btn">Prev</button>` : ""}
    ${data.next ? `<button class="btn">Next</button>` : ""}
    
    `;
  }
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
