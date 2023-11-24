import { SendMessage } from "./modules/UI/SendMessage.js";

//Se envia a la API lo necesario para crear el asistente
// async function Asistant() {
//   const urlAsistant = "https://api.openai.com/v1/assistants";
//   const dataAsistant = {
//     name: "CONTRADICTOR",
//     instructions:
//       "Quiero que actúes como el mejor Contradictor, quiero que siempre me des un contraargumento que me contradiga con fundamentos, no me des una opinion neutral, quiero que seas radical y contraargumentar lo que yo te diga en pocas palabras (máximo 70 palabras).",
//     model: "gpt-3.5-turbo",
//   };

//   const response = await fetch(urlAsistant, {
//     method: "POST",
//     headers: headers,
//     body: JSON.stringify(dataAsistant),
//   });
//   //Se recibe el asistente y sus datos
//   const message = await response.json();
//   console.log(`Asistente creado, datos del asistente:`, message);
// }

// Asistant();

SendMessage();
