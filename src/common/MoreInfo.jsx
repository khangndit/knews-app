import { AlignLeftOutlined, IssuesCloseOutlined } from '@ant-design/icons';
import React from 'react';
import styled from 'styled-components';

const MoreInfo = () => {
  const categoriesArr = [
    'THỜI SỰ',
    'GÓC NHÌN',
    'THẾ GIỚI',
    'KINH DOANH',
    'KHOA HỌC',
    'GIẢI TRÍ',
    'THỂ THAO',
    'CÔNG NGHỆ',
    'ĐỜI SỐNG',
    'TÂM SỰ',
    'DU LỊCH',
    'SỨC KHOẺ',
  ];
  const hourArr = Math.floor(Math.random() * 12);

  return (
    <Wrapper>
      <div>
        <AlignLeftOutlined />
        <span>{categoriesArr[hourArr]}</span>
      </div>
      <div>
        <IssuesCloseOutlined />
        <span>{hourArr} GIỜ TRƯỚC</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  div {
    width: 50%;
    span {
      font-size: 10px;
      margin-right: 5px;
    }
    :first-child {
      width: auto;
      margin-right: 10px;
    }
  }
`;

export default MoreInfo;
