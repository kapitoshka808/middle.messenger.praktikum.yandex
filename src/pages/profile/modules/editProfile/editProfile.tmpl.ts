export default
`<div class='edit-profile'>
  <div class='edit-profile__form'>
    {{#each inputs}}
      {{{this}}}
    {{/each}}
  </div>
  <div class='edit-profile__buttons-panel'>
    <a href='/viewProfile'>
      <div class='edit-profile__save-link'>
        {{{save}}}
      </div>
    </a>
  </div>
</div>`;
