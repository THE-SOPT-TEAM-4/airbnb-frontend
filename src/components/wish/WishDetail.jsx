import { icFillHeartBtn } from 'assets';
import styled from 'styled-components';

function WishDetail({ detail }) {
  return (
    <StyledWishDetail>
      {detail.map(({ id, image, title, price }) => (
        <li key={id}>
          <StyledDetailCard>
            <div>
              <img src={image} />
              <img src={icFillHeartBtn} />
            </div>
            <span>{title}</span>
            <div>
              <span>₩{price.toLocaleString()}</span>
              <span> / </span>
              <span> 박</span>
            </div>
          </StyledDetailCard>
        </li>
      ))}
    </StyledWishDetail>
  );
}

export default WishDetail;

const StyledWishDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 0 2.2rem;
  width: 100%;
  li {
    list-style: none;
  }
`;

const StyledDetailCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  div:first-child {
      position: relative;
  }
  div > img:first-child {
    width: 33.1rem;
    height: 22rem;
    border-radius: 1.2rem;
    object-fit: cover;
  }

  div > img:last-child {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
  }

  & > span {
    font-size: 1.4rem;
    line-height: 1.823rem;
    font-weight: 400;
    font-family: 'AirbnbCereal_W_Bk';
    padding-top: 1.6rem;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    padding-top: 0.7rem;
    span:first-child {
      font-weight: 600;
      font-size: 1.6rem;
      line-height: 1.92rem;
    }

    span:nth-child(2),
    span:last-child {
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.44rem;
    }

    span:nth-child(2) {
      padding-left: 0.7rem;
    }

    span:last-child {
      padding-left: 0.4rem;
    }
  }
`;
