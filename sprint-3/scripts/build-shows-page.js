let showsTable = document.querySelector(".shows-section__shows-table");

axios
  .get("https://project-1-api.herokuapp.com/showdates", {
    params: { api_key: "13a72795-80d5-4254-83f3-52b13ce17108" }, //QUESTION: What is this params keyword, found it in the readings. ANSWER: We're entering parameter for the URL.
  })
  .then((response) => {
    for (item of response.data) {
      let eachShow = document.createElement("div");
      eachShow.classList.add("shows-section__each-show-container");

      let dateLabelAndItem = document.createElement("div");
      dateLabelAndItem.classList.add(
        "shows-section__date-label-item-container"
      );

      let dateLabel = document.createElement("h5");
      dateLabel.classList.add("shows-section__label");
      dateLabel.innerText = "DATE";
      dateLabelAndItem.appendChild(dateLabel);

      let date = document.createElement("h5");
      date.classList.add("shows-section__date");
      date.innerText = item.date;
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
      venue.innerText = item.place;
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
      location.innerText = item.location;
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
  });
