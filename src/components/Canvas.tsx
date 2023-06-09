import { useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';

function drawLine(ctx: CanvasRenderingContext2D | null, x: number, y: number, previous: MousePosition, mouseDown:boolean) {
    if (ctx === null || previous === undefined || !mouseDown) {
        return
    }
    ctx.beginPath();
    ctx.moveTo(previous.x, previous.y);
    ctx.lineTo(x, y);
    ctx.stroke();
}
type MousePosition = {
  x:number, 
  y:number 
} | undefined;

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [previousPosition, setPreviousPosition] = useState<MousePosition>(undefined)
    const [mouseDown, setMouseDown] = useState(false)
  
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (canvasRef.current === null) {
        return;
      }

      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      drawLine(canvasRef.current.getContext("2d"), x, y, previousPosition, mouseDown);
      setPreviousPosition({x, y})
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
          onMouseDown={() => setMouseDown(true)}
          onMouseUp={() => {
            setMouseDown(false)
            setPreviousPosition(undefined)
          }}
          onMouseLeave={() => {
            setMouseDown(false)
            setPreviousPosition(undefined)
          }}
        ></canvas>
        </div>
      </Card>
    );
  }