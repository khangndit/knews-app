import React from 'react';
import styled from 'styled-components';

const LinkBlank = (props) => {
  return (
    <LinkNew href={props.url} target="_blank">
      {props.children}
    </LinkNew>
  );
};

const LinkNew = styled.a`
  color: ${({ theme }) => theme.text};
  :hover {
    color: ${({ theme }) => theme.text};
  }
`;

export default LinkBlank;
