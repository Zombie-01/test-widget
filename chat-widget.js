(function () {
  // Create toggle button
  const button = document.createElement("button");
  button.innerHTML = `
    <span style="
      display:inline-flex;
      align-items:center;
      gap:8px;
      font-weight:700;
      font-size:18px;
      font-family: 'Segoe UI', Arial, sans-serif;
    ">
      <span style="
        display:inline-block;
        width:22px;
        height:22px;
        background:#ff6600;
        border-radius:50%;
        margin-right:2px;
        position:relative;
      ">
        <span style="
          position:absolute;
          left:6px;
          top:5px;
          width:10px;
          height:10px;
          background:white;
          border-radius:50%;
        "></span>
      </span>
      <span style="color:white;">Ai</span><span style="color:#ff6600;">Toim</span>
    </span>
  `;
  button.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #181818;
    color: white;
    border: none;
    border-radius: 16px;
    padding: 10px 28px 10px 18px;
    font-size: 18px;
    cursor: pointer;
    z-index: 9999;
    box-shadow: 0 2px 12px rgba(0,0,0,0.18);
    display: flex;
    align-items: center;
    transition: background 0.2s;
  `;
  button.onmouseenter = () => button.style.background = "#222";
  button.onmouseleave = () => button.style.background = "#181818";

  // Create iframe
  const iframe = document.createElement("iframe");
  iframe.src = "https://test-widget-one.vercel.app/chat?lang=auto"; // Change to your chat app URL
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
