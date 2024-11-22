"use client";

import Button from '@/component/Button';
import styles from './index.module.css';
import LectureInfo from './LectureInfo';
import LectureReviewList from './LectureReviewList';

const LectureDetail = ({data}) => {
    return (
        <div className={styles.container}>
            <img onClick={() => history.back()} className={styles.close_btn} src="/images/x-icon.png" />
            <div className={styles.title_wrap}>
                <span className={styles.text}>강의 정보</span>
                <Button size="small" isShadow>후기 작성하기</Button>
            </div>
            <div className={styles.contents_wrap}>
                <LectureInfo 
                    name={data.name}
                    professor={data.professor}
                    review_cnt={data.review_cnt}
                    rating={data.rating}
                    assignment={data.assignment}
                    team={data.team}
                    grade={data.grade}
                />
                <LectureReviewList/>
            </div>
        </div>
    );
}

export default LectureDetail;