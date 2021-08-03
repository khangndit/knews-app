import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import { ClockCircleOutlined } from '@ant-design/icons';
import LinkBlank from './LinkBlank';

const StoryMain = ({ data }) => {
  return (
    <Wrapper>
      <LinkBlank url={data?.href}>
        <BackgroundImage imgUrl={data?.imageUrl}>
          <CategoriesTag>
            <Categories name="THỜI SỰ" />
          </CategoriesTag>
          <TitleTag>
            <Title>{data?.title}</Title>
          </TitleTag>
          <MoreInfoTag>
            <ClockCircleOutlined style={{ fontSize: 12, color: '#fff' }} />
            <span>2 GIỜ TRƯỚC</span>
          </MoreInfoTag>
        </BackgroundImage>
      </LinkBlank>
    </Wrapper>
  );
};

const MoreInfoTag = styled.div`
  width: 100%;
  margin: 8px 0;
  span {
    color: #fff;
    font-size: 10px;
    margin-right: 5px;
  }
`;

const Title = styled.h1.attrs({
  className: 'text-max-3 hover-title',
})`
  color: #fff;
  font-weight: 550;
  line-height: 33px;
  cursor: pointer;
  margin-right: 20px;
  :hover {
    background: #fff;
    padding: 3px;
    border-radius: 5px;
  }
`;

const CategoriesTag = styled.div`
  width: 100%;
  height: 40px;
`;

const TitleTag = styled(CategoriesTag)`
  height: auto;
`;

const BackgroundImage = styled.div`
  height: 500px;
  padding-left: 20px;
  border-radius: 5px;
  cursor: pointer;

  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.2s;
  transition: transform 0.8s, filter 0.8s ease-in-out;
  transform: scale(0.99);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  :hover {
    transform: scale(1.01);
  }
`;

const Wrapper = styled.div`
  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export default StoryMain;
