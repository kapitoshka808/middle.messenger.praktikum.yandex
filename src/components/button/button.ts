import buttonTemplate from './button.tmpl';
import { isClassDefined } from '../../utils';
import { Block } from '../../core/block';
import './button.scss';

export type TButton = {
  buttonText: string;
  buttonType: string;
  buttonClassName?: string;
};

export class Button extends Block {
  constructor(context: TButton, events: Object = {}) {
    super('div', {
      context: {
        ...context,
        buttonClassName: `${isClassDefined(context.buttonClassName)}`,
      },
      template: buttonTemplate,
      events,
    });
  }
}
