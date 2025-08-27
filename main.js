document.addEventListener("DOMContentLoaded", () => {
  const terminal = document.querySelector(".terminal");
  const messages = [
    "> Initializing neural clairvoyance protocol...",
    "> Scanning quantum ether for anomalies...",
    "> Prediction engine online...",
    "> Your future is being computed...",
    "",
    "[Access denied: You’re not ready yet]"
  ];

  terminal.innerHTML = ""; // Clear existing content

  let i = 0;
  const typeLine = () => {
    if (i < messages.length) {
      const line = document.createElement("div");
      line.textContent = messages[i];
      terminal.appendChild(line);
      i++;
      setTimeout(typeLine, 800);
    }
  };

  typeLine();
});
