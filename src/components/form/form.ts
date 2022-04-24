import { nanoid } from 'nanoid';

import { Block, Dictionary } from '../../core';

import formTemplate from './form.tmpl';

export type TForm = {
  children?: {
    inputs?: Dictionary[];
    button?: Dictionary;
  };
  content?: string;
};

export class Form extends Block {
  constructor(context: TForm, events: Object = {}) {
    super('div', {
      context: {
        ...context,
        id: nanoid(6),
      },
      template: formTemplate,
      events,
    });
  }
}
