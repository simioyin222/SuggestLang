document.getElementById("guessForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const experience = parseInt(document.getElementById("experience").value);
  const favProject = document.getElementById("favProject").value;
  const favMagic = document.getElementById("favMagic").value;
  const favPersonality = document.getElementById("favPersonality").value;
  const favSuperpower = document.getElementById("favSuperpower").value;
  const favDrink = document.getElementById("favDrink").value;

  let language = "";
  let errorMessage = "";

  if (favProject && favMagic && favPersonality && favSuperpower && favDrink) {
    if (favProject === "web" && favMagic === "frontend") {
      language = "JavaScript";
    } else if (favProject === "web" && favMagic === "backend") {
      language = "Rust";
    } else if (favProject === "apps" && favMagic === "lonewolf") {
      language = "Python";
    } else if (favProject === "apps" && favMagic === "dogs") {
      language = "C#";
    } else if (favProject === "data" && favMagic === "timeTravel") {
      language = "Swift";
    } else if (favProject === "data" && favMagic === "shapeShift") {
      language = "Ruby";
    } else {
      errorMessage = "NO MATCH";
    }
  }
});