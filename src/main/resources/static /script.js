let movies = [];

document.getElementById("movie-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const title = document.getElementById("title").value;
  const director = document.getElementById("director").value;
  const year = document.getElementById("year").value;

  movies.push({ title, director, year });
  displayMovies();
  this.reset();
});

document.getElementById("search").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  const filtered = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
  displayMovies(filtered);
});

function displayMovies(list = movies) {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";
  
  list.forEach((movie, index) => {
    const div = document.createElement("div");
    div.className = "movie-item";
    div.innerHTML = `
      <strong>${movie.title}</strong> - ${movie.director} (${movie.year})
      <button onclick="editMovie(${index})">Editar</button>
      <button onclick="deleteMovie(${index})">Eliminar</button>
    `;
    movieList.appendChild(div);
  });
}

function deleteMovie(index) {
  movies.splice(index, 1);
  displayMovies();
}

function editMovie(index) {
  const movie = movies[index];
  document.getElementById("title").value = movie.title;
  document.getElementById("director").value = movie.director;
  document.getElementById("year").value = movie.year;
  
  deleteMovie(index);
}
