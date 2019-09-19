class TweetCompose {
  constructor(el) {
    this.$el = $(el);

    this.$submit.on('', this.handleInput.bind(this));
  }

}