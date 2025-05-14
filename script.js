
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

function getRotatedItem(list) {
  const day = new Date().getDate();
  return list[day % list.length];
}

document.getElementById('daily-item').textContent = getRotatedItem(items);
document.getElementById('daily-quote').textContent = getRotatedItem(quotes);
