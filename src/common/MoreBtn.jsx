import React from 'react';
import { Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const MoreBtn = (props) => {
  return (
    <Button
      type="primary"
      shape="round"
      danger
      loading={props.isLoading}
      icon={<EyeOutlined />}
      onClick={() => props.onClick()}
    >
      Xem thêm ...
    </Button>
  );
};

export default MoreBtn;
