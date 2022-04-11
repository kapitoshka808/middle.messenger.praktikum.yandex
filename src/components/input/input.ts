import { nanoid } from 'nanoid';
import inputTemplate from './input.tmpl';
import inputProfileTemplate from './inputProfile/inputProfile.tmpl';
import { isClassDefined, classIfElse } from '../../utils';
import { Block } from '../../core/block';
import './input.scss';
import './inputProfile/inputProfile.scss';

export type TInput = {
  isProfileInput?: boolean;
  type: string;
  errorMessage?: string;
  label: string;
  name: string;
  required?: boolean;
  value?: string | number;
  disabled?: boolean;
  inputContainerClassName?: string;
  inputClassName?: string;
  dataType?: string;
};

export class Input extends Block {
  constructor(context: TInput, events: Object = {}) {
    super('div', {
      context: {
        ...context,
        disabledInput: context.disabled,
        inputContainerClassName: `${classIfElse(
          context.isProfileInput,
          'input-profile__container',
          'input__container'
        )}
          ${isClassDefined(context.inputContainerClassName)}`,
        inputClassName: `${classIfElse(
          context.isProfileInput,
          'input-profile__input',
          'input'
        )} ${isClassDefined(context.inputClassName)}`,
        id: nanoid(6),
      },
      template: context.isProfileInput ? inputProfileTemplate : inputTemplate,
      events,
    });
  }
}
