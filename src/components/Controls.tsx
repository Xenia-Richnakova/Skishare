import { Button } from "react-bootstrap";
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';


export default function Controls() {
    return (
        <div>
            <Button variant="outline-danger">
                <Icon path={mdiTrashCanOutline} size={1} />
            </Button>
        </div>
    );
}