import React from 'react';
import styled from 'styled-components';
import LinkBlank from './LinkBlank';
import MoreInfo from './MoreInfo';

const StoryMain = ({ data }) => {
  return (
    <Wrapper>
      <LinkBlank url={data?.href}>
        <BackgroundImage imgUrl={data?.imageUrl}>
          <TitleTag>
            <Title>{data?.title}</Title>
          </TitleTag>
          <DescriptionTag>
            <Description>{data?.description}</Description>
          </DescriptionTag>
          <MoreInfo />
        </BackgroundImage>
      </LinkBlank>
    </Wrapper>
  );
};

const Description = styled.p.attrs({
  className: 'text-max-3 hover-title',
})`
  line-height: 18px;
  margin: 5px 20px 8px 0;
  font-size: 15px;
  color: #fff;
  font-weight: 500;
  :hover {
    background: #fff;
    padding: 3px;
    border-radius: 5px;
    transition: 0.3s;
  }
`;

const DescriptionTag = styled.div`
  width: 100%;
  margin-top: 5px;
`;

const Title = styled.h1.attrs({
  className: 'text-max-3 hover-title',
})`
  color: #fff;
  font-weight: 550;
  line-height: 30px;
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
  padding-bottom: 15px;

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

  span {
    color: #fff;
  }
`;

const Wrapper = styled.div`
  @media (max-width: 576px) {
    padding: 20px;
  }
`;

export default StoryMain;
