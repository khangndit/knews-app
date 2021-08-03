import React from 'react';
import styled from 'styled-components';
import LinkBlank from './LinkBlank';
import MoreInfo from './MoreInfo';

const StoryBodyPart3 = ({ data }) => {
  return (
    <Wrapper>
      <LinkBlank url={data?.href}>
        <BackgroundImage imgUrl={data.imageUrl}>
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

const BackgroundImage = styled.div`
  height: 380px;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;

  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.2s;
  transition: transform 0.8s, filter 0.8s ease-in-out;
  transform: scale(1);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  :hover {
    transform: scale(0.98);
  }
`;

const ImageDescription = styled.p`
  position: absolute;
  top: 45%;
  left: 35%;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 2px;
  font-size: 12px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
`;

const Description = styled.p.attrs({
  className: 'text-max-3 hover-title',
})`
  line-height: 18px;
  margin-bottom: 2px;
  color: #fff;
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

const Title = styled.h2.attrs({
  className: 'text-max-2 hover-title',
})`
  color: #fff;
  font-weight: 550;
  line-height: 25px;
  cursor: pointer;
  :hover {
    background: #fff;
    padding: 3px;
    border-radius: 5px;
    transition: 0.3s;
  }
`;

const TitleTag = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  span {
    color: #fff;
  }
  @media (max-width: 576px) {
    padding: 20px;
    ${ImageDescription} {
      left: 40%;
    }
    ${BackgroundImage} {
      height: 280px;
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    ${BackgroundImage} {
      height: 300px;
    }
  }
`;

export default StoryBodyPart3;
