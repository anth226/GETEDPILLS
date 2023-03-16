import { stringify } from 'querystring';
import React from 'react';
import FAQAccordian from '../../Components/Accordian/FAQAccordian';
import Header from '../../Components/Header/Header';
import styles from './faq.module.scss'

export interface accordianDataType {
    question: string;
    answer: string;
}

const accordianData: accordianDataType[] = [
    {
        question: 'What causes erectile dysfunction?',
        answer: "ED can be caused by a variety of factors, including physical and psychological factors. Here are some common causes: 1 Physical causes: 1 Cardiovascular diseases, such as high blood pressure, atherosclerosis, or heart disease, which can affect blood flow to the penis 2 Diabetes, which can damage the nerves and blood vessels that control erections 3 Hormonal imbalances, such as low testosterone levels 4 Neurological disorders, such as multiple sclerosis or Parkinson's disease 5 Pelvic injuries or surgeries that damage nerves or blood vessels in the penis 6 Certain medications, such as antidepressants or blood pressure medications 7 Substance abuse, such as alcohol, tobacco, or illicit drugs 2 Psychological causes: 1 Anxiety, stress, or depression 2 Relationship issues or conflicts 3 Performance anxiety or fear of sexual failure 4 Low self- esteem or body image issues"
    }
]


const FAQ: React.FC = (props) => {

    return (<div className={styles.pageContainer}>
        <div className={styles.contentContainer}>
            <Header />
            <h1 className={styles.pageHead}>
                Frequently Asked Questions
            </h1>

            <div className={styles.FAQsContentContainer}>
                <div className={styles.FAQsContentContainerLeftSide}>
                    <p>General Pharmacy Questions</p>
                    <p>Ordering Questions</p>
                    <p>Prescription FAQs</p>
                </div>
                <div className={styles.FAQsContentContainerRightSide}>
                    <div className={styles.section}>
                        <p className={styles.specificFAQHeader}>
                            FAQs / <span>General Pharmacy Questions</span>
                        </p>
                        <FAQAccordian accordianData={accordianData} />
                    </div>
                    <div className={styles.section}>
                        <p className={styles.specificFAQHeader}>
                            FAQs / <span>General Pharmacy Questions</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default FAQ;