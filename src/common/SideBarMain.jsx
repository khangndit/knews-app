import React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import { Avatar } from 'antd';
import LinkBlank from './LinkBlank';

const SideBarMain = ({ data, isBorder, categories }) => {
  return (
    <Wrapper border={isBorder}>
      <CategoriesTag>
        <Categories name={categories} />
      </CategoriesTag>
      <TitleTag>
        <LinkBlank url={data?.href}>
          <Title>{data?.title}</Title>
        </LinkBlank>
      </TitleTag>
      <DescriptionTag>
        <LinkBlank url={data?.href}>
          <Description>{data?.description}</Description>
        </LinkBlank>
      </DescriptionTag>
      <ImageTag>
        <LinkBlank url={data?.href}>
          <Avatar size={130} src={data?.imageUrl} />
        </LinkBlank>
      </ImageTag>
    </Wrapper>
  );
};

const ImageTag = styled.div`
  width: 30%;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;

  img {
    transition: transform 0.2s;
    transition: transform 0.8s, filter 0.8s ease-in-out;
    transform: scale(0.99);
  }
  :hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const Description = styled.p.attrs({
  className: 'text-max-3',
})`
  line-height: 18px;
`;

const Title = styled.h3.attrs({
  className: 'text-max-2 hover-title',
})`
  font-weight: 550;
  line-height: 22px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const CategoriesTag = styled.div`
  width: 100%;
`;

const TitleTag = styled.div`
  width: 65%;
  height: 50px;
  margin-top: 5px;
`;

const DescriptionTag = styled.div`
  width: 70%;
  height: 76px;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  border-bottom: ${(props) => (props.border ? '1px solid #d9d9d9' : 'none')};
  margin-top: 5px;

  @media (max-width: 1024px) {
    ${ImageTag} {
      top: 20%;
      right: -3%;
      span {
        width: 100px !important;
        height: 100px !important;
      }
    }
  }

  @media (max-width: 768px) {
    ${ImageTag} {
      top: 0;
      right: 0;
      span {
        width: 130px !important;
        height: 130px !important;
      }
    }
  }

  @media (max-width: 576px) {
    ${ImageTag} {
      top: 20%;
      right: -3%;
      span {
        width: 100px !important;
        height: 100px !important;
      }
    }
  }
`;

export default SideBarMain;
