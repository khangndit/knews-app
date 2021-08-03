import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Logo from '../assets/img/logo.png';
import { Avatar } from 'antd';
import { AlertOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { SmileOutlined, BulbOutlined } from '@ant-design/icons';

const Header = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <div className="container">
        <Row>
          <Col xl={4} md={5} sm={7} span={6}>
            <a onClick={() => window.location.reload()}>
              <Avatar style={{ width: 90, height: 80 }} src={Logo} />
            </a>
          </Col>
          <Col xl={4} md={6} sm={7} span={14}>
            <Date>
              <span>Chủ nhật, 01/08/2021</span>
            </Date>
          </Col>
          <Col xl={4} md={4} sm={4} span={0}>
            <Weather>
              <AlertOutlined />
              <span> 28°C 23°F</span>
            </Weather>
          </Col>
          <Col xl={12} md={9} sm={6} span={4}>
            <DarkMode>
              <Switch
                className="dark-switch"
                checkedChildren={<SmileOutlined />}
                unCheckedChildren={
                  <BulbOutlined style={{ color: '#363537' }} />
                }
                defaultChecked
                onClick={toggleTheme}
              />
            </DarkMode>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

const Date = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;

const DarkMode = styled(Date)`
  justify-content: flex-end;
  width: 100%;
  float: right;
  .dark-switch {
    background: ${({ theme }) => theme.text};
  }

  @media (max-width: 576px) {
    margin-right: 20px;
  }
`;

const Weather = styled(Date)`
  span {
    margin-left: 5px;
  }
`;

const Wrapper = styled.header`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #d9d9d9;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  position: fixed;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.body};
`;

export default Header;
