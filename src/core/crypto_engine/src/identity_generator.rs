use crate::secure_rng::SecureRng;
use std::collections::HashMap;

pub struct IdentityGenerator {
    rng: SecureRng,
    word_lists: WordLists,
    emoji_set: Vec<char>,
}

struct WordLists {
    adjectives: Vec<String>,
    nouns: Vec<String>,
    verbs: Vec<String>,
}

#[derive(Debug, Clone)]
pub struct AnonymousIdentity {
    pub username: String,
    pub display_name: String,
    pub avatar_emoji: char,
    pub color_scheme: ColorScheme,
}

#[derive(Debug, Clone)]
pub struct ColorScheme {
    primary: String,
    secondary: String,
}

impl IdentityGenerator {
    pub fn new() -> Result<Self, IdentityError> {
        Ok(Self {
            rng: SecureRng::new()?,
            word_lists: Self::load_word_lists()?,
            emoji_set: Self::load_safe_emojis(),
        })
    }

    pub fn generate_identity(&mut self) -> Result<AnonymousIdentity, IdentityError> {
        // Generar nombre de usuario legible pero aleatorio
        let username = self.generate_readable_username()?;
        
        // Generar nombre para mostrar
        let display_name = self.generate_display_name()?;
        
        // Seleccionar emoji aleatorio seguro
        let avatar_emoji = self.select_random_emoji()?;
        
        // Generar esquema de colores
        let color_scheme = self.generate_color_scheme()?;

        Ok(AnonymousIdentity {
            username,
            display_name,
            avatar_emoji,
            color_scheme,
        })
    }

    fn generate_readable_username(&mut self) -> Result<String, IdentityError> {
        // Formato: Adjetivo + Sustantivo + Número
        let adjective = self.random_word(&self.word_lists.adjectives)?;
        let noun = self.random_word(&self.word_lists.nouns)?;
        let number = self.rng.gen_range(100..999);

        Ok(format!("{}{}{}", 
            adjective.to_lowercase(),
            noun.to_lowercase(),
            number
        ))
    }

    fn generate_display_name(&mut self) -> Result<String, IdentityError> {
        // Formato más amigable para mostrar
        let verb = self.random_word(&self.word_lists.verbs)?;
        let noun = self.random_word(&self.word_lists.nouns)?;
        
        Ok(format!("{} {}", 
            verb.to_lowercase(),
            noun.to_lowercase()
        ))
    }

    fn select_random_emoji(&mut self) -> Result<char, IdentityError> {
        // Seleccionar emoji aleatorio de la lista segura
        self.emoji_set.choose(&mut self.rng)
            .copied()
            .ok_or(IdentityError::NoEmojisAvailable)
    }

    fn generate_color_scheme(&mut self) -> Result<ColorScheme, IdentityError> {
        // Generar colores que sean accesibles y agradables
        let primary = self.generate_safe_color()?;
        let secondary = self.generate_contrasting_color(&primary)?;

        Ok(ColorScheme {
            primary,
            secondary,
        })
    }

    fn load_safe_emojis() -> Vec<char> {
        // Lista curada de emojis seguros y neutrales
        vec![
            '🌟', '🌙', '🌍', '🌈', '🌸', '🍀', '🎨', '🎭', '🎪', '🎯',
            '🎲', '🎹', '🎧', '🎮', '🎪', '🌺', '🍁', '🍂', '🍃', '🌾',
            '🌿', '🍄', '🐚', '🦋', '🐌', '🐢', '🦕', '🦖', '🦜', '🦢',
            '🦩', '🦚', '🦉', '🦊', '🦝', '🦨', '🦡', '🦦', '🦥', '🦙',
            '🦘', '🦛', '🦒', '🦏', '🦣', '🦫', '🦭', '🦦', '🦥', '🦙'
        ]
    }

    fn load_word_lists() -> Result<WordLists, IdentityError> {
        Ok(WordLists {
            adjectives: vec![
                "Cosmic", "Mystic", "Quantum", "Stellar", "Astral",
                "Nebula", "Photon", "Quasar", "Radiant", "Zenith",
                "Crystal", "Prism", "Echo", "Flux", "Nova",
                "Orbit", "Pulse", "Wave", "Vortex", "Helix"
            ].into_iter().map(String::from).collect(),

            nouns: vec![
                "Phoenix", "Dragon", "Sphinx", "Griffin", "Pegasus",
                "Raven", "Wolf", "Fox", "Owl", "Bear",
                "Tiger", "Lion", "Eagle", "Hawk", "Falcon",
                "Dolphin", "Whale", "Turtle", "Panda", "Koala"
            ].into_iter().map(String::from).collect(),

            verbs: vec![
                "Dancing", "Flying", "Dreaming", "Gliding", "Soaring",
                "Floating", "Drifting", "Flowing", "Rising", "Shining",
                "Glowing", "Beaming", "Sailing", "Diving", "Leaping",
                "Running", "Jumping", "Swimming", "Climbing", "Racing"
            ].into_iter().map(String::from).collect(),
        })
    }

    fn random_word(&mut self, words: &[String]) -> Result<&String, IdentityError> {
        words.choose(&mut self.rng)
            .ok_or(IdentityError::NoWordsAvailable)
    }

    fn generate_safe_color(&mut self) -> Result<String, IdentityError> {
        // Generar colores que sean accesibles
        let hue = self.rng.gen_range(0..360);
        let saturation = self.rng.gen_range(60..80);
        let lightness = self.rng.gen_range(45..65);

        Ok(format!("hsl({}, {}%, {}%)", hue, saturation, lightness))
    }

    fn generate_contrasting_color(&mut self, primary: &str) -> Result<String, IdentityError> {
        // Generar color contrastante que cumpla WCAG
        let primary_hue = self.extract_hue(primary)?;
        let contrasting_hue = (primary_hue + 180) % 360;
        
        Ok(format!("hsl({}, 70%, 55%)", contrasting_hue))
    }
}

#[derive(Debug)]
pub enum IdentityError {
    RngError,
    NoWordsAvailable,
    NoEmojisAvailable,
    ColorError,
} 