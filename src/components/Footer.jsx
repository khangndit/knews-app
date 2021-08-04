import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'antd';
import { Avatar } from 'antd';
import Logo from '../assets/img/logo.png';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row gutter={[30, 30]}>
          <Col span={24} style={{ textAlign: 'center' }}>
            <a>
              <Avatar style={{ width: 120, height: 100 }} src={Logo} />
            </a>
          </Col>
          <Col xl={8} md={8} sm={12} span={24}>
            <ItemTag>
              <p>Báo tiếng Việt nhiều người xem nhất</p>
              <p>Thuộc NGUYỄN DUY KHANG</p>
              <p>K-NEWS</p>
            </ItemTag>
          </Col>
          <Col xl={8} md={8} sm={12} span={24}>
            <ItemTag>
              <p>Tổng biên tập: NGUYỄN DUY KHANG</p>
              <p>Địa chỉ: Tân Bình, Hồ Chí Minh</p>
              <p>Điện thoại: 0 388 620 664</p>
            </ItemTag>
          </Col>
          <Col xl={8} md={8} sm={24} span={24}>
            <ItemTag>
              <p>Liên hệ: </p>
              <p>Email: khangndit@gmail.com</p>
              <p>
                Facebook:&nbsp;
                <a href="https://www.facebook.com/khangndit">
                  https://www.facebook.com/khangndit
                </a>
              </p>
            </ItemTag>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const ItemTag = styled.div`
  p {
    margin: 2px 0;
  }
  @media (max-width: 576px) {
    text-align: center;
  }
`;

const Container = styled.div.attrs({
  className: 'container',
})`
  margin-top: 20px;
`;

const Wrapper = styled.footer`
  margin-top: 30px;
  width: 100%;
  height: 300px;
  border-top: 1px solid #d9d9d9;
  padding: 20px;
`;

export default Footer;
