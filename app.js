// import functions and grab DOM elements
import { renderGoblin, } from './utils.js';
const form = document.querySelector('form');
const goblinDiv = document.querySelector('.goblins');
const currentHp = document.getElementById('hp-left');
const defeatedEl = document.getElementById('defeated');

// let state
let defeatCount = 0;
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
    form.reset();
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

function displayPlayerStats() {
    currentHp.textContent = playerHp;
    defeatedEl.textContent = defeatCount;
}

displayGoblins();

function goblinClickHandler(goblin) {
    if (goblin.hp === 0) return; 
    if (playerHp === 0) return;

    const playerHit = Math.random();

    if (playerHit < 0.45) {
        goblin.hp--;
        displayGoblins();
        alert(`You've done it, you hurt ${goblin.name}`);
        if (goblin.hp <= 0) {
            defeatCount++;
            alert(`You've defeated ${goblin.name}!`);
        }
    } else alert(`${goblin.name} dodged your attack`);
    

    const gobHit = Math.random();

    if (gobHit < 0.2) {
        alert(`${goblin.name} has lashed back, striking you with a dirty plate`);
        playerHp -= 3;
        displayPlayerStats();
        if (playerHp <= 0) {
            alert('You\'ve been slain, another victim of the plate goblin revolution');
            playerHp = 0;
            displayPlayerStats();
        }
    }
    displayGoblins();
    displayPlayerStats();
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
