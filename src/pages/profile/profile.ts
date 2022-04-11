import * as Handlebars from 'handlebars';
import profileTemplate from './profile.tmpl';
import { Button } from '../../components/button';
import { viewProfile } from './modules/viewProfile';
import { editProfile } from './modules/editProfile';
import { routes } from '../../utils/constants';
import avatarIcon from '../../static/icons/photo-placeholder.svg';
import returnIcon from '../../static/icons/return.svg';
import './profile.scss';

export function profilePage(route: string) {
  const template = Handlebars.compile(profileTemplate);

  const button = new Button({
    buttonText: 'Поменять',
    buttonType: 'button',
  });

  const content =
    route === routes.viewProfile ? viewProfile : editProfile(route);

  const context = {
    header: 'Иван',
    button: button.transformToString(),
    isViewMode: route === routes.viewProfile,
    avatarIcon,
    returnIcon,
    content,
  };

  return template(context);
}
