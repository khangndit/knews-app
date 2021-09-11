import { EyeOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';
import LinkBlank from './LinkBlank';
import MoreInfo from './MoreInfo';

const StoryBodyPart1 = ({ data }) => {
  return (
    <Wrapper>
      <LinkBlank url={data?.href}>
        <ImageTag>
          <Image src={data?.imageUrl} />
          <ImageDescription>
            <EyeOutlined /> Xem thêm...
          </ImageDescription>
        </ImageTag>
      </LinkBlank>
      <LinkBlank url={data?.href}>
        <TitleTag>
          <Title>{data?.title}</Title>
        </TitleTag>
      </LinkBlank>
      <DescriptionTag>
        <Description>{data?.description}</Description>
      </DescriptionTag>
      <MoreInfo />
    </Wrapper>
  );
};

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
  className: 'text-max-3',
})`
  line-height: 18px;
  margin-bottom: 2px;
`;

const DescriptionTag = styled.div`
  width: 100%;
  margin-top: 5px;
  padding: 2px;
`;

const Title = styled.h2.attrs({
  className: 'text-max-2 hover-title',
})`
  font-weight: 550;
  line-height: 25px;
  color: ${({ theme }) => theme.text};
`;

const TitleTag = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 2px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const ImageTag = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  :hover {
    cursor: pointer;
    ${ImageDescription} {
      visibility: visible;
      opacity: 1;
    }
    ${Image} {
      transition: 0.3s;
      filter: blur(0.7px);
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  border-radius: 5px;
  @media (max-width: 576px) {
    padding: 20px;
    ${ImageDescription} {
      left: 40%;
    }
  }
`;

export default StoryBodyPart1;
