import { api } from "../data/data.js";
import { Message } from "./Messsage.js";
/**
 * Ahora se crea lo que la documentacion llama "hilo" que representa
 * una conversacion entre un "asistente" y un usuario.
 */
export async function Thread(message) {
  const response = await api("threads", "POST");
  console.log("Hilo id: ", response.id);

  Message(response.id, message);
}
