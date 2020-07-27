// STEP 1
// Defining an ARRAY with each show as an OBJECT within the array.

let shows = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA",
  },

  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA",
  },

  {
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Fancisco, CA",
  },

  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA",
  },

  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",

    location: "San Fancisco, CA",
  },

  {
    date: "Wed Aug 11 2019",
    venue: "Pres Club",
    location: "San Fancisco, CA",
  },
];

// STEP 2
// Our HTML already has a parent element with the class ".shows-section__shows-table"
// Here, we are creating a variable to work with later. This variable will help us with telling JavaScript-
// -where we want to position the new elements that our script will create.

let showsTable = document.querySelector(".shows-section__shows-table");

// STEP 3
// Now, we create a function. This function will store the code for creating a parent <div> FOR each show
// We create a FOR loop which will look at every OBJECT and create elements for each KEY in the object
// We will assign a class-name for the parent <div>
// We

function createShowsTable(shows) {
  for (const show of shows) {
    let eachShow = document.createElement("div");
    eachShow.classList.add("shows-section__each-show-container");

    let dateLabelAndItem = document.createElement("div");
    dateLabelAndItem.classList.add("shows-section__date-label-item-container");

    let dateLabel = document.createElement("h5");
    dateLabel.classList.add("shows-section__label");
    dateLabel.innerText = "DATE";
    dateLabelAndItem.appendChild(dateLabel);

    let date = document.createElement("h5");
    date.classList.add("shows-section__date");
    date.innerText = show["date"];
    dateLabelAndItem.appendChild(date);

    eachShow.appendChild(dateLabelAndItem);

    // = = = = = = = = = = = = = = = = = = = = = =

    let venueLabelAndItem = document.createElement("div");
    venueLabelAndItem.classList.add(
      "shows-section__venue-label-item-container"
    );

    let venueLabel = document.createElement("h5");
    venueLabel.classList.add("shows-section__label");
    venueLabel.innerText = "VENUE";
    venueLabelAndItem.appendChild(venueLabel);

    let venue = document.createElement("h5");
    venue.classList.add("shows-section__venue-and-location");
    venue.innerText = show["venue"];
    venueLabelAndItem.appendChild(venue);

    eachShow.appendChild(venueLabelAndItem);

    // = = = = = = = = = = = = = = = = = = = = = =

    let locationLabelAndItem = document.createElement("div");
    locationLabelAndItem.classList.add(
      "shows-section__location-label-item-container"
    );

    let locationLabel = document.createElement("h5");
    locationLabel.classList.add("shows-section__label");
    locationLabel.innerText = "LOCATION";
    locationLabelAndItem.appendChild(locationLabel);

    let location = document.createElement("h5");
    location.classList.add("shows-section__venue-and-location");
    location.innerText = show["location"];
    locationLabelAndItem.appendChild(location);

    eachShow.appendChild(locationLabelAndItem);

    // = = = = = = = = = = = = = = = = = = = = = = CREATE A BUTTON

    let buyTickets = document.createElement("button");
    buyTickets.classList.add("shows-section__buy-button");
    buyTickets.innerText = "BUY TICKETS";
    eachShow.appendChild(buyTickets);

    // = = = = = = = = = = = = = = = = = = = = = =

    // Before finishing the loop, we tell our code to finally nest "eachShow" inside the showsTable.
    // This roughly works the same way as the .push() method in arrays.

    showsTable.appendChild(eachShow);
  }
}

createShowsTable(shows);
