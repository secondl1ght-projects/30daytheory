const whereToNext = document.querySelector("#wheretonext");
const resultsDiv = document.querySelector(".results");
const messageDiv = document.querySelector(".message");
const tripList = [];
let tripSelected = [];
const list = document.querySelector("#list");
const links = document.querySelector(".links");

function randomNumber() {
  let number = Math.floor(Math.random() * tripList.length);
  return number;
}

function addToList() {
  if (tripList.includes(document.querySelector("#destination").value)) {
    messageDiv.innerHTML = "You have already entered that destination.";
  } else if (document.querySelector("#destination").value.length > 0) {
    tripList.push(document.querySelector("#destination").value);
    messageDiv.innerHTML = "";
    document.querySelector(
      "#count"
    ).innerHTML = `No. of destinations: ${tripList.length}`;
  } else {
    messageDiv.innerHTML = "Enter a destination.";
  }
  console.log(tripList);
}

function chooseLocation() {
  let chosenLocation = tripList[randomNumber()];
  console.log(chosenLocation);
  let selectedBoolean = tripSelected.includes(chosenLocation);
  if (tripList.length === 0) {
    messageDiv.innerHTML = "Please add destinations to your list.";
  } else if (!selectedBoolean) {
    messageDiv.innerHTML = "";
    list.insertAdjacentHTML("beforeend", `<li>${chosenLocation}</li>`);
    links.innerHTML = `<a href="https://airbnb.com/s/${chosenLocation}" target='_blank' rel='noreferrer' id='link1'><img src="./images/airbnb.png" alt="Airbnb logo" id='airbnb'><img src="./images/airbnb2.png" alt="Airbnb logo" id='airbnb2'></a><a href="https://www.tripadvisor.com/Search?q=${chosenLocation}" target='_blank' rel='noreferrer' id='link4'><img src="./images/trip.jpg" alt="Tripadvisor logo" id='trip'><img src="./images/trip2.jpg" alt="Tripadvisor logo" id='trip2'></a><a href="https://wikiless.org/w/index.php?search=${chosenLocation}&title=Special%3ASearch&fulltext=Search&ns0=1" target='_blank' rel='noreferrer' id='link2'><img src="./images/wiki.jpg" alt="Wikipedia logo" id='wiki'><img src="./images/wiki2.jpg" alt="Wikipedia logo" id='wiki2'></a><a href="https://duckduckgo.com/?q=${chosenLocation}&ia=web" target='_blank' rel='noreferrer' id='link3'><img src="./images/ddg.jpg" alt="DDG logo" id='ddg'><img src="./images/ddg2.jpg" alt="DDG logo" id='ddg2'></a>`;
    tripSelected.push(chosenLocation);
  } else if (tripList.length === tripSelected.length) {
    messageDiv.innerHTML = "Your trip list is complete!";
  } else if (selectedBoolean) {
    chooseLocation();
  }

  console.log(tripSelected);
}

document.querySelector("#add").onclick = addToList;
whereToNext.onclick = chooseLocation;
