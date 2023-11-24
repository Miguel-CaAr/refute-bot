import { Thread } from "../Thread.js";
import { SendWithEnter } from "./SendWithEnter.js";

export function SendMessage() {
  const container = document.querySelector(".container-response");
  const buttonSend = document.querySelector(".button");
  const input = document.querySelector(".input");

  buttonSend.addEventListener("click", () => {
    const user = document.createElement("p");
    user.className = "you-message"
    user.innerHTML = `Tu: ${input.value}`;
    container.appendChild(user);

    Thread(input.value);
    input.value = "Waiting answer";
    input.disabled = true;
    buttonSend.disabled = true;
    buttonSend.classList.add("btn-disabled");
  });
  SendWithEnter(input, buttonSend);
}
