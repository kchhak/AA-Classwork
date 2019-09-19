const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle');

class UsersSearch {
  constructor(el){
    console.log(el);
    this.$input = el;
    this.$ul = $(".users"); 

    this.$input.on('input', this.handleInput.bind(this));
    // debugger
  }

  handleInput(e){ 

    let queryVal = this.$input.val();

  
    APIUtil.searchUsers(queryVal).then(users => this.renderResults(users));
  }

  renderResults(users) {

    this.$ul.empty();

    for (let i = 0; i < users.length; i++) {
      const $user = $('<li>');
      const thisUser = users[i];

      let $link = $("<a>");
      $link.text(`${thisUser.username}`);
      $link.attr('href', `/users/${thisUser.id}`);
      
      // if (current_user.follows(thisUser) ){
        
      // }

      let $button = $('<button>');
      const followButton = new FollowToggle($button, {
        userId: thisUser.id,
        followState: thisUser.followed ? "followed" : "unfollowed"
      });
      
      $user.append($link)
      $user.append($button);
      this.$ul.append($user);
    }

  }

}

module.exports = UsersSearch;