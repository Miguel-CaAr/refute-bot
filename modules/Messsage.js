import { api } from "../data/data.js";
import { Run } from "./Run.js";
/**
 * Se agrega un mensaje al hilo
 */
export async function Message(threadID, message) {
  const dataMessaje = {
    role: "user",
    content: message,
  };
  const response = await api(
    `threads/${threadID}/messages`,
    "POST",
    dataMessaje
  );
  console.log("Mensaje enviado: ", response.content[0].text.value);

  Run(threadID);
}
