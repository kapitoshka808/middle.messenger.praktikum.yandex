import * as Handlebars from 'handlebars';
import editProfileTemplate from './editProfile.tmpl';
import { Input } from '../../../../components/input';
import { Button } from '../../../../components/button';
import { Form } from '../../../../components/form';
import { checkAndCollectData, validation } from '../../../../utils';
import { Dictionary } from '../../../../core/block';
import './editProfile.scss';

export function editProfile(profileType: string) {
  const template = Handlebars.compile(editProfileTemplate);

  const profileInputs: Dictionary = {
    passwordInputs: [
      new Input(
        {
          name: 'password',
          label: 'Старый пароль',
          type: 'password',
          required: true,
          errorMessage: 'Неверный пароль',
          dataType: 'password',
          isProfileInput: true,
        },
        {
          blur: (event: Event) => {
            validation({ event });
          },
        }
      ),
      new Input(
        {
          name: 'secondPassword',
          label: 'Новый пароль',
          type: 'password',
          required: true,
          errorMessage:
            'Пароль должен быть от 8 до 40 символов, обязательно хотя бы одна заглавная буква и одна цифра',
          dataType: 'password',
          isProfileInput: true,
        },
        {
          blur: (event: Event) => {
            validation({ event });
          },
        }
      ),
      new Input(
        {
          name: 'secondPassword',
          label: 'Повторите новый пароль',
          type: 'password',
          required: true,
          errorMessage: 'Введенные пароли не совпадают',
          dataType: 'password',
          isProfileInput: true,
        },
        {
          blur: (event: Event) => {
            validation({ event });
          },
        }
      ),
    ],
    profileDataInputs: [
      new Input(
        {
          value: 'pochta@yandex.ru',
          name: 'email',
          label: 'Почта',
          type: 'text',
          required: true,
          disabled: false,
          errorMessage:
            'Почта должна быть написана на латинице, допускаются цифры и спецсимволы',
          dataType: 'email',
          isProfileInput: true,
        },
        {
          blur: (event: Event) => {
            validation({ event });
          },
        }
      ),
      new Input(
        {
          value: 'ivanivanov',
          name: 'login',
          label: 'Логин',
          type: 'text',
          required: true,
          disabled: false,
          errorMessage:
            'Логин должен быть от 3 до 20 символов, написан латиницей, допускаются цифры, дефис и нижнее подчёркивание.',
          dataType: 'login',
          isProfileInput: true,
        },
        {
          blur: (event: Event) => {
            validation({ event });
          },
        }
      ),
      new Input(
        {
          value: 'Иван',
          name: 'name',
          label: 'Имя',
          type: 'text',
          required: false,
          disabled: false,
          errorMessage:
            'Имя должно быть написано на латинице или кириллице, первая буква заглавная, без цифр и спецсимволов',
          dataType: 'name',
          isProfileInput: true,
        },
        {
          blur: (event: Event) => {
            validation({ event });
          },
        }
      ),
      new Input(
        {
          value: 'Иванов',
          name: 'lastName',
          label: 'Фамилия',
          type: 'text',
          required: false,
          disabled: false,
          errorMessage:
            'Фамилия должна быть написана на латинице или кириллице, первая буква заглавная, без цифр и спецсимволов',
          dataType: 'name',
          isProfileInput: true,
        },
        {
          blur: (event: Event) => {
            validation({ event });
          },
        }
      ),
      new Input(
        {
          value: 'Иван',
          name: 'nickname',
          label: 'Имя в чате',
          type: 'text',
          required: false,
          disabled: false,
          errorMessage:
            'Ник должен быть от 3 до 20 символов, написан латиницей, допускаются цифры, дефис и нижнее подчёркивание.',
          dataType: 'nickname',
          isProfileInput: true,
        },
        {
          blur: (event: Event) => {
            validation({ event });
          },
        }
      ),
      new Input(
        {
          value: '+7(909)9673030',
          name: 'phone',
          label: 'Телефон',
          type: 'text',
          required: false,
          disabled: false,
          errorMessage:
            'Телефон должен быть от 10 до 15 символов, состоять из цифр, может начинается с плюса.',
          dataType: 'phone',
          isProfileInput: true,
        },
        {
          blur: (event: Event) => {
            validation({ event });
          },
        }
      ),
    ],
  };

  const save = new Button({
    buttonText: 'Сохранить',
    buttonType: 'submit',
  });

  const inputs = profileInputs[profileType];

  const context = {
    inputs: inputs.map((input: Dictionary) => input.transformToString()),
    save: save.transformToString(),
  };

  const form = new Form(
    {
      children: {
        inputs,
        button: save,
      },
      content: template(context),
    },
    {
      submit: (event: Event) => {
        checkAndCollectData(event, '/viewProfile');
      },
    }
  );

  return form.transformToString();
}
