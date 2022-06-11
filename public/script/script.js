let tappen = document.querySelector(".tappen_searchs");
let league = document.querySelector(".tappens_nav");
let height_wid = document.querySelector(".height_wid");
let league_box = document.querySelector(".tappen_box p");
let league_click = document.getElementById("league_click ");

height_wid.style.display = "none";
league.style.display = "none";

tappen.addEventListener("click", () => {
  league.style.display = "block";
  height_wid.style.display = "block";
  height_wid.addEventListener("click", () => {
    height_wid.style.display = "none";
    league.style.display = "none";
  });
  league.addEventListener("click", () => {
    height_wid.style.display = "none";
    league.style.display = "none";
    if (1 == 1) {
    }
  });
});
