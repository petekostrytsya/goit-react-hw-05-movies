import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const NotFoundPageTitle = styled.h1`
  font-size: 72px;
  color: #e4e0cd;
  margin-top: -200px;
`;

export const NotFoundPageText = styled.p`
  font-size: 36px;
  margin-top: 24px;
  color: white;
`;

export const NotFoundPageLink = styled(Link)`
  font-size: 18px;
  color: yellow;
  margin-top: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

