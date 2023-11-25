import { api } from "../data/data.js";

/**
 * Comprobar estado de la ejecucion
 */
export async function Status(threadID, runID) {
  const response = await api(`threads/${threadID}/runs/${runID}`, "GET");
  console.log("Status de la ejecucucion: ", response.status);

  return response;
}
