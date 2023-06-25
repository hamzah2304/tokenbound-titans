use rand::Rng;
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
        let damage_multiplier = rand::thread_rng().gen_range(0.75..=1.25);
        let damage = (self.attack as f64 * damage_multiplier) as i32 - other.armour;
        let actual_damage = damage.max(1); // Ensure a minimum damage of 1
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
    let mut rng = rand::thread_rng();

    loop {
        let should_attack_a = rng.gen_bool(character_a.speed as f64 / (character_a.speed + character_b.speed) as f64);
        let should_attack_b = rng.gen_bool(character_b.speed as f64 / (character_a.speed + character_b.speed) as f64);

        if should_attack_a {
            let damage_a = character_a.attack(&mut character_b);
            battles.push(format!(
                "{} attacks {} for {} damage. {}'s health is now {}. {}'s health is now {}.",
                character_a.name,
                character_b.name,
                damage_a,
                character_a.name,
                character_a.health.max(0), // Ensure non-negative health
                character_b.name,
                character_b.health.max(0) // Ensure non-negative health
            ));
        }

        if character_b.health <= 0 {
            break;
        }

        if should_attack_b {
            let damage_b = character_b.attack(&mut character_a);
            battles.push(format!(
                "{} attacks {} for {} damage. {}'s health is now {}. {}'s health is now {}.",
                character_b.name,
                character_a.name,
                damage_b,
                character_a.name,
                character_a.health.max(0), // Ensure non-negative health
                character_b.name,
                character_b.health.max(0) // Ensure non-negative health
            ));
        }

        if character_a.health <= 0 {
            break;
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











