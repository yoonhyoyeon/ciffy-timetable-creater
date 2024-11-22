import styles from './index.module.css';

const LectureReviewList = () => {
    const reviewList = [
        {
            rating: 4,
            when: '23년 1학기 수강자',
            contents: '강의 주제에 따라 다르겠지만 이번 강의의 주제가 욕망 이라 나름 재밌게 들었음 과제로 강의소감문을 4개정도 쓰는 게 생각보다 시간이 좀 걸림분량이 2페이지 정도인데 강의 내용을 집중해서 듣지않으면 쓰기 힘듦'
        },
        {
            rating: 5,
            when: '23년 1학기 수강자',
            contents: '선배님들 추천으로 듣게 되었는데, 꿀교양입니다. 성적 평가 방식은 출석 40%, 과제 60%로 구성되어 있는데 과제는 3차시 당 한 번씩 총 4번으로 이루어집니다. 과제에 자기 생각을 쓰지 말라고 하시는데, 분량만 잘 지키고 자기 생각이 심하게 많지 않으면 25점 만점을 주십니다. 또 출튀를 매우 싫어하시니, 그 점은 유의하시는 게 좋습니다.'
        },
        {
            rating: 5,
            when: '24년 1학기 수강자',
            contents: '주마다 외부 교수님께서 오셔서 강의를 해주시는 식인데 내용도 흥미롭고 꿀강을 넘어 은근 괜찮음 2페이지 분량의 보고서를 쓰긴 하는데 오래 걸리지도 않고 좋음'
        },
        {
            rating: 5,
            when: '23년 2학기 수강자',
            contents: '흥미로운 강의도 있고 지루한 강의도 있지만 마음에 드는 강의 골라서 보고서만 몇 번 쓰면 되기에 편했습니다'
        }
    ];
    return (
        <div className={styles.container}>

        </div>
    );
}

export default LectureReviewList;