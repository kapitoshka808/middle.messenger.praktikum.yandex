import { homePage } from './pages/home';
import { errorPage } from './pages/errors';
import { chatPage } from './pages/chat';
import { profilePage } from './pages/profile';
import {
  editProfilePage,
  errorPageCodes,
  errorPageSchema,
  routes,
} from './utils';
import './utils/helpers';
import './static/styles/base/main.scss';
import './static/styles/feedback/modal.scss';
import './static/styles/feedback/popover.scss';

const app: HTMLElement | null = document.getElementById('app');

const getErrorScheme = (code: string) => ({
  code,
  title: errorPageSchema[code].title,
  linkTitle: errorPageSchema[code].linkTitle,
});

const content = {
  login: homePage(routes.login),
  registration: homePage(routes.registration),
  notSelectedChat: chatPage(routes.notSelectedChat),
  chatSelected: chatPage(routes.chatSelected),
  viewProfile: profilePage(routes.viewProfile),
  editProfileData: profilePage(editProfilePage.editProfileData),
  editProfilePassword: profilePage(editProfilePage.editProfilePassword),
  internalServerError: errorPage(
    getErrorScheme(errorPageCodes.internalServerError)
  ),
  notFound: errorPage(getErrorScheme(errorPageCodes.notFound)),
  forbidden: errorPage(getErrorScheme(errorPageCodes.forbidden)),
  serviceUnavailable: errorPage(
    getErrorScheme(errorPageCodes.serviceUnavailable)
  ),
};

if (app) {
  switch (window.location.pathname) {
    case '/':
    case `/${routes.login}`:
      app.innerHTML = content.login;
      break;
    case `/${routes.registration}`:
      app.innerHTML = content.registration;
      break;
    case `/${routes.notSelectedChat}`:
      app.innerHTML = content.notSelectedChat;
      break;
    case `/${routes.chatSelected}`:
      app.innerHTML = content.chatSelected;
      break;
    case `/${routes.viewProfile}`:
      app.innerHTML = content.viewProfile;
      break;
    case `/${routes.editProfileData}`:
      app.innerHTML = content.editProfileData;
      break;
    case `/${routes.editProfilePassword}`:
      app.innerHTML = content.editProfilePassword;
      break;
    case `/${routes.serviceUnavailable}`:
      app.innerHTML = content.serviceUnavailable;
      break;
    case `/${routes.forbidden}`:
      app.innerHTML = content.forbidden;
      break;
    case `/${routes.internalServerError}`:
      app.innerHTML = content.internalServerError;
      break;
    case `/${routes.notFound}`:
    default:
      app.innerHTML = content.notFound;
      break;
  }
}
