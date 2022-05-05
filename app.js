// import functions and grab DOM elements
import { renderGoblin, } from './utils.js';
const form = document.querySelector('form');
const goblinDiv = document.querySelector('.goblins');
const currentHp = document.getElementById('hp-left');
const defeatedEl = document.getElementById('defeated');
const perkSelect = document.getElementById('perks');
const player = document.getElementById('player-img');

// let state
let playerHitChance = 0.5;
let goblinHitChance = 0.2;
let playerDamage = 1;
let goblinDamage = 2;
let defeatCount = 0;
let goblins = [{ name: 'Terry', hp: 1, }, { name: 'Plate Goblin Leader', hp: 5 }];
let playerHp = 10;
// set event listeners 
perkSelect.addEventListener('change', () => {
    switch (perkSelect.value) {
        case 'double-hit' :
            playerDamage = 2;
            playerHitChance = 0.4;
            goblinHitChance = 0.3;
            alert('You hit twice as hard, but are less likely to hit and more likely to get hit');
            perkSelect.classList.add('hidden');
            break;
        case 'hp-boost' :
            playerDamage = 1;
            playerHitChance = 0.5;
            goblinHitChance = 0.4;
            playerHp = 15;
            alert('You have extra health, but are way more likely to get hit');
            displayPlayerStats();
            perkSelect.classList.add('hidden');
            break;
    }
});

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

    if (playerHit < playerHitChance) {
        goblin.hp -= playerDamage;
        displayGoblins();
        alert(`You've done it, you hurt ${goblin.name}`);
        if (goblin.hp <= 0) {
            defeatCount++;
            alert(`You've defeated ${goblin.name}!`);
        }
    } else alert(`${goblin.name} dodged your attack`);
    

    const gobHit = Math.random();

    if (gobHit < goblinHitChance) {
        alert(`${goblin.name} has lashed back, striking you with a dirty plate`);
        playerHp -= goblinDamage;
        displayPlayerStats();
        if (playerHp <= 0) {
            alert('You\'ve been slain, another victim of the plate goblin revolution');
            playerHp = 0;
            player.classList.add('killed');
            displayPlayerStats();
        }
    }
    displayGoblins();
    displayPlayerStats();
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
