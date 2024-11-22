import { perlinNoise } from './perlin';

function createCanvas(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d')!;
    const width = canvas.width;
    const height = canvas.height;

    const pixelSize = 20;
    const gap = 3;
    const resolution = 0.01;

    for (let y = 0; y < height; y += pixelSize + gap) {
        for (let x = 0; x < width; x += pixelSize + gap) {
            const value = perlinNoise(x * resolution, y * resolution);
            const color = Math.floor(value * 255);

            ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
            ctx.fillRect(x, y, pixelSize, pixelSize);
        }
    }
}

export { createCanvas };
