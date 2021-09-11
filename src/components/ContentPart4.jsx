import React, { lazy, Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import MoreBtn from '../common/MoreBtn';
// import StoryBodyPart2 from '../common/StoryBodyPart2';
import AdsDemo from '../assets/img/ads.png';
import crawlerDataApi from '../shared/api/crawlerDataApi';
import Loading from '../common/Loading';

const StoryBodyPart2 = lazy(() => import('../common/StoryBodyPart2'));

const ContentPart4 = () => {
  const [dataPart4, setdataPart4] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataPart4 = async () => {
      const dataList = await crawlerDataApi.crawlerDataPart4();
      setdataPart4(dataList || []);
    };
    fetchDataPart4();
  }, []);

  const fetchDataNextStep = async () => {
    setLoading(true);
    const dataListNextStep = await crawlerDataApi.crawlerDataPart4NextStep();
    const newData = [...dataPart4, ...(dataListNextStep || [])];
    setdataPart4(newData);
    setLoading(false);
  };

  return (
    <Wrapper>
      <Container>
        <TitlePartTag>
          <TitlePart>TIN YÊU THÍCH</TitlePart>
        </TitlePartTag>
        <div style={{ display: 'flex' }}>
          {dataPart4.length === 0 ? (
            <Loading />
          ) : (
            <ContentLeft>
              {dataPart4.map((el, idx) => {
                return (
                  <ContentItem key={idx}>
                    <Suspense fallback={<Loading />}>
                      <StoryBodyPart2 data={el} />
                    </Suspense>
                  </ContentItem>
                );
              })}
            </ContentLeft>
          )}
          <ContentRight>
            <Image src={AdsDemo} />
          </ContentRight>
        </div>
      </Container>
      <MoreBtnTag>
        <MoreBtn onClick={() => fetchDataNextStep()} isLoading={loading} />
      </MoreBtnTag>
    </Wrapper>
  );
};

const Image = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0;
  cursor: pointer;
`;

const ContentLeft = styled.div`
  width: 70%;
`;

const ContentRight = styled.div`
  width: 28%;
  margin-left: 20px;
`;

const MoreBtnTag = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: center;
`;

const ContentItem = styled.div`
  width: 100%;
  margin-top: 20px;
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
  @media (max-width: 1024px) {
    ${ContentRight} {
      display: none;
    }
    ${ContentLeft} {
      width: 100%;
    }
  }
`;

export default ContentPart4;
