(function () {
  // Create toggle button
  const button = document.createElement("button");
  button.innerText = "💬 Chat";
  button.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    z-index: 9999;
  `;

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.src = "https://app.voyager.mn?lang=auto"; // Change to your chat app URL
  iframe.style = `
    position: fixed;
    bottom: 70px;
    right: 20px;
    width: 380px;
    height: 520px;
    border: none;
    border-radius: 16px;
    z-index: 9999;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    display: none;
  `;

  button.onclick = () => {
    iframe.style.display = iframe.style.display === "none" ? "block" : "none";
  };

  document.body.appendChild(button);
  document.body.appendChild(iframe);
})();
