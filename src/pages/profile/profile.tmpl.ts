export default
`<div class='profile-page'>
  <nav class='return-button'>
    <a class='return-button__link' href='/chatSelected'>
      <img
        class='return-button__image'
        src='{{returnIcon}}'
        alt='Вернуться к сообщениям.'
      />
    </a>
  </nav>
  <div class='profile-page__container'>
    <div class='profile-page__header'>
      <div class='photo-container' data-modal-id='changePhoto'>
        <img
          src='{{avatarIcon}}'
          alt='Фото пользователя.'
          class='avatar'
        />
        <div class='photo-overlay'>
          <div class='overlay-text'>Поменять аватар</div>
        </div>
      </div>
      <div id='changePhoto' class='eins-modal'>
        <div class='eins-modal-content'>
          <p class='eins-modal__header'>
            Загрузите фото
          </p>
          <label class='eins-modal__upload'>
            <input class='eins-modal__input' type='file'/>
            Выбрать фото на устройстве
          </label>
          <a href='/viewProfile'>
            {{{button}}}
          </a>
        </div>
      </div>
      {{#if isViewMode}}
        <span class='profile-page__user-name'>{{header}}</span>
      {{/if}}
    </div>
    {{{content}}}
  </div>
</div>`;
