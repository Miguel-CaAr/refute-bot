const apiKey = "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";
const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
  "OpenAI-Beta": "assistants=v1",
};
const API = "https://api.openai.com/v1/";

export async function api(path, method, body) {
  if (body !== undefined) {
    const response = await fetch(API + path, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
    });
    return await response.json();
  } else {
    const response = await fetch(API + path, {
      method: method,
      headers: headers,
    });
    return await response.json();
  }
}
