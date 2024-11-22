import './style.css'
import { createCanvas } from './canvas.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <canvas id="perlin" width="800" height="598"></canvas>
  </div>
`

createCanvas(document.querySelector<HTMLCanvasElement>('#perlin')!)
