import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainGoalItem from "@/components/goal/MainGoalItem";
import Data from "src/pages/goal/goalAPI.json";

export default function MainGoalSlider() {
  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg width="7" height="15" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.17749 8.99979L1.47038 9.7069L0.763277 8.99979L1.47038 8.29268L2.17749 8.99979ZM9.11744 17.354L1.47038 9.7069L2.8846 8.29268L10.5317 15.9397L9.11744 17.354ZM1.47038 8.29268L9.11744 0.645627L10.5317 2.05984L2.8846 9.7069L1.47038 8.29268Z"
            fill="#2D2D2D"
          />
        </svg>
        <style jsx>{`
          .slick-arrow:before {
            content: "";
          }
        `}</style>
      </div>
    );
  }
  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg width="7" height="15" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.82251 9.00021L9.52962 8.2931L10.2367 9.00021L9.52962 9.70732L8.82251 9.00021ZM1.88256 0.646043L9.52962 8.2931L8.1154 9.70732L0.468343 2.06026L1.88256 0.646043ZM9.52962 9.70732L1.88256 17.3544L0.468343 15.9402L8.1154 8.2931L9.52962 9.70732Z"
            fill="#2D2D2D"
          />
        </svg>
        <style jsx>{`
          .slick-arrow {
            display: flex;
            justify-content: end;
            margin-right: 40px;
          }
          .slick-arrow:before {
            content: "";
          }
        `}</style>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const goalItems = Data.results;
  const arr = ["임시배열1", "임시배열2"];

  return (
    <div>
      {/* slice 넣는 곳 */}
      <ul className="goal-slider">
        {goalItems.map((item) => {
          <h1>{item.text}</h1>;
          console.log(item.text);
        })}

        {arr.map((item) => {
          <h2>{item}</h2>;
          console.log(item);
        })}

        <Slider {...settings}>
          {/* {goalItems.map((item) => {
            <MainGoalItem id={item.id} age={item.age} text={item.text} likes={item.likes} comments={item.comments.length} />;
            console.log(item.id + "번째 아이템 호출됨");
          })} */}
          <MainGoalItem
            id="301"
            age="25"
            text="세상이 빠르게 변할수록 '혁신'이라는 말도 자주 등장합니다. 하지만 진정한 혁신의 순간이란 그리 자주 찾아오지 않죠.세상이 빠르게 변할수록 '혁신'이라는 말도 자주 등장합니다. 하지만 진정한 혁신의 순간이란 그리 자주 찾아오지 않죠."
            likes="213"
            comments="4"
          />
          <MainGoalItem
            id="301"
            age="25"
            text="세상이 빠르게 변할수록 '혁신'이라는 말도 자주 등장합니다. 하지만 진정한 혁신의 순간이란 그리 자주 찾아오지 않죠.세상이 빠르게 변할수록 '혁신'이라는 말도 자주 등장합니다. 하지만 진정한 혁신의 순간이란 그리 자주 찾아오지 않죠."
            likes="213"
            comments="4"
          />
          <MainGoalItem
            id="301"
            age="25"
            text="세상이 빠르게 변할수록 '혁신'이라는 말도 자주 등장합니다. 하지만 진정한 혁신의 순간이란 그리 자주 찾아오지 않죠.세상이 빠르게 변할수록 '혁신'이라는 말도 자주 등장합니다. 하지만 진정한 혁신의 순간이란 그리 자주 찾아오지 않죠."
            likes="213"
            comments="4"
          />
        </Slider>
      </ul>
      <style jsx>{`
        .goal-slider {
          list-style: none;
        }
      `}</style>
    </div>
  );
}