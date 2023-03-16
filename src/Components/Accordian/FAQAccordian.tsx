import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { ReactNode } from 'react';


function CustomToggle(props: CustomToggleProps) {
    const { children, eventKey } = props
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <div onClick={decoratedOnClick} >
            {children}
        </div >)
}

interface CustomToggleProps {
    children: ReactNode;
    eventKey: string;
}

export default function FAQAccordian() {
    return (
        <Accordion defaultActiveKey="0" style={{ backgroundColor: "transparent", boxShadow: "none", border: "none" }}>
            <Card style={{ backgroundColor: "transparent", boxShadow: "none", border: "none" }}>
                <Card.Header style={{ backgroundColor: "transparent", boxShadow: "none", border: "none" }}>
                    <CustomToggle eventKey="0">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card style={{ backgroundColor: "transparent", boxShadow: "none", border: "none" }}>
                <Card.Header style={{ backgroundColor: "transparent", boxShadow: "none", border: "none" }}>
                    <CustomToggle eventKey="1">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
