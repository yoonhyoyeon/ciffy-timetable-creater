import { useState } from 'react';
import styles from './index.module.css';
import Popup from '@/component/Popup';
import Input from '@/component/Input';
import Button from '@/component/Button';
import { setCookie, getCookie } from 'cookies-next/client';

const LoginPopup = ({opened, setOpened}) => {
    const [ id, setId ] = useState('');
    const [ pw, setPw ] = useState('');
    const closePopup = () => setOpened(false);
    const submit = async() => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `student_id=${id}&password=${pw}`,
        });
        const result = await response.json();

        if(!response.ok) { //로그인 실패
            if(result.detail) {
                alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
            }
            else {
                alert('로그인 ERROR');
            }
        } 
        else if(result.Connection==='Succeed') { //로그인 성공
            const option = {
                maxAge: 3600 * 24 * 14 //14일
            }
            //쿠키에 토큰 저장
            setCookie('access_token', result.access_token, option);
            setCookie('refresh_token', result.access_token, option);
            location.reload(true);
        }
    };
    const hi = () => {
        console.log(getCookie('access_token'));
    }
    return (
        <Popup opened={opened} setOpened={setOpened}>
            <div className={styles.container}>
                <img className={styles.logo} src="/images/logo.png" onClick={hi}/>
                <span className={styles.txt}>대양휴머니티칼리지 사이트에 로그인하여 인증합니다.<br/>(세종대학교 포털 ID/PW와 동일)</span>
                <Input 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    type="text"
                    placeholder="아이디"
                />
                <Input 
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                    type="password"
                    placeholder="비밀번호"
                />
                <Button size="small" onClick={submit}>로그인</Button>
                <div className={styles.txt}></div>
            </div>
        </Popup>
    )
}

export default LoginPopup;