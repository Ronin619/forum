var postDiv = document.getElementsByClassName("posts")[0];
var btn = document.getElementById("submit");
var namePost = document.getElementById("name");
var msgPost = document.getElementById("message");

btn.addEventListener("click", function (e) {
  var nameValue = namePost.value;
  var msgValue = msgPost.value;

  var newDiv = document.createElement("div");
  newDiv.classList.add("post-div");

  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  p1.innerText = msgValue;
  p2.innerText = `Posted By: ${nameValue}`;

   var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", function () {
    newDiv.remove()
  });

  newDiv.appendChild(p1);
   newDiv.appendChild(p2);
   newDiv.appendChild(deleteBtn);

   postDiv.appendChild(newDiv);

  namePost.value = "";
  msgPost.value = "";
});