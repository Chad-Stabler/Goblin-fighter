export function renderGoblin(goblin) {
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    p1.textContent = goblin.name;

    div.classList.add('goblin');

    p2.textContent = goblin.hp < 0 ? 0 : goblin.hp;
    
    p3.textContent = goblin.hp < 0 ? '☠️' : '👺';
    if (goblin.hp <= 0) {
        goblin.classList.add('dead');
    }
    div.append(p1, p3, p2);
    return div;
}