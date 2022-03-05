import Arrow from "/public/layout/ic_arrow_expand.svg";
import css from "styled-jsx/css";
import { useState } from "react";
const style = css`
  .box {
    width: 240px;
    background: #e8f3ff;
    border-radius: 7px;
    margin-bottom: 8px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
  }
  .title h3 {
    font-size: 11px;
    line-height: 1.5;
    font-weight: normal;
    margin: 0;
  }
  .text {
    font-size: 11px;
    line-height: 1.5;
    font-weight: normal;
    padding: 10px;
    box-sizing: border-box;
  }
  .text.hidden {
    display: none;
  }
  .text div {
    margin-bottom: 24px;
  }

  .text div:last-child {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

const ResultFoldBox = ({ period, date, rule }) => {
  const [hidden, setHidden] = useState(true);

  const hadleClick = () => {
    setHidden(!hidden);
  };

  return (
    <div className="box">
      <div className="title primary">
        <h3>
          <strong>{period}</strong> 적금하면
          <br />
          <strong>{date}</strong> 뒤에 달성할 수 있어요
        </h3>
        <Arrow width="19px" onClick={hadleClick} />
      </div>
      <div className={hidden ? "text primary hidden" : "text primary"}>
        <div>
          <p>세이블에서 슬금슬금 규칙, {rule}으로 저축할 수 있습니다.</p>
        </div>
        <div>
          <strong>슬금슬금규칙(일/주/월)</strong>
          <p>매월 일정한 금액을 저축합니다</p>
        </div>
        {rule === "월급날 규칙" && (
          <div className="rule">
            <strong>{rule}</strong>
            <p>월급의 일정 비율을 저축합니다.</p>
          </div>
        )}
        {rule === "52주 규칙" && (
          <div className="rule">
            <strong>{rule}</strong>
            <p>지정한 기간동안, 지정한 금액만큼을 매주 증액하여 저축합니다.</p>
          </div>
        )}
      </div>
      <style jsx>{style}</style>
      <style jsx>{`
        .title {
          border-bottom: ${!hidden && "1px solid #fff"};
        }
      `}</style>
    </div>
  );
};

export default ResultFoldBox;