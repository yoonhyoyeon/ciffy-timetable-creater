"use client";
import { useState } from 'react';
import styles from './index.module.css';
import { deleteCookie } from 'cookies-next/client';

const UserDropdown = ({setBackground}) => {
    const [opened, setOpened] = useState(false);

    const sign_out = () => {
        deleteCookie('access_token');
        deleteCookie('refresh_token');
        location.reload(true);
    }
    return (
        <div className={styles.UserDropdown}>
            <span 
                onClick={() => {
                    setOpened((prev) => !prev);
                    setBackground(true);
                }} 
                className={styles.txt}
            >윤효연 ⏷</span>
            <div 
                className={`${opened ? styles.opened : null} ${styles.background}`}
                onClick={() => setOpened(false)}
            >
                <div className={styles.dropdown_box}>
                    <div className={styles.item}>마이페이지</div>
                    <div onClick={sign_out} className={styles.item}>로그아웃</div>
                </div>
            </div>
        </div>
    );
}

export default UserDropdown;