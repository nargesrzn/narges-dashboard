function theme() {
  document.body.classList.toggle("light");
   if (document.getElementById("mode").innerHTML == "Dark Mode") {
    document.getElementById("mode").innerHTML = "Light Mode";
  } else {
    document.getElementById("mode").innerHTML = "Dark Mode";
  }
}
