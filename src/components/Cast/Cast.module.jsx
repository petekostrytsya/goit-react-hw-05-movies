import styled from '@emotion/styled';

export const StyledList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;
export const ListItem = styled.li`
  min-width: 182px;
  font-size: 14px;
  padding: 6px;
  max-width: min-content;
  background-color: #7a89df;
  border-radius: 10px;
  border: 1px solid #ffc700;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  img {
    max-width: 182px;
    border-radius: 8px;
  }
  span {
    color: #ffc700;
  }
`;