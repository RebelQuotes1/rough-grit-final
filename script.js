
const items = [
  "Titan Survival Paracord Emergency Kit",
  "Gerber Bear Grylls Fire Starter",
  "LifeStraw Personal Water Filter",
  "Survival Frog Tact Bivvy",
  "SOG Folding Saw",
  "Vont LED Tactical Flashlight",
  "Solo Stove Lite",
  "Bayite Ferro Rod Fire Starter",
  "Morakniv Companion Fixed Blade",
  "ReadyWise Emergency Food Supply"
];
const quotes = [
  "Comfort is a slow death.",
  "Only the prepared survive.",
  "You don’t rise to the occasion—you fall to your level of preparation.",
  "The world doesn’t owe you safety.",
  "Gear doesn’t matter if your mindset’s weak.",
  "Outlast, outwork, overcome.",
  "Hope is not a survival strategy.",
  "The weak wait for rescue. The strong make a way.",
  "Pain is your passport to grit.",
  "Survival is earned, not granted."
];
function rotate(list, id) {
  const d = new Date().getDate();
  document.getElementById(id).textContent = list[d % list.length];
}
function updateCountdown() {
  const end = new Date("2025-12-31T23:59:59").getTime();
  const now = new Date().getTime();
  const diff = end - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.getElementById("doomsday-clock").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s until collapse.`;
}
rotate(items, 'daily-item');
rotate(quotes, 'daily-quote');
setInterval(updateCountdown, 1000);
updateCountdown();
