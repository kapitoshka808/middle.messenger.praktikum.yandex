import { nanoid } from 'nanoid';

import { Block } from '../../core';
import { isClassDefined } from '../../utils';

import avatarTemplate from './avatar.tmpl';
import './avatar.scss';

export type TAvatar = {
  className: string;
  src?: string;
};

export class Avatar extends Block {
  constructor(context: TAvatar, events = {}) {
    super('div', {
      context: {
        ...context,
        className: `${isClassDefined(context.className)}`,
        id: nanoid(6),
      },
      template: avatarTemplate,
      events,
    });
  }
}
