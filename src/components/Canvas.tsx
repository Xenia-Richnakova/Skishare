import { useRef, useState } from 'react';
import { useAtom } from "jotai"
import Card from 'react-bootstrap/Card';
import Palet from './Palet';
import { PICKED_COLOR_ATOM, PICKED_WIDTH_ATOM } from './AppState';
import Controls from './Controls';

function drawLine(ctx: CanvasRenderingContext2D | null, x: number, y: number, previous: MousePosition, color: string, width: number ,mouseDown:boolean) {
    if (ctx === null || previous === undefined || !mouseDown) {
        return
    }
    ctx.beginPath();
    ctx.moveTo(previous.x, previous.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = width
    ctx.stroke();

    ctx.beginPath()
    ctx.lineWidth = width*0.5
    ctx.arc(x, y, 1, 0, 2*Math.PI)
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
    const [pickedColor, setPickedColor] = useAtom(PICKED_COLOR_ATOM)
    const [pickedWidth, setPickedWidth] = useAtom(PICKED_WIDTH_ATOM)
  
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (canvasRef.current === null) {
        return;
      }

      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      drawLine(canvasRef.current.getContext("2d"), x, y, previousPosition, pickedColor.color, pickedWidth.width, mouseDown);
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
        <Controls canvasRef={canvasRef}></Controls>
        </div>
        <Palet></Palet>
      </Card>
    );
  }