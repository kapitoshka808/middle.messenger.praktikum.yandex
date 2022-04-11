import * as Handlebars from 'handlebars';
import loginTemplate from './login.tmpl';
import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Form } from '../../../../components/form';
import { validation, checkAndCollectData } from '../../../../utils';
import './login.scss';

export function login() {
  const template = Handlebars.compile(loginTemplate);

  const loginInput = new Input(
    {
      name: 'login',
      label: 'Логин',
      type: 'text',
      required: true,
      dataType: 'login',
      errorMessage: 'Неверный логин',
    },
    {
      blur: (event: Event) => {
        validation({ event });
      },
    }
  );

  const passwordInput = new Input(
    {
      name: 'password',
      label: 'Пароль',
      type: 'password',
      required: true,
      dataType: 'password',
      errorMessage: 'Неверный пароль',
    },
    {
      blur: (event: Event) => {
        validation({ event });
      },
    }
  );

  const button = new Button({
    buttonText: 'Авторизоваться',
    buttonType: 'submit',
  });

  const context = {
    inputs: [loginInput.transformToString(), passwordInput.transformToString()],
    button: button.transformToString(),
    linkTitle: 'Нет аккаунта?',
  };

  const form = new Form(
    {
      children: {
        inputs: [loginInput, passwordInput],
        button,
      },
      content: template(context),
    },
    {
      submit: (event: Event) => {
        checkAndCollectData(event, '/notSelectedChat');
      },
    }
  );

  return form.transformToString();
}
