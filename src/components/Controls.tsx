import { Button } from "react-bootstrap";
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';


function clean(ref: React.RefObject<HTMLCanvasElement>) {

    if (ref === null || ref.current === null) {
        return
    }
    let ctx = ref.current.getContext("2d")
    if (ctx === null) {
        return
    }
    ctx.beginPath();
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, ref.current.width, ref.current.height)
    ctx.stroke();
}

type ControlsProp= {
    canvasRef: React.RefObject<HTMLCanvasElement>
} 

export default function Controls({canvasRef}: ControlsProp) {

    return (
        <div>
            <Button 
            variant="outline-danger"
            onClick={() => clean(canvasRef)}>
                <Icon path={mdiTrashCanOutline} size={1} />
            </Button>
        </div>
    );
}