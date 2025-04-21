
function showGritResult() {
  const results = [
    "You thought MREs were a rap group. You're done.",
    "You bartered your last match for a vape cartridge.",
    "You asked a survivalist if they take Venmo. They took your boots instead.",
    "You screamed 'Alexa, help' and a wild boar came. He wasn't feeling it.",
    "You wore crocs to a bug-out drill. You're on your own now.",
    "You brought oat milk to a bear encounter. Bold. Dumb, but bold."
  ];
  const result = results[Math.floor(Math.random() * results.length)];
  document.getElementById("grit-result").textContent = result;
}
