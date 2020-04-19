import { FC } from 'react';
import styled from 'styled-components';
import * as React from 'react';

const MainPageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainPage: FC = () => {
  return (
    <MainPageWrapper>
      This page do not need login.
    </MainPageWrapper>
  );
};

export default MainPage;
