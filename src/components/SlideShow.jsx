import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import SlideShowItem from '../common/SlideShowItem';
import crawlerDataApi from '../shared/api/crawlerDataApi';

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
          <Slide>
            {dataSlideShow.map((el, idx) => {
              if (idx % 2 === 0) {
                return (
                  <div className="each-slide" key={idx}>
                    <SlideShowItem data={el} />
                    <SlideShowItem data={dataSlideShow[idx + 1]} />
                  </div>
                );
              }
            })}
          </Slide>
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
