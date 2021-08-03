import axiosApi from './axiosApi';

class CrawlerDataApi {
  crawlerDataPart1 = () => {
    const url = '/part1';
    return axiosApi.get(url, {});
  };
  crawlerDataPart1SideBar = () => {
    const url = '/part1SideBar';
    return axiosApi.get(url, {});
  };

  crawlerDataPart2 = () => {
    const url = '/part2';
    return axiosApi.get(url, {});
  };
  crawlerDataPart2NextStep = () => {
    const url = '/part2NextStep';
    return axiosApi.get(url, {});
  };

  crawlerDataPart3 = () => {
    const url = '/part3';
    return axiosApi.get(url, {});
  };
  crawlerDataPart3NextStep = () => {
    const url = '/part3NextStep';
    return axiosApi.get(url, {});
  };

  crawlerDataPart4 = () => {
    const url = '/part4';
    return axiosApi.get(url, {});
  };
  crawlerDataPart4NextStep = () => {
    const url = '/part4NextStep';
    return axiosApi.get(url, {});
  };

  crawlerDataSlideShow = () => {
    const url = '/slideShow';
    return axiosApi.get(url, {});
  };
}

const crawlerDataApi = new CrawlerDataApi();
export default crawlerDataApi;
