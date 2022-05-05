// import functions and grab DOM elements
import { renderGoblin, } from './utils.js';
const form = document.querySelector('form');
const goblinDiv = document.querySelector('.goblins');

// let state
let goblins = [{ name: 'Terry', hp: 1, }, { name: 'Plate Goblin Leader', hp: 5 }];
// set event listeners 
form.addEventListener('submit', (e) => {
    console.log(e);
    e.preventDefault();
    const newData = new FormData(form);
    let gobName = newData.get('goblin-name');
    const newGob = { name: gobName, hp: Math.ceil(Math.random() * 5), };
    goblins.push(newGob);
    displayGoblins();
});

function displayGoblins() {
    goblinDiv.textContent = '';
    for (let gob of goblins) {
        console.log(`logging ${gob.name}`);
        const newDiv = renderGoblin(gob);
        goblinDiv.append(newDiv);
    }
}

displayGoblins();
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
