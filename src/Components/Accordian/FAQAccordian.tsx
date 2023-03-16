import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { ReactNode } from 'react';
import { accordianDataType } from '../../Pages/FAQ/FAQ';
import styles from "./faqaccordian.module.scss"

function CustomToggle(props: CustomToggleProps) {
    const { children, eventKey } = props
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <div style={{ padding: 0, margin: 0 }} onClick={decoratedOnClick}>
            {children}
        </div >)
}

interface CustomToggleProps {
    children: ReactNode;
    eventKey: string;
}

interface FAQAccordianProps {
    accordianData: accordianDataType[];
}

export default function FAQAccordian(props: FAQAccordianProps) {

    const { accordianData } = props;

    console.log(accordianData)
    return (
        <Accordion defaultActiveKey="0" style={{ backgroundColor: "transparent", boxShadow: "none", border: "none" }}>
            {
                accordianData.map(accordian => (
                    <Card className={styles.cardStyles}>
                        <Card.Header className={styles.cardHeaderStyles}>
                            <CustomToggle eventKey="0">{accordian?.question}</CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse className={styles.cardCollapseStyles} eventKey="0">
                            <Card.Body>{accordian?.answer}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))
            }
        </Accordion>
    );
}
