export function Render(response) {
  const renderResponse = document.createElement("h5");
  renderResponse.className = "bot-message";
  renderResponse.innerHTML = `RefuteBot: ${response}`;
  const container = document.querySelector(".container-response");
  container.appendChild(renderResponse);
  container.scrollTop = container.scrollHeight;

  const btnSend = document.querySelector(".button");
  btnSend.disabled = false;
  btnSend.classList.remove("btn-disabled");
  const input = document.querySelector(".input");
  input.disabled = false;
  input.value = '';
  input.placeholder = "Message";
}
