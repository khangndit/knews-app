import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MoreBtn from '../common/MoreBtn';
import StoryBodyPart1 from '../common/StoryBodyPart1';
import crawlerDataApi from '../shared/api/crawlerDataApi';

const ContentPart3 = () => {
  const [dataPart3, setdataPart3] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataPart3 = async () => {
      const dataList = await crawlerDataApi.crawlerDataPart3();
      setdataPart3(dataList || []);
    };
    fetchDataPart3();
  }, []);

  const fetchDataNextStep = async () => {
    setLoading(true);
    const dataListNextStep = await crawlerDataApi.crawlerDataPart3NextStep();
    const newData = [...dataPart3, ...(dataListNextStep || [])];
    setdataPart3(newData);
    setLoading(false);
  };

  return (
    <Wrapper>
      <Container>
        <TitlePartTag>
          <TitlePart>TIN MỚI</TitlePart>
        </TitlePartTag>
        <Row gutter={[30, 30]}>
          {dataPart3.map((el, idx) => {
            return (
              <Col key={idx} xl={6} md={8} sm={12} span={24}>
                <StoryBodyPart1 data={el} />
              </Col>
            );
          })}
        </Row>
        <MoreBtnTag>
          <MoreBtn onClick={() => fetchDataNextStep()} isLoading={loading} />
        </MoreBtnTag>
      </Container>
    </Wrapper>
  );
};

const MoreBtnTag = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
`;

const TitlePartTag = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
`;

const TitlePart = styled.h1`
  color: #ff4d4f;
  font-family: 'Baloo Bhai';
`;

const Container = styled.div.attrs({
  className: 'container',
})``;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  @media (max-width: 576px) {
    ${TitlePart} {
      margin-left: 20px;
    }
  }
`;

export default ContentPart3;
