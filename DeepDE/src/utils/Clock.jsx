import {} from "react";
import './Clock.css'

export default function Clock() {
  const now = new Date();
  document.getElementById('Clock').textContent = now.toLocaleTimeString('en-GB', { hour12: false});
  setInterval(Clock, 1000);

  return (
    <>
      <div><a id="Clock" className="mbWidget"></a></div>
    </>
  )
}