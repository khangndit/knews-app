import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const Categories = ({ name }) => {
  return (
    <Btn type="primary" ghost danger>
      {name}
    </Btn>
  );
};

const Btn = styled(Button)`
  border: 1px solid #daf400;
  font-size: 12px;
  height: 25px;
  font-weight: 600;
  :hover {
    font-size: 11px;
  }
`;

export default Categories;
