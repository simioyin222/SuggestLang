document.getElementById("guessForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const favProject = document.getElementById("favProject").value;
  const favMagic = document.getElementById("favMagic").value;
  const favPersonality = document.getElementById("favPersonality").value;
  const favSuperpower = document.getElementById("favSuperpower").value;
  const favDrink = document.getElementById("favDrink").value;

  let language = "";
  let errorMessage = "No matching language found for your selections.";

  if (favProject === "web" && favMagic === "frontend" && favPersonality === "lonewolf" && favSuperpower === "telekinesis" && favDrink === "coffee") {
    language = "JavaScript";
    errorMessage = "";
  } else if (favProject === "apps" && favMagic === "backend" && favPersonality === "dogs" && favSuperpower === "timeTravel" && favDrink === "tea") {
    language = "Python";
    errorMessage = "";
  } else if (favProject === "data" && favMagic === "shapeShift" && favPersonality === "birds" && favSuperpower === "invisibility" && favDrink === "soda") {
    language = "Ruby";
    errorMessage = "";
  } else if (favProject === "games" && favMagic === "ai" && favPersonality === "OVO" && favSuperpower === "shapeShift" && favDrink === "energyDrink") {
    language = "Java";
    errorMessage = "";
  }

  const resultElement = document.getElementById("result");
  resultElement.textContent = language ? "Your programming language is: " + language : errorMessage;
	document.getElementById("guessForm").reset();
});