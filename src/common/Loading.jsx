import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div _ngcontent-rrf-c45="" className="botton-section">
        <div _ngcontent-rrf-c45="" className="box">
          <div _ngcontent-rrf-c45="" className="box-strap"></div>
        </div>
        <div _ngcontent-rrf-c45="" className="box">
          <div _ngcontent-rrf-c45="" className="box-strap"></div>
        </div>
        <div _ngcontent-rrf-c45="" className="box">
          <div _ngcontent-rrf-c45="" className="box-strap"></div>
        </div>
        <div _ngcontent-rrf-c45="" className="box">
          <div _ngcontent-rrf-c45="" className="box-strap"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  align-items: center;
  .botton-section[_ngcontent-rrf-c45] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 250px;
    overflow-x: hidden;
  }
  .botton-section[_ngcontent-rrf-c45] .box[_ngcontent-rrf-c45] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 275px;
    background: #eee;
    border-radius: 4px;
    margin: 0 15px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .botton-section[_ngcontent-rrf-c45] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 250px;
    overflow-x: hidden;
  }
  .botton-section[_ngcontent-rrf-c45]
    .box[_ngcontent-rrf-c45]
    .box-strap[_ngcontent-rrf-c45] {
    width: 140px;
    max-width: 90%;
    height: 24px;
    background: 0 0/110% #e0e0e0;
    border-radius: 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#efeeee),
      to(#fff)
    );
    background-image: linear-gradient(to right, #efeeee, #fff);
    -webkit-animation: 2s ease-out infinite shine-layer-d-sm-strap;
    animation: 2s ease-out infinite shine-layer-d-sm-strap;
  }

  @keyframes shine-layer-d-sm-strap {
    0% {
      background-position: -150px;
    }

    100% {
      background-position: 0;
    }
  }
`;

export default Loading;
