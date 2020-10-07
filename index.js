/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector("h1#header")


header.addEventListener('click', function(){
  toggleColor(header)
})

/***** Deliverable 2 *****/

const playerObj = {likes: 0}; 

const playerSubmit = document.querySelector('input[value = "Add Player"]')

playerSubmit.addEventListener('click', function(e){
  e.preventDefault()
    const playerForm = document.querySelector('#new-player-form')
    
    playerObj.name = document.querySelector('input[name="name"]').value;
    playerObj.number = document.querySelector('input[name="number"]').value;
    playerObj.nickname = document.querySelector('input[name="nickname"]').value;
    playerObj.photo = document.querySelector('input[name="photo"]').value;
    
    renderPlayer(playerObj)
    playerForm.reset()
});

/***** Deliverable 3 *****/


playerContainer.addEventListener('click', function(e){
  
  if (e.target.matches('.like-button')) {
    let likes = e.target.parentNode.children[2]
    likes.textContent = (parseInt(likes.textContent) + 1) +  " likes"
      console.log(likes)
  }
})