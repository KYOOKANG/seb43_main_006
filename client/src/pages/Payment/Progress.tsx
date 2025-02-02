import styled from "styled-components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function Progress() {
  return (
    <Progressn>
      <div className="progress">
        <div className="subco">결제 페이지</div>
        <ol>
          <li className="first">
            <span className="numbering">01</span>
            <span className="titlename1">장바구니</span>
            <span className="arrow">
              <MdOutlineKeyboardArrowRight />
            </span>
          </li>
          <li className="second">
            <span className="numbering">02</span>
            <span className="titlename2">주문작성 / 결제</span>
            <span className="arrow">
              <MdOutlineKeyboardArrowRight />
            </span>
          </li>
          <li className="third">
            <span className="numbering">03</span>
            <span className="titlename3">주문 완료</span>
          </li>
        </ol>
      </div>
    </Progressn>
  );
}

const Progressn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;

  width: 100%;
  ${({ theme }) => theme.common.flexCenterCol};

  & div.progress {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 50px;
    padding-left: 100px;
    width: 100%;
  }
  & div.subco {
    float: left;
    justify-content: flex-start;
    height: 30px;
    font-size: 32px;
  }
  & ol {
    display: flex;
    ${({ theme }) => theme.common.flexCenterRow};
    height: 50px;
    width: 40%;

    & li {
      height: 30px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    & li.first {
      width: 120px;
      ${({ theme }) =>
        useLocation().pathname === "/cart" &&
        `
      color: #a84448;
    `}
      ${({ theme }) => theme.common.flexCenter};
    }

    & li.second {
      width: 160px;
      ${({ theme }) =>
        useLocation().pathname === "/payment" &&
        `
      color: #a84448;
    `}
      ${({ theme }) => theme.common.flexCenter};
    }
    & li.third {
      ${({ theme }) =>
        useLocation().pathname === "/paymentconfirm" &&
        `
      color: #a84448;
    `}
      ${({ theme }) => theme.common.flexCenter};
    }
    & span {
      height: 30px;
      justify-content: flex-start;
      width: 150px;
    }

    & span.numbering {
      width: 30px;
      font-size: 22px;
      ${({ theme }) => theme.common.flexCenter};
    }

    & span.titlename1 {
      width: 60px;
      justify-content: center;
      ${({ theme }) => theme.common.flexCenter};
    }

    & span.titlename2 {
      width: 100px;
      justify-content: center;
      ${({ theme }) => theme.common.flexCenter};
    }

    & span.titlename3 {
      width: 60px;
      justify-content: center;
      ${({ theme }) => theme.common.flexCenter};
    }

    & span.arrow {
      width: 20px;
      ${({ theme }) => theme.common.flexCenter};
    }
  }

  /* 여기까지 */
`;
