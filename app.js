// import functions and grab DOM elements
import { renderGoblin, } from './utils.js';
const form = document.querySelector('form');
const goblinDiv = document.querySelector('.goblins');

// let state
let goblins = [{ name: 'Terry', hp: 1, }, { name: 'Plate Goblin Leader', hp: 5 }];
let playerHp = 10;
// set event listeners 
form.addEventListener('submit', (e) => {
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
        const newDiv = renderGoblin(gob);
        newDiv.addEventListener('click', () => {
            goblinClickHandler(gob);
        });
        goblinDiv.append(newDiv);
    }
}

displayGoblins();

function goblinClickHandler(goblin) {
    if (goblin.hp === 0) return;
    if (playerHp === 0) return;
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
