const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = this.$el.data('initial-follow-state') || options.followState;
    this.render();

    this.$el.on('click', this.handleClick.bind(this));
  }
  
  render() {
    if (this.followState === "unfollowed") {
      this.$el.html("Follow!");
      this.$el.prop('disabled', false);
    } else if (this.followState === "followed") {
      this.$el.html("Unfollow!");
      this.$el.prop('disabled', false);
    } else { 
      this.$el.html("...");
      this.$el.prop('disabled', true);
    }
  }

  handleClick(e){
    e.preventDefault();
    
    if (this.followState === "unfollowed") {
      this.followState = "following";
      this.render();
      APIUtil.followUser(this.userId).then(() => {
        this.followState = 'followed';
        this.render();
      })
    } else if (this.followState === "followed") {
      this.followState = "unfollowing";
      this.render();
      APIUtil.unfollowUser(this.userId).then(()=> {
        this.followState = 'unfollowed';
        this.render();
      })
    }
    
  }


}

module.exports = FollowToggle;