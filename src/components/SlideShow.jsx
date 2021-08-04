import React, { lazy, Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import crawlerDataApi from '../shared/api/crawlerDataApi';
import Loading from '../common/Loading';
const SlideShowItem = lazy(() => import('../common/SlideShowItem'));

const SlideShow = () => {
  const [dataSlideShow, setDataSlideShow] = useState([]);

  useEffect(() => {
    const fetchDataSlideShow = async () => {
      const dataList = await crawlerDataApi.crawlerDataSlideShow();
      setDataSlideShow(dataList || []);
    };
    fetchDataSlideShow();
  }, []);

  return (
    <Wrapper>
      <Container>
        <div className="slide-container">
          {dataSlideShow.length === 0 ? (
            <Loading />
          ) : (
            <Slide>
              {dataSlideShow.map((el, idx) => {
                if (idx % 2 === 0) {
                  return (
                    <div className="each-slide" key={idx}>
                      <Suspense fallback={<Loading />}>
                        <SlideShowItem data={el} />
                        <SlideShowItem data={dataSlideShow[idx + 1]} />
                      </Suspense>
                    </div>
                  );
                }
              })}
            </Slide>
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div.attrs({
  className: 'container',
})``;

const Wrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  .each-slide {
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

export default SlideShow;
