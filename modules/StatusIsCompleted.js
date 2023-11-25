import { Response } from "./Response.js";
import { Status } from "./Status.js";

export async function StatusIsCompleted(threadID, runID) {
  let status = await Status(threadID, runID);
  while (status.status !== "completed") {
    status = await Status(threadID, runID);
    if (status.status === "completed") {
      Response(threadID);
    } else if (status.status === "failed") {
      alert(`Server error: ${status.last_error.message}`);
      window.location.reload();
    }
  }
}
