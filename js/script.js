document.getElementById("guessForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const experience = parseInt(document.getElementById("experience").value);
  const favProject = document.getElementById("favProject").value;
  console.log("Experience:", experience);
  console.log("Favorite Project:", favProject);
})