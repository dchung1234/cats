import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/Image';
import Link from 'next/link';
import styles from './profileSummary.module.css';
import utilStyles from '../styles/utils.module.css';

export const myName = "First LastName";

export default function ProfileSummary({ children, home, hideProfile, handleViewMenu }) {
    const backHomeAspect = [140, 140 * 866 / 1002];

    return (
        <div className={styles.container}>
            <div className={`${styles.profile} ${hideProfile ? styles.hide : ''}`}>
                <div className={`${styles.mobileProfile} ${hideProfile ? styles.showSection : styles.hideSection}`}>
                    <h1 className={`${utilStyles.headingMd} ${styles.show}`}>{myName}</h1>
                </div>

                <div id={styles.profileSummary} className={hideProfile ? styles.hideSection : styles.showSection}>
                    <Image
                        priority
                        src="/images/profile.jpg"
                        className={`${utilStyles.borderCircle} ${styles.itemHide}`}
                        height={144}
                        width={144}
                        alt=""
                    />
                    <h1 className={`${utilStyles.heading2Xl} ${styles.itemHide}`}>{myName}</h1>
                    <h1 className={utilStyles.headingMd}>{myName}</h1>
                    <p className={`${utilStyles.headingMd} ${styles.itemHide}`}>Software Developer</p>
                    <p className={`${utilStyles.headingSm} ${styles.itemHide}`}>davin.chung1@gmail.com</p>
                    <p className={`${utilStyles.contentSm} ${styles.itemHide}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida convallis tellus, a elementum augue tempus sed. </p>
                </div>
            </div>
            <div className={`${styles.mobileProfile} ${styles.hamburger}`} onClick={handleViewMenu}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
                <Link className={`${styles.backToHome} ${hideProfile ? styles.minimize : styles.maximize} ${home ? styles.hideBackToHome : '' }`} href='/'>
                    <Image priority
                        src="/images/MaggieHome.png"
                        height={backHomeAspect[0]} width={backHomeAspect[1]} alt=""></Image>
                </Link>
            <div className={styles.context}>
                {children}
            </div>
        </div>
    );
}