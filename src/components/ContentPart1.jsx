import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SideBarMain from '../common/SideBarMain';
import StoryMain from '../common/StoryMain';
import crawlerDataApi from '../shared/api/crawlerDataApi';

const ContentPart1 = () => {
  const [dataPart1, setDataPart1] = useState([]);
  const [dataPart1SideBar, setDataPart1SideBar] = useState([]);

  const isBorderArr = [true, true, false];
  const isCategoriesArr = [
    'Y tế & Sức khoẻ',
    'Chính trị & chính sách',
    'Covid-19',
  ];

  useEffect(() => {
    const fetchDataPart1 = async () => {
      const dataList = await crawlerDataApi.crawlerDataPart1();
      setDataPart1(dataList || []);
    };
    const fetchDataPart2 = async () => {
      const dataListSideBar = await crawlerDataApi.crawlerDataPart1SideBar();
      setDataPart1SideBar(dataListSideBar || []);
    };
    fetchDataPart1();
    fetchDataPart2();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xl={14} md={14} sm={24}>
            <TopStory>
              <StoryMain data={dataPart1[0]} />
            </TopStory>
          </Col>
          <Col xl={10} md={10} sm={24}>
            <SideBarStory>
              {dataPart1SideBar.map((el, idx) => {
                return (
                  <SideBarItem key={idx}>
                    <SideBarMain
                      data={el}
                      isBorder={isBorderArr[idx]}
                      categories={isCategoriesArr[idx]}
                    />
                  </SideBarItem>
                );
              })}
            </SideBarStory>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const SideBarItem = styled.div`
  width: 100%;
  height: 172px;
`;

const SideBarStory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

const TopStory = styled.div`
  width: 100%;
  height: 500px;
`;

const Wrapper = styled.div`
  margin-top: 110px;
  width: 100%;

  @media (max-width: 768px) {
    ${SideBarStory} {
      margin-top: 30px;
      padding: 0;
    }
  }

  @media (max-width: 576px) {
    ${SideBarStory} {
      padding-left: 20px;
      margin-top: 45px;
    }
  }
`;

const Container = styled.div.attrs({
  className: 'container',
})``;

export default ContentPart1;
