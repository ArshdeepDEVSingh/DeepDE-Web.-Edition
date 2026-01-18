export function Clock() {
  const now = new Date();
  document.getElementById('Clock').textContent = now.toLocaleTimeString('en-GB', { hour12: false});
}
setInterval(Clock, 1000);

export function openYT() {
  document.getElementById('fs').innerHTML = '<YT />';
}

fetch("https://localhost:5174/ping")
.then(r => r.json())
.then(d => console.log(d)); 