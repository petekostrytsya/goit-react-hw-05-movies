import styled from '@emotion/styled';

export const InputSearch = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  padding: 15px 16px;

  color: yellow;

  background: #8a12fa;
  border-radius: 10px;
  border-style: none;

  
  :active,
  :focus,
  :hover {
    color: white;
    border-style: none;
    border-color: #8a12fa;
  }
`;

export const ButtonSearch = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  margin-left: 12px;
  padding: 15px 16px;

  color: yellow;

  background: #8a12fa;
  border-radius: 10px;

  :not(:disabled):active,
  :focus,
  :not(:disabled):hover {
    color: #3a3939;
  }
`;