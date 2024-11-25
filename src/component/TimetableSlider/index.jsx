import styles from './index.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Timetable from '@/component/Timetable';

const NextArrow = ({ className, style, onClick }) => {
    return (
        <img 
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
            src="/images/right-arrow-icon.png" 
        />
    )
}
const PrevArrow = ({ className, style, onClick }) => {
    return (
        <img 
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
            src="/images/left-arrow-icon.png" 
        />
    )
}
const TimetableSlider = ({ timetables, selected, setSelected }) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 4,
        slidesToShow: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ],
    };
    return (
        <div className={styles.container}>
            <Slider {...settings}>
                {
                    timetables.map((v, i) => (
                        <div key={i}><Timetable setSelected={() => setSelected(i)} selected={i===selected} data={v} /></div>
                    ))
                }
            </Slider>
        </div>
    );
}

export default TimetableSlider;