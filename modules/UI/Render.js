export function Render(response) {
  const renderResponse = document.createElement("h5");
  renderResponse.className = "bot-message";
  renderResponse.innerHTML = `RefuteBot: ${response}`;
  const container = document.querySelector(".container-response");
  container.appendChild(renderResponse);

  const btnSend = (document.querySelector(".button").disabled = false);
  btnSend.classList.remove("btn-disabled");
  const input = (document.querySelector(".input").disabled = false);
  input.innerHTML = "Message";
}
