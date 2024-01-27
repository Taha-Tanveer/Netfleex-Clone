const api_key ="api_key=801705c9665b58c829322cc05f60e1a4";
const base_url = "https://api.themoviedb.org/3/";
const img_url = "https://image.tmdb.org/t/p/original";
const banner_url = "https://image.tmdb.org/t/p/w500/"


const request = {
    fetchTrening :` ${base_url}/trending/all/week?"?${api_key}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api_key}&with_networks=213`,
    fetchTopRated: `${base_url}/movie/top_rated?${api_key}&language=en-US`,
    fetchActionMovies: `${base_url}/discover/movie?${api_key}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api_key}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api_key}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api_key}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api_key}&with_genres=99`
   

};

const truncate = (str ,n )=>{
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

fetch(request.fetchNetflixOriginals)
  .then((res) => res.json())
  .then((data) => {
    const setMovie = 
    data.results[Math.floor(Math.random() * data.results.length)];

    let banner = document.getElementById("banner");
    banner.style.backgroundImage = `url(${banner_url}${setMovie?.backdrop_path})`;
    let banner_title = document.getElementById("banner_title");
    banner_title.innerText = setMovie?.name || setMovie?.original_name;
    let banner_description = document.getElementById("banner_description");
    banner_description.innerText = setMovie?.overview;
    
    const head_row = document.getElementById("head_row");
    const row = document.createElement("div");
    row.classList.add("row");

    head_row.appendChild(row);

    const row_title = document.createElement("h2");
    row_title.classList.add("row_title");
    row_title.innerText = "NETFLIX ORIGINALS";

    row.appendChild(row_title);

    const row_posters = document.createElement("div");
    row_posters.classList.add("row_posters");
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      

      const poster = document.createElement("img");
      poster.classList.add("row_posterLarge");
      poster.src = `${img_url}${movie.poster_path}`;
      row_posters.appendChild(poster);

      row_posters.appendChild(card);
    });
  });


 

// ---------------top rated----------------

fetch(request.fetchTopRated)
.then((res)=>res.json())
.then((data)=>{
    // console.log(data.results);
    const head_row = document.getElementById("head_row");
    const row = document.createElement("div");
    row.classList.add("row");

    head_row.appendChild(row);

    const row_title = document.createElement("h2");
    row_title.classList.add("row_title");
    row_title.innerText = "TOP RATED";

    row.appendChild(row_title);

    const row_posters = document.createElement("div");
    row_posters.classList.add("row_posters");
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.classList.add("row_posterLarge");
        poster.src = `${img_url}${movie.poster_path}`;
        row_posters.appendChild(poster);
    })
})
// ---------------fetchActionMovies----------------

fetch(request.fetchActionMovies)
.then((res)=>res.json())
.then((data)=>{
    // console.log(data.results);
    const head_row = document.getElementById("head_row");
    const row = document.createElement("div");
    row.classList.add("row");

    head_row.appendChild(row);

    const row_title = document.createElement("h2");
    row_title.classList.add("row_title");
    row_title.innerText = "ACTION MOVIES";

    row.appendChild(row_title);

    const row_posters = document.createElement("div");
    row_posters.classList.add("row_posters");
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.classList.add("row_posterLarge");
        poster.src = `${img_url}${movie.poster_path}`;
        row_posters.appendChild(poster);
    })
})
// ---------------fetchComedyMovies----------------

fetch(request.fetchComedyMovies)
.then((res)=>res.json())
.then((data)=>{
    // console.log(data.results);
    const head_row = document.getElementById("head_row");
    const row = document.createElement("div");
    row.classList.add("row");

    head_row.appendChild(row);

    const row_title = document.createElement("h2");
    row_title.classList.add("row_title");
    row_title.innerText = "COMEDY MOVIES";

    row.appendChild(row_title);

    const row_posters = document.createElement("div");
    row_posters.classList.add("row_posters");
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.classList.add("row_posterLarge");
        poster.src = `${img_url}${movie.poster_path}`;
        row_posters.appendChild(poster);
    })
})
// --------------- fetchHorrorMovies ----------------

fetch(request.fetchHorrorMovies)
.then((res)=>res.json())
.then((data)=>{
    // console.log(data.results);
    const head_row = document.getElementById("head_row");
    const row = document.createElement("div");
    row.classList.add("row");

    head_row.appendChild(row);

    const row_title = document.createElement("h2");
    row_title.classList.add("row_title");
    row_title.innerText = "HORROR MOVIES";

    row.appendChild(row_title);

    const row_posters = document.createElement("div");
    row_posters.classList.add("row_posters");
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.classList.add("row_posterLarge");
        poster.src = `${img_url}${movie.poster_path}`;
        row_posters.appendChild(poster);
    })
})
// ---------------fetchRomanceMovies ----------------

fetch(request.fetchRomanceMovies)
.then((res)=>res.json())
.then((data)=>{
    // console.log(data.results);
    const head_row = document.getElementById("head_row");
    const row = document.createElement("div");
    row.classList.add("row");

    head_row.appendChild(row);

    const row_title = document.createElement("h2");
    row_title.classList.add("row_title");
    row_title.innerText = "ROMANCE MOVIES";

    row.appendChild(row_title);

    const row_posters = document.createElement("div");
    row_posters.classList.add("row_posters");
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.classList.add("row_posterLarge");
        poster.src = `${img_url}${movie.poster_path}`;
        row_posters.appendChild(poster);
    })
})
// ---------------fetchDocumentaries----------------

fetch(request.fetchDocumentaries)
.then((res)=>res.json())
.then((data)=>{
    // console.log(data.results);
    const head_row = document.getElementById("head_row");
    const row = document.createElement("div");
    row.classList.add("row");

    head_row.appendChild(row);

    const row_title = document.createElement("h2");
    row_title.classList.add("row_title");
    row_title.innerText = "DOCUMENTRAIES";

    row.appendChild(row_title);

    const row_posters = document.createElement("div");
    row_posters.classList.add("row_posters");
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.classList.add("row_posterLarge");
        poster.src = `${img_url}${movie.poster_path}`;
        row_posters.appendChild(poster);
    })
})