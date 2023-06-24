import styled from '@emotion/styled';

export const StyledList = styled.ul`
  margin-top: 12px;
`;
export const ListItem = styled.li`
  font-size: 14px;
  padding: 6px;
  background-color: #7a89df;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    color: #ffc700;
  }
`;
export const ReviewsDescr = styled.p`
  color: #e4e0cd;
  margin-top: 6px;
`;