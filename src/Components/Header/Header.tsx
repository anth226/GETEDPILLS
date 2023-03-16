import React from 'react';
import styles from './header.module.css'
import LogoImg from "../../assets/icons/logo.png"
import SearchIcon from "../../assets/icons/searchicon.svg"
import ArrowIcon from "../../assets/icons/arrow.svg"
import CartIcon from "../../assets/icons/carticon.png";

const Header: React.FC = () => {
    return (<div className={styles.headerContainer}>
        <div className={styles.bannerComponent}>
            <p>FREE shipping on all pharmacy orders.</p>
        </div>
        <div className={styles.navContainer}>
            <div className={styles.leftSide}>
                <div className={styles.logoContainer}>
                    <img src={LogoImg} alt="getedpills_logo" />
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.searchContainer}>
                    <input type="text" placeholder='Search' />
                    <img src={SearchIcon} alt="search_icon" />
                </div>
                <div className={styles.signinContainer}>
                    <p>Sign In</p>
                    <img src={ArrowIcon} alt="arrow_icon" />
                </div>
                <div className={styles.cartContainer}>
                    <img src={CartIcon} alt="cart_icon" />
                </div>
            </div>


        </div>
    </div>);
}

export default Header;