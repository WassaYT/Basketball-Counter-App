let pointshome = 0;
let pointsElHome = document.getElementById("points-home")


function add1home() {
  pointshome ++;
  pointsElHome.textContent = pointshome;
}
function add2home() {
  pointshome += 2;
  pointsElHome.textContent = pointshome;
}
function add3home() {
  pointshome += 3;
  pointsElHome.textContent = pointshome;
}

let pointsGuests = 0;
let pointsElGuests = document.getElementById("points-guests")


function add1guests() {
  pointsGuests ++;
  pointsElGuests.textContent = pointsGuests;
}
function add2guests() {
  pointsGuests += 2;
  pointsElGuests.textContent = pointsGuests;
}
function add3guests() {
  pointsGuests += 3;
  pointsElGuests.textContent = pointsGuests;
}