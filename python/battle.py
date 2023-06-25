class Character:
    def __init__(self, name, health, attack, speed, armour):
        self.name = name
        self.health = health
        self.attack = attack
        self.speed = speed
        self.armour = armour
        self.attack_opportunities = 0

def battle(characterA, characterB):
    result = []
    lastAttacker = None

    gcd_speed = gcd(characterA.speed, characterB.speed)

    while characterA.health > 0 and characterB.health > 0:
        if characterA.attack_opportunities == 0 and characterB.attack_opportunities == 0:
            characterA.attack_opportunities = characterA.speed // gcd_speed
            characterB.attack_opportunities = characterB.speed // gcd_speed
            lastAttacker = characterB if characterA.speed > characterB.speed else characterA

        if characterA.attack_opportunities > 0 and (lastAttacker == characterB or characterB.attack_opportunities == 0):
            attacker, defender = characterA, characterB
            characterA.attack_opportunities -= 1
        else:
            attacker, defender = characterB, characterA
            characterB.attack_opportunities -= 1

        damage = max(attacker.attack - defender.armour, 0)
        defender.health -= damage

        healthA = max(characterA.health, 0)
        healthB = max(characterB.health, 0)

        result.append(f"{attacker.name} attacks {defender.name} for {damage} damage. {characterA.name} health is now {healthA}. {characterB.name} health is now {healthB}.")

        lastAttacker = attacker

    if characterA.health > 0:
        result.append(f"{characterA.name} wins!")
    else:
        result.append(f"{characterB.name} wins!")

    return result

def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

charA = Character('Titan A', health = 100, attack = 30, speed = 50, armour = 20)
charB = Character('Titan B', health = 120, attack = 25, speed = 40, armour = 25)

battle_result = battle(charA, charB)

for line in battle_result:
    print(line)







