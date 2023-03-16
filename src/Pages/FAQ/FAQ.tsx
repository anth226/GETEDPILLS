import React from 'react';
import Header from '../../Components/Header/Header';
import styles from './faq.module.scss'

const FAQ: React.FC = () => {
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
                    <p className={styles.specificFAQHeader}>
                        FAQs / General Pharmacy Questions
                    </p>
                    <p className={styles.specificFAQHeader}>
                        FAQs / General Pharmacy Questions
                    </p>
                </div>
            </div>
        </div>
    </div>);
}

export default FAQ;