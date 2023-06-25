use std::cmp::Ordering;

#[derive(Debug)]
struct Character {
    name: String,
    health: i32,
    attack: i32,
    speed: i32,
    armour: i32,
}

impl Character {
    fn attack(&mut self, other: &mut Character) -> i32 {
        let damage = self.attack - other.armour;
        let actual_damage = damage.max(0);
        other.health -= actual_damage;
        actual_damage
    }
}

fn main() {
    let mut character_a = Character {
        name: String::from("Titan A"),
        health: 100,
        attack: 30,
        speed: 50,
        armour: 20,
    };

    let mut character_b = Character {
        name: String::from("Titan B"),
        health: 120,
        attack: 25,
        speed: 40,
        armour: 25,
    };

    let mut battles: Vec<String> = Vec::new();

    match character_a.speed.cmp(&character_b.speed) {
        Ordering::Less => {
            for _ in 0..character_b.speed {
                let damage_b = character_b.attack(&mut character_a);
                battles.push(format!(
                    "{} attacks {} for {} damage. {}'s health is now {}. {}'s health is now {}.",
                    character_b.name,
                    character_a.name,
                    damage_b,
                    character_a.name,
                    character_a.health,
                    character_b.name,
                    character_b.health
                ));
                if character_a.health <= 0 {
                    break;
                }
                if character_a.speed > 0 {
                    let damage_a = character_a.attack(&mut character_b);
                    battles.push(format!(
                        "{} attacks {} for {} damage. {}'s health is now {}. {}'s health is now {}.",
                        character_a.name,
                        character_b.name,
                        damage_a,
                        character_a.name,
                        character_a.health,
                        character_b.name,
                        character_b.health
                    ));
                }
                if character_b.health <= 0 {
                    break;
                }
            }
        }
        _ => {
            for _ in 0..character_a.speed {
                let damage_a = character_a.attack(&mut character_b);
                battles.push(format!(
                    "{} attacks {} for {} damage. {}'s health is now {}. {}'s health is now {}.",
                    character_a.name,
                    character_b.name,
                    damage_a,
                    character_a.name,
                    character_a.health,
                    character_b.name,
                    character_b.health
                ));
                if character_b.health <= 0 {
                    break;
                }
                if character_b.speed > 0 {
                    let damage_b = character_b.attack(&mut character_a);
                    battles.push(format!(
                        "{} attacks {} for {} damage. {}'s health is now {}. {}'s health is now {}.",
                        character_b.name,
                        character_a.name,
                        damage_b,
                        character_a.name,
                        character_a.health,
                        character_b.name,
                        character_b.health
                    ));
                }
                if character_a.health <= 0 {
                    break;
                }
            }
        }
    }

    let winner = if character_a.health > 0 {
        character_a.name.clone()
    } else {
        character_b.name.clone()
    };
    battles.push(format!("The winner is {}", winner));

    for battle in battles {
        println!("{}", battle);
    }
}







