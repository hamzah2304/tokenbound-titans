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

  let arr = [];
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

      result.push(`${attacker.name} attacks ${defender.name}\nInflicting ${damage} damage\n${characterA.name} health ${healthA}\n${characterB.name} health ${healthB}`);
      arr.push([attacker.name,defender.name,damage,characterA.name,healthA,characterB.name,healthB])
      lastAttacker = attacker;
  }

  if (characterA.health > 0) {
      result.push(`${characterA.name} wins!`);
  } else {
      result.push(`${characterB.name} wins!`);
  }

  return {'txt':result,'data':arr};
}

let charA = new Character('Obsidion', 100, 30, 50, 20);
let charB = new Character('Private MonKey', 100, 25, 40, 25);

let battle_result = battle(charA, charB);

let l = battle_result['txt'].length;
for (let line of battle_result['txt']) {
  console.log(line);
}


//// 

for (var i = 0; i < l-1; i++) {
    // for each iteration console.log a word
    // and make a pause after it
    (function (i) {
        setTimeout(function () {
            document.getElementById('msg').innerHTML = battle_result['txt'][i];
            // if (battle_result['data'][i][4]==battle_result['data'][i][4])
            console.log(battle_result['txt'][i]);
            document.getElementById('hero-bar-txt').innerHTML = battle_result['data'][i][4];
            document.getElementById('villain-bar-txt').innerHTML = battle_result['data'][i][6];
            document.getElementById("hero-bar").style.width=battle_result['data'][i][4].toString()+"%";
            document.getElementById("villain-bar").style.width=battle_result['data'][i][6].toString()+"%";
        }, 1000 * i);
    })(i);
    
};

(function (i) {
  setTimeout(function () {
    document.location.href = "http://localhost:3000/post-battle";
  }, (1000) * (l-1));
})(1);