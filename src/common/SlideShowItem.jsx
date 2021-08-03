import React from 'react';
import styled from 'styled-components';
import LinkBlank from './LinkBlank';

const SlideShowItem = ({ data }) => {
  return (
    <BackgroundImage src={data?.imageUrl}>
      <LinkBlank url={data?.href}>
        <Title>{data?.title}</Title>
        <Description></Description>
      </LinkBlank>
    </BackgroundImage>
  );
};

const Description = styled.p.attrs({
  className: 'text-max-3 hover-title',
})`
  margin: 10px 0;
  color: #fff;
  max-width: 500px;
  text-align: center;
  line-height: 20px;
  :hover {
    background: #fff;
    padding: 3px;
    border-radius: 5px;
  }
`;

const Title = styled.h1.attrs({
  className: 'text-max-2 hover-title',
})`
  color: #fff;
  font-weight: 550;
  line-height: 33px;
  cursor: pointer;
  max-width: 700px;
  text-align: center;
  :hover {
    background: #fff;
    padding: 3px;
    border-radius: 5px;
  }
`;

const BackgroundImage = styled.div`
  height: 300px;
  border-radius: 5px;
  cursor: pointer;

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.2s;
  transition: transform 0.8s, filter 0.8s ease-in-out;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 49%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export default SlideShowItem;
