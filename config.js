require("dotenv").config();

module.exports = {
  // ===================== MAIN CONFIGS =====================
  SESSION_ID: process.env.SESSION_ID,
  MONGODB_URI: process.env.MONGODB_URI,
  PREFIX: process.env.PREFIX || ".",
  MODE: process.env.MODE || "public",
  OWNER_NUMBER: process.env.OWNER_NUMBER,

  // ===================== OTHER CONFIGS =====================
  AUTO_VOICE: process.env.AUTO_VOICE === "true",
  AUTO_AI: process.env.AUTO_AI === "true",
  ANTI_BAD_WORDS_ENABLED: process.env.ANTI_BAD_WORDS_ENABLED === "true",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === "true",
  ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "").split(","),
  ANTILINK: process.env.ANTILINK === "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === "true",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD === "true",
  ALWAYS_TYPING: process.env.ALWAYS_TYPING === "true",
  ALWAYS_RECORDING: process.env.ALWAYS_RECORDING === "true",
  ANTI_BOT: process.env.ANTI_BOT === "true",
  ANTI_DELETE: process.env.ANTI_DELETE === "true",

  PACKNAME: process.env.PACKNAME || "Senal MD",
  AUTHOR: process.env.AUTHOR || "Mr Senal",

  // ===================== API KEYS =====================
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY,
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
  SHODAN_API: process.env.SHODAN_API,
  PEXELS_API_KEY: process.env.PEXELS_API_KEY,
  OMDB_API_KEY: process.env.OMDB_API_KEY,
  PIXABAY_API_KEY: process.env.PIXABAY_API_KEY,
  ZIPCODEBASE_API_KEY: process.env.ZIPCODEBASE_API_KEY,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  GOOGLE_CX: process.env.GOOGLE_CX,
  PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY,

  // ===================== START/ALIVE/MENU =====================
  START_MSG: process.env.START_MSG,
  ALIVE_IMG: process.env.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG,
  MENU_IMG: process.env.MENU_IMG,
  MENU_MSG: process.env.MENU_MSG,
  MENU_MS: process.env.MENU_MS,
};
