import { useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';

function drawCircle(ctx: CanvasRenderingContext2D | null, x: number, y: number, mouseDown:boolean) {
    if (ctx === null || !mouseDown) {
        return
    }
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.stroke();
}

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mouseDown, setMouseDown] = useState(false)
  
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (canvasRef.current === null) {
        return;
      }
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      drawCircle(canvasRef.current.getContext("2d"), x, y, mouseDown);
      console.log(`Mouse position: x=${x}, y=${y}`);
      console.log(canvasRef.current.width, canvasRef.current.height)
    };

    return (
      <Card>
        <div>
        <canvas
          width={1000}
          height={500}
          style={{ width: '1000', height: '500', border: "solid"}}
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseDown={()=> setMouseDown(true)}
          onMouseUp={()=> setMouseDown(false)}
        ></canvas>
        </div>
      </Card>
    );
  }