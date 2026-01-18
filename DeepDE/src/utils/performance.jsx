import { useEffect, useRef, useState } from "react";
import './performance.css'

const MAX = 60;

export default function SystemMonitor() {
  const canvasRef = useRef(null);

  const [cpu, setCpu] = useState([]);
  const [ram, setRam] = useState([]);
  const [disk, setDisk] = useState([]);

  function drawLine(ctx, data, color, w, h) {
    if (data.length < 2) return;

    ctx.strokeStyle = color;
    ctx.beginPath();

    data.forEach((v, i) => {
      const x = (i / (MAX - 1)) * w;
      const y = h - (v / 100) * h;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });

    ctx.stroke();
  }

  useEffect(() => {
    const id = setInterval(() => {
      fetch("http://localhost:5174/stats")
        .then(r => r.json())
        .then(d => {
          setCpu(p => [...p, d.cpu].slice(-MAX));
          setRam(p => [...p, d.ram].slice(-MAX));
          setDisk(p => [...p, d.disk].slice(-MAX));
        }); 
    }, 200);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if(!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawLine(ctx, cpu, '#5af', canvas.width, canvas.height);
    drawLine(ctx, ram, '#95f', canvas.width, canvas.height);
    drawLine(ctx, disk, '#55f', canvas.width, canvas.height);
  }, [cpu, ram, disk]);

  return(
    <div id="main">
      <div>
        <h1>
          <b style={{color:"#5af"}}>CPU</b>
          <b style={{color:"#95f"}}> RAM</b>
          <b style={{color:"#55f"}}> Disk</b>
        </h1>
      </div>
      <canvas ref={canvasRef} id="resrcGraph" height={1377} width={1080} />
    </div>
  );
}