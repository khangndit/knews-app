import React from 'react';
import styled from 'styled-components';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';

const Loading = () => {
  return (
    <Wrapper>
      <ShimmerSimpleGallery
        card
        imageHeight={200}
        caption
        col={4}
        row={3}
        gap={30}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  align-items: center;
  }
`;

export default Loading;
