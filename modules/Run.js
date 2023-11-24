import { api } from "../data/data.js";
import { StatusIsCompleted } from "./StatusIsCompleted.js";

/**
 * Ahora ejecutamos el asistente
 */
export async function Run(threadID) {
  const dataRun = {
    assistant_id: "asst_QDFyjuEoDfztv4KsMDLHbeiY",
    instructions: "",
  };
  const response = await api(`threads/${threadID}/runs`, "POST", dataRun);
  console.log("Asistente ejecutandose, id: ", response.id);

  StatusIsCompleted(threadID, response.id);
}
