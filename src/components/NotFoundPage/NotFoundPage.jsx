import { NotFoundPageContainer, NotFoundPageTitle, NotFoundPageText, NotFoundPageLink } from './NotFoundPage.module';

const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <NotFoundPageTitle>404 - Page Not Found</NotFoundPageTitle>
      <NotFoundPageText>This page does not exist</NotFoundPageText>
      <NotFoundPageLink to="/">Go back to the homepage</NotFoundPageLink>
    </NotFoundPageContainer>
  );
};

export default NotFoundPage;