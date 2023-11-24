import { Response } from "./Response.js";
import { Status } from "./Status.js";

export async function StatusIsCompleted(threadID, runID) {
  let status = await Status(threadID, runID);
  while (status !== "completed") {
    status = await Status(threadID, runID);
    if (status === "completed") {
      Response(threadID);
    } else if (status === "failed") {
      break;
    }
  }
}
