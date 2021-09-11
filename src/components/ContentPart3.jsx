import { Col, Row } from 'antd';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import Loading from '../common/Loading';
import MoreBtn from '../common/MoreBtn';
import crawlerDataApi from '../shared/api/crawlerDataApi';
const StoryBodyPart1 = lazy(() => import('../common/StoryBodyPart1'));

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
        {dataPart3.length === 0 ? (
          <Loading />
        ) : (
          <Row gutter={[30, 30]}>
            {dataPart3.map((el, idx) => {
              return (
                <Col key={idx} xl={6} md={8} sm={12} span={24}>
                  <Suspense fallback={<Loading />}>
                    <StoryBodyPart1 data={el} />
                  </Suspense>
                </Col>
              );
            })}
          </Row>
        )}

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
  font-weight: 600;
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
