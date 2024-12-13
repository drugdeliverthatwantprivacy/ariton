use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct IdentityGenerator {}

#[wasm_bindgen]
impl IdentityGenerator {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self {}
    }

    #[wasm_bindgen]
    pub fn generate_identity(&self) -> Result<JsValue, JsValue> {
        let identity = serde_wasm_bindgen::to_value(&AnonymousIdentity {
            username: "usuario123".to_string(),
            display_name: "Usuario Anónimo".to_string(),
            avatar_emoji: "🦊".to_string(),
            color_scheme: ColorScheme {
                primary: "#1976d2".to_string(),
                secondary: "#dc004e".to_string(),
            },
        })?;
        Ok(identity)
    }
} 