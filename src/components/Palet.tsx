import { Form, InputGroup } from "react-bootstrap";
import { useAtom } from "jotai"
import { PICKED_COLOR_ATOM, PICKED_WIDTH_ATOM } from "./AppState";


export default function Palet() {
    const [pickedColor, setPickedColor] = useAtom(PICKED_COLOR_ATOM)
    const [pickedWidth, setPickedWidth] = useAtom(PICKED_WIDTH_ATOM)
    return (
        <div>
            <InputGroup className="p-3">
                <InputGroup.Text id="basic-addon1">Pick a color</InputGroup.Text>
                <Form.Control
                    type="color"
                    value={pickedColor.color}
                    onChange={e => setPickedColor({ color: e.target.value })}
                />
                <Form.Control type="button" onClick={() => setPickedColor({ color: '#FF0000'})} style={{backgroundColor:'#FF0000' }} />
                <Form.Control type="button" onClick={() => setPickedColor({ color: '#0000FF'})} style={{backgroundColor:'#0000FF' }} />
                <Form.Control type="button" onClick={() => setPickedColor({ color: '#00FF00'})} style={{backgroundColor:'#00FF00' }} />
                <Form.Control type="button" onClick={() => setPickedColor({ color: '#FFFF00'})} style={{backgroundColor:'#FFFF00' }} />
                <Form.Control type="button" onClick={() => setPickedColor({ color: '#FFA500'})} style={{backgroundColor:'#FFA500' }} />
                <Form.Control type="button" onClick={() => setPickedColor({ color: '#800080'})} style={{backgroundColor:'#800080' }} />
                <Form.Control type="button" onClick={() => setPickedColor({ color: '#FFC0CB'})} style={{backgroundColor:'#FFC0CB' }} />
                <Form.Control type="button" onClick={() => setPickedColor({ color: '#000000'})} style={{backgroundColor:'#000000' }} />
                <Form.Control type="button" onClick={() => setPickedColor({ color: '#FFFFFF'})} style={{backgroundColor:'#FFFFFF' }} />
                <Form.Control type="button" onClick={() => setPickedColor({ color: '#808080'})} style={{backgroundColor:'#808080' }} />
    
            </InputGroup>

            <InputGroup className="p-3">
            <InputGroup.Text id="basic-addon1">Set width: {pickedWidth.width}</InputGroup.Text>
                <Form.Control
                    type="range"
                    value={pickedWidth.width}
                    min="1"
                    max="20"
                    step={0.5}
                    onChange={e => setPickedWidth({ width: Number(e.target.value) })}
                />
            </InputGroup>
        </div>
    )
}