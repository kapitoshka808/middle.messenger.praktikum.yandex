export default
`<div class='chat-page'>
  <div class='chat-page__container'>
    <div class='chat-list-area'>
      <div class='profile'>
        <a class='profile__link' href='/viewProfile'>
          <span class='profile__link-title'>
            {{profileTitle}}
          </span>
        </a>
      </div>
      <div class='search-input' data-component='input' data-key='{{@index}}'>
        {{{searchInput}}}
      </div>
      <ul class='chat-list'>
        {{#each contacts}}
          <a class='profile__link' href='/chatSelected'>
            <li class='conversation-card'>
              <div class='conversation-card__photo-wrapper'>
                <img
                  class='conversation-card__photo'
                  src={{avatarIcon}}
                  alt='Фото собеседника.'
                />
              </div>
              <p class='conversation-card__name'>
                {{name}}
              </p>
              <p class='conversation-card__last-messege'>
                {{message}}
              </p>
              <time class='conversation-card__date'>
                {{time}}
              </time>
              {{#if this.counter}}
                <p class='conversation-card__counter'>
                  {{counter}}
                </p>
              {{/if}}
            </li>
          </a>
        {{/each}}
      </ul>
      <p>
        <a href='/'>Вход</a>
        <br>
        <a href='/registration'>Регистрация</a>
        <br>
        <a href='/notSelectedChat'>Пустой чат</a>
        <br>
        <a href='/chatSelected'>Чат с сообщениями</a>
        <br>
        <a href='/viewProfile'>Профиль</a>
        <br>
        <a href='/editProfileData'>Редактирование профиля</a>
        <br>
        <a href='/editProfilePassword'>Изменение пароля</a>
        <br>
        <a href='/forbidden'>403</a>
        <br>
        <a href='/notFound'>404</a>
        <br>
        <a href='/internalServerError'>500</a>
        <br>
        <a href='/serviceUnavailable'>503</a>
      </p>
    </div>
    {{{currentChatArea}}}
  </div>
</div>`;
