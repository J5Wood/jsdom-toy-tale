let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const toyCollection = document.getElementById("toy-collection");
fetch("http://localhost:3000/toys").then(resp => resp.json()).then(function(json) {
for (let i = 0; i < json.length; i++) {
  
  const toyCard = document.createElement("div");
  toyCard.classList.add("card");

  const toyName = document.createElement("h2");
  toyName.innerHTML = json[i].name;

  const toyImg = document.createElement("img");
  toyImg.classList.add("toy-avatar");
  toyImg.setAttribute("src", json[i].image);

  const toyLikes = document.createElement("p");
  toyLikes.innerHTML = `${json[i].likes} Likes `;


  const toyBtn = document.createElement("button");
  toyBtn.classList.add("like-btn");
  toyBtn.innerHTML = "Like <3"


  toyCard.appendChild(toyName);
  toyCard.appendChild(toyImg);
  toyCard.appendChild(toyLikes);
  toyCard.appendChild(toyBtn);
  toyCollection.appendChild(toyCard);
}
console.log(json);
})
