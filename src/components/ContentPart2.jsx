import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MoreBtn from '../common/MoreBtn';
import StoryBodyPart3 from '../common/StoryBodyPart3';
import crawlerDataApi from '../shared/api/crawlerDataApi';

const ContentPart2 = () => {
  const [dataPart2, setdataPart2] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataPart2 = async () => {
      const dataList = await crawlerDataApi.crawlerDataPart2();
      setdataPart2(dataList || []);
    };
    fetchDataPart2();
  }, []);

  const fetchDataNextStep = async () => {
    setLoading(true);
    const dataListNextStep = await crawlerDataApi.crawlerDataPart2NextStep();
    const newData = [...dataPart2, ...(dataListNextStep || [])];
    setdataPart2(newData);
    setLoading(false);
  };

  return (
    <Wrapper>
      <Container>
        <TitlePartTag>
          <TitlePart>MỚI NHẤT</TitlePart>
        </TitlePartTag>
        <Row gutter={[28, 28]}>
          {dataPart2.map((el, idx) => {
            return (
              <Col key={idx} xl={12} md={12} sm={24}>
                <StoryBodyPart3 data={el} />
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

export default ContentPart2;
