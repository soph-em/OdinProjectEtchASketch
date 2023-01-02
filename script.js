// document
//   .getElementById("hoverColour")
//   .addEventListener("mouseover", function () {
//     document.getElementById("hoverColour").style.backgroundColor = "green";
//     console.log("hello");
//   });
for (div of document.querySelectorAll(".game > div")) {
  div.addEventListener(
    "mouseover",
    (event) => (event.srcElement.style.backgroundColor = "blue"),
    true
  );
}
// odd behaviour with mouseover in need of debugging (general notes)
//got elements in grid, inner elements with numbers, checking for mouseover, on smaller one technically moused over either or both
// each is node that could have event listener
// goes from innermost to outwards (bubbling) or inverse (capturing)
//technically don't have eventlistener on child
