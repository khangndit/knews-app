import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Logo from '../assets/img/logo.png';
import { Avatar } from 'antd';
import { AlertOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { SmileOutlined, BulbOutlined } from '@ant-design/icons';
import moment from 'moment';

const Header = ({ toggleTheme }) => {
  const [date, setDate] = useState('');
  const [temperature, setTemperature] = useState('');

  useEffect(() => {
    const api_key = 'f0283990e0581e2d7e1b7c41996132e9';
    const city = 'ho chi minh';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTemperature(Math.round(data.main.temp));
      });
  }, []);

  useEffect(() => {
    const day = new window.Date().getDay();
    let result = moment(new window.Date()).format('DD/MM/YYYY');
    switch (day) {
      case 0:
        result = 'Chủ nhật, ' + result;
        break;
      case 1:
        result = 'Thứ 2, ' + result;
        break;
      case 2:
        result = 'Thứ 3, ' + result;
        break;
      case 3:
        result = 'Thứ 4, ' + result;
        break;
      case 4:
        result = 'Thứ 5, ' + result;
        break;
      case 5:
        result = 'Thứ 6, ' + result;
        break;
      case 6:
        result = 'Thứ 7, ' + result;
        break;
      default:
        break;
    }
    setDate(result);
  }, []);

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
              <span>{date}</span>
            </Date>
          </Col>
          <Col xl={4} md={4} sm={4} span={0}>
            <Weather>
              <AlertOutlined />
              <span>Hồ Chí Minh: {temperature}°C</span>
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
