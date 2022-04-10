import * as Handlebars from 'handlebars';
import chatPageTemplate from './chat.tmpl';
import { notSelectedChat } from './modules/notSelectedChat';
import { chatSelected } from './modules/chatSelected';
import { checkAndCollectDataFromInput } from '../../utils';
import { routes } from '../../utils';
import { Input } from '../../components/input';
import './chat.scss';

export function chatPage(route: string) {
  const template = Handlebars.compile(chatPageTemplate);
  const currentChatArea =
    route === routes.chatSelected ? chatSelected : notSelectedChat;

  const searchInput = new Input(
    {
      label: '&#x1F50E;&#xFE0E; Поиск',
      inputClassName: 'input__search',
      name: 'search',
      type: 'text',
      inputContainerClassName: 'input__container-gray',
    },
    {
      blur: (event: Event) => {
        checkAndCollectDataFromInput(event);
      },
    }
  );

  const context = {
    currentChatArea,
    profileTitle: 'Профиль >',
    emptyChatTitle: 'Выберите чат, чтобы отправить сообщение',
    searchInput: searchInput.transformToString(),
    contacts: [
      {
        name: 'Петя работа',
        message:
          'Вы: Не то слово! Стихотворение «Весенняя гроза» — восторженный монолог лирического героя.',
        id: '1952',
        time: '05:45',
        avatarIcon: 'https://picsum.photos/id/237/200',
      },
      {
        name: 'Алекс доставка',
        message: 'Я возле подъезда',
        id: '1953',
        time: '03:45',
        counter: 12,
        avatarIcon: 'https://picsum.photos/id/125/200',
      },
      {
        name: 'Кирилл повар',
        message: 'Что будет на ужин?',
        id: '1954',
        time: '01:44',
        counter: 6,
        avatarIcon: 'https://picsum.photos/id/212/200',
      },
    ],
  };

  return template(context);
}
