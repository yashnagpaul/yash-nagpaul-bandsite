getComments = () => {
  console.log("getting comments");

  axios
    .get("https://project-1-api.herokuapp.com/comments?api_key=yash")
    .then((result) => {
      console.log("retrieved comments");

      const sortedComments = result.data.sort(
        (a, b) => b.timestamp - a.timestamp
      );

      for (eachComment of sortedComments) {
        let commentContainerDiv = document.createElement("div");
        commentContainerDiv.classList.add(
          "conversation__comment-container-div"
        );

        let nameAndDateContainer = document.createElement("div");
        nameAndDateContainer.classList.add(
          "conversation__name-and-date-container"
        );

        let name = document.createElement("p");
        name.innerText = eachComment.name;
        name.classList.add("conversation__name");

        let date = document.createElement("p");
        date.innerText = new Date(eachComment.timestamp).toDateString();
        date.classList.add("conversation__date");

        let commentText = document.createElement("p");
        commentText.innerText = eachComment.comment;
        commentText.classList.add("conversation__comment");

        nameAndDateContainer.appendChild(name);

        nameAndDateContainer.appendChild(date);

        commentContainerDiv.appendChild(nameAndDateContainer);
        commentContainerDiv.appendChild(commentText);

        postedComments.appendChild(commentContainerDiv);
      }
    });
};

getComments(); // renders comments when user loads the page

// ==================== FUNCTION FOR POSTING A NEW COMMENT TO THE API ==================== //

let postedComments = document.querySelector(".conversation__posted-comments");

pushComment = (newObject) => {
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=yash",
      newObject
    )
    .then(() => {
      postedComments.innerHTML = "";
    })
    .then(getComments);
};

// ==================== EVENT HANDLER WHEN SUBMIT BUTTON IS CLICKED ==================== //

function clickSubmit(event) {
  event.preventDefault();

  let nameField = event.target.name_text_field.value;
  let commentContent = event.target.text_area.value;

  if (nameField !== "" && commentContent !== "") {
    let newCommentObject = {
      name: nameField,
      comment: commentContent,
    };

    pushComment(newCommentObject);

    event.target.reset();
  } else alert("Please enter a valid comment.");
}

// ==================== FINALLY WE ATTACH AN EVENT LISTENER TO THE FORM ==================== //

let commentForm = document.querySelector(".conversation__comment-form");
commentForm.addEventListener("submit", clickSubmit);
