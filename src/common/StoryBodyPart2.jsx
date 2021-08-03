import React from 'react';
import styled from 'styled-components';
import LinkBlank from './LinkBlank';
import MoreInfo from './MoreInfo';

const StoryBodyPart2 = ({ data }) => {
  return (
    <Wrapprer>
      <ImageTag>
        <LinkBlank url={data.href}>
          <Image src={data?.imageUrl} />
        </LinkBlank>
      </ImageTag>
      <ContentTag>
        <div>
          <LinkBlank url={data.href}>
            <Title>{data.title}</Title>
          </LinkBlank>
        </div>
        <div>
          <Description>{data.description}</Description>
        </div>
        <MoreInfo />
      </ContentTag>
    </Wrapprer>
  );
};

const Description = styled.p.attrs({
  className: 'text-max-3',
})`
  margin: 10px 0;
  line-height: 18px;
`;

const Title = styled.h2.attrs({
  className: 'text-max-3 hover-title',
})`
  font-weight: 550;
  line-height: 27px;
  color: ${({ theme }) => theme.text};
`;

const ContentTag = styled.div`
  width: 70%;
  padding-left: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 88%;
  border-radius: 1px;
  cursor: pointer;
`;

const ImageTag = styled.div`
  width: 30%;
`;

const Wrapprer = styled.div`
  display: flex;
  height: 200px;
  @media (max-width: 576px) {
    padding: 20px;
    ${ImageTag} {
      display: none;
    }
    ${ContentTag} {
      width: 100%;
      padding: 0;
    }
  }
`;

export default StoryBodyPart2;
