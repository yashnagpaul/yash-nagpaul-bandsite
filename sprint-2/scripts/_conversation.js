let existingComments = [
  {
    name: "Micheal Lyons",
    date: new Date("12/18/2018"),
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    date: new Date("12/12/2018"),
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    date: new Date("11/15/2018"),
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

// Creating pre-existing comments on the page
let postedComments = document.querySelector(".conversation__posted-comments");

function commentMaker(commentsArray) {
  postedComments.innerHTML = "";
  const sortedComments = commentsArray.sort((a, b) => b.date - a.date);

  for (eachComment of sortedComments) {
    let commentContainerDiv = document.createElement("div");
    commentContainerDiv.classList.add("conversation__comment-container-div");

    let name = document.createElement("p");
    name.innerText = eachComment["name"];
    name.classList.add("conversation__name");

    let date = document.createElement("p");
    date.innerText = eachComment["date"];
    date.classList.add("conversation__date");

    let commentText = document.createElement("p");
    commentText.innerText = eachComment["comment"];
    commentText.classList.add("conversation__comment");

    commentContainerDiv.appendChild(name);
    commentContainerDiv.appendChild(date);
    commentContainerDiv.appendChild(commentText);

    postedComments.appendChild(commentContainerDiv);
  }
}

commentMaker(existingComments);

// SCRIPT FOR: FORM SUBMIT

let commentForm = document.querySelector(".conversation__comment-form"); // find the comment form

function clickSubmit(event) {
  //what is this "event parameter" ...?
  event.preventDefault();

  let nameField = event.target.name_text_field.value;
  let newName = document.createElement("p");
  newName.classList.add("conversation__name");
  newName.innerText = nameField;

  let commentContent = event.target.text_area.value;
  let newComment = document.createElement("p");
  newComment.classList.add("conversation__comment");
  newComment.innerText = commentContent;

  let newCommentDiv = document.createElement("div");
  newCommentDiv.classList.add("conversation__comment-container");

  newCommentDiv.appendChild(newName);
  newCommentDiv.appendChild(newComment);

  postedComments.appendChild(newCommentDiv);

  let newCommentObject = {
    name: nameField,
    date: new Date(),
    comment: commentContent,
  };

  existingComments.unshift(newCommentObject);

  commentMaker(existingComments);

  event.target.reset();
}

commentForm.addEventListener("submit", clickSubmit);
