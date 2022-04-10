import * as Handlebars from 'handlebars';
import selectedTemplate from './chatSelected.tmpl';
import { Input } from '../../../../components/input';
import { Message } from '../../../../components/message';
import { checkAndCollectDataFromInput } from '../../../../utils/validation';
import sendIcon from '../../../../static/icons/send.svg';
import chatSettingsIcon from '../../../../static/icons/dots.svg';
import addFileIcon from '../../../../static/icons/staple.svg';
import readIcon from '../../../../static/icons/read.svg';
import imageIcon from '../../../../static/icons/image.svg';
import fileIcon from '../../../../static/icons/file.svg';
import locationIcon from '../../../../static/icons/location.svg';
import addIcon from '../../../../static/icons/add.svg';
import deleteIcon from '../../../../static/icons/delete.svg';
import './chatSelected.scss';

export function chatSelected() {
  const template = Handlebars.compile(selectedTemplate);

  const message = new Input(
    {
      label: 'Сообщение',
      inputClassName: 'input__message',
      name: 'message',
      type: 'text',
      dataType: 'message',
      inputContainerClassName: 'input__container-gray',
    },
    {
      blur: (event: Event) => {
        checkAndCollectDataFromInput(event);
      },
    }
  );

  const messages1 = new Message({
    myMessage: false,
    read: false,
    text: 'Погода сегодня хорошая, как в стихотворении «Весенняя гроза» Тютчева',
    time: '05:35',
    photo: 'https://picsum.photos/id/217/200',
  });

  const messages2 = new Message({
    myMessage: true,
    read: true,
    text: 'Не то слово! Стихотворение «Весенняя гроза» — восторженный монолог лирического героя. Это образец художественного описания природного явления. Для многих поэтов весна – самое счастливое время года. С ней связывают возрождение новых надежд, пробуждение творческих сил. В общем смысле гроза – опасное явление, связанное со страхом удара молнии. Но многие люди ждут первой весенней грозы, с которой связывают окончательную победу над зимой. Тютчев смог великолепно описать это долгожданное событие. Грозная природная стихия предстает перед читателем веселым и радостным явлением, несущим в себе обновление природы.',
    time: '05:45',
    readIcon,
  });

  const context = {
    avatarIcon: 'https://picsum.photos/id/237/200',
    chatDate: '21 марта',
    chatTitle: 'Петя работа',
    message: message.transformToString(),
    messages: [messages1.transformToString(), messages2.transformToString()],
    chatSettingsIcon,
    addFileIcon,
    sendIcon,
    addIcon,
    deleteIcon,
    imageIcon,
    fileIcon,
    locationIcon,
  };

  return template(context);
}
