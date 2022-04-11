export default
`<div class='current-chat-area__selected'>
  <div class='current-chat__header'>
    <div class='current-chat__header-image'>
      <img
        src='{{avatarIcon}}'
        class='current-chat__header-icon'
        alt='Фото пользователя.'
      >
    </div>
    <div class='current-chat-name'>
      {{chatTitle}}
    </div>
    <div class='popover__wrapper actions__button'>
      <div class='chat-settings'>
        <img
          src='{{chatSettingsIcon}}'
          class='chat-settings__icon'
          alt='Настройка чата.'
        >
      </div>
      <div class='popover__content popover__content--bottom-left'>
        <a class='popover__item'>
          <img
            src='{{addIcon}}'
            alt='Добавить пользователя.'
          />
          <p class='popover__paragraph'>Добавить пользователя</p>
        </a>
        <a class='popover__item'>
          <img
            src='{{deleteIcon}}'
            alt='Удалить пользователя.'
          />
          <p class='popover__paragraph'>Удалить пользователя</p>
        </a>
      </div>
    </div>
  </div>
  <div class='current-chat__main'>
    <section class='messages'>
      <date class='messages__date'>
        {{chatDate}}
      </date>
      {{#each messages}}
        <div data-component='messages' data-key='{{@index}}'>
          {{{this}}}
        </div>
      {{/each}}
      </section>
    </div>
  <footer class='current-chat__footer'>
    <div class='popover__wrapper'>
          <button class='add-file-button' type='button'>
            <img
              src='{{addFileIcon}}'
              alt='Прикрепить дополнения.'
            />
          </button>
          <div class='popover__content popover__content--top-right'>
            <a class='popover__item'>
              <img
                src='{{imageIcon}}'
                alt='Добавить фото или видео.'
              />
              <p class='popover__paragraph'>Фото или Видео</p>
            </a>
            <a class='popover__item'>
              <img
                src='{{fileIcon}}'
                alt='Добавить файл.'
              />
              <p class='popover__paragraph'>Файл</p>
            </a>
            <a class='popover__item'>
              <img
                src='{{locationIcon}}'
                alt='Добавить геопозицию.'
              />
              <p class='popover__paragraph'>Локация</p>
            </a>
          </div>
        </div>

    <div class='message-input'>
      {{{message}}}
    </div>
    <div class='send-button'>
      <img
        src='{{sendIcon}}'
        class='send-button__icon'
        alt='Отправить сообщение.'
      >
    </div>
  </footer>
</div>`;
