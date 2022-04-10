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
    </div>
    {{{currentChatArea}}}
  </div>
</div>`;
