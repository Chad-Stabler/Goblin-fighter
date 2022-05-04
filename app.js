// import functions and grab DOM elements
const form = document.querySelector('form');

// let state
let goblins = [{ name: 'Terry', hp: 1, }, { name: 'Plate Goblin Leader' }];
// set event listeners 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newData = new FormData(form);
    let gobName = newData.get('goblin-name');
    let newGob = { name: gobName, hp: Math.ceil(Math.random() * 5), };
    newGob.push(goblins);
    displayGoblins();
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
