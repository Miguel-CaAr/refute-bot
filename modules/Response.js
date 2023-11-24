import { api } from "../data/data.js";
import { Render } from "./UI/Render.js";
/**
 * Por ultimo obtenemos la respuesta POR FIN!
 */
export async function Response(threadID) {
  const response = await api(`threads/${threadID}/messages`, "GET");
  console.log(
    "Respuesta del asistente: ",
    response.data[0].content[0].text.value
  );
  Render(response.data[0].content[0].text.value);
}
