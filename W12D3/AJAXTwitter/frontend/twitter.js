const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(function (){
  const $buttons = $('button');
  $buttons.each( (idx, button) => {
    new FollowToggle(button);

  });
  const $input = $("#search");

  new UsersSearch($input);
});