let list = document.getElementById("list");

// store all links
let links = [];

// function to shorten URL
function shortenURL() {
  let url = document.getElementById("url").value;

  // check empty input
  if (url === "") {
    alert("Please enter a URL");
    return;
  }

  // create short code
  let shortCode = Math.random().toString(36).substring(2, 6);

  // create object
  let link = {
    short: shortCode,
    original: url,
    clicks: 0
  };

  // add to array
  links.push(link);

  // show links
  displayLinks();
}

// function to display all links
function displayLinks() {
  list.innerHTML = "";

  for (let i = 0; i < links.length; i++) {
    let li = document.createElement("li");

    li.innerHTML =
      "<a href='#' onclick='openLink(" + i + ")'>" +
      links[i].short +
      "</a> (" +
      links[i].clicks +
      " clicks)";

    list.appendChild(li);
  }
}

// function when link is clicked
function openLink(index) {
  links[index].clicks++;

  // open original link
  window.open(links[index].original);

  // update UI
  displayLinks();
}
 