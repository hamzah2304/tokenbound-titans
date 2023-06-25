class Character {
    constructor(name, health, attack, speed, armour) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.speed = speed;
        this.armour = armour;
        this.attack_opportunities = 0;
    }
}

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function battle(characterA, characterB) {
    let result = [];
    let lastAttacker = null;
    let gcd_speed = gcd(characterA.speed, characterB.speed);

    while (characterA.health > 0 && characterB.health > 0) {
        if (characterA.attack_opportunities === 0 && characterB.attack_opportunities === 0) {
            characterA.attack_opportunities = Math.floor(characterA.speed / gcd_speed);
            characterB.attack_opportunities = Math.floor(characterB.speed / gcd_speed);
            lastAttacker = (characterA.speed > characterB.speed) ? characterB : characterA;
        }

        let attacker, defender;
        if (characterA.attack_opportunities > 0 && (lastAttacker === characterB || characterB.attack_opportunities === 0)) {
            attacker = characterA;
            defender = characterB;
            characterA.attack_opportunities -= 1;
        } else {
            attacker = characterB;
            defender = characterA;
            characterB.attack_opportunities -= 1;
        }

        let damage = Math.max(attacker.attack - defender.armour, 0);
        defender.health -= damage;

        let healthA = Math.max(characterA.health, 0);
        let healthB = Math.max(characterB.health, 0);

        result.push(`${attacker.name} attacks ${defender.name} for ${damage} damage. ${characterA.name} health is now ${healthA}. ${characterB.name} health is now ${healthB}.`);

        lastAttacker = attacker;
    }

    if (characterA.health > 0) {
        result.push(`${characterA.name} wins!`);
    } else {
        result.push(`${characterB.name} wins!`);
    }

    return result;
}

let charA = new Character('Titan A', 100, 30, 50, 20);
let charB = new Character('Titan B', 120, 25, 40, 25);

let battle_result = battle(charA, charB);

for (let line of battle_result) {
    console.log(line);
}