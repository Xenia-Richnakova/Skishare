import { Container, Row, Col } from "react-bootstrap"
import Nav from "./Navbar"

type LayoutType = {
    children?: JSX.Element | JSX.Element[]
}


export default function Layout(props: LayoutType) {
    return (
        <Container>
            <Row>
                <Col>
                    <Nav />
                </Col>
            </Row>
            <Row>
                <Col>{props.children}</Col>
            </Row>
        </Container>
    )
}