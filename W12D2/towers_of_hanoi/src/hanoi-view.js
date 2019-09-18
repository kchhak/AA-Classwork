class View{
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    for (let towers = 0; towers < 3; towers++){
      let $ul = $('<ul>'); 
      for (let col = 0; col < 3; col++) {
        let $li = $('<li>');
        $ul.append($li);
      }
      
      this.$el.append($ul);
    }
  }

  render() {
    const board = this.game.towers;
    const $myTowers = this.$el.find('ul');

    board.forEach(function(tower, towerIdx) {
      let $thisTower = $myTowers[towerIdx];
      let $theseDisks = $thisTower.children;

      tower.forEach(function(diskSize, diskIdx) {
        let $thisDisk = $theseDisks[diskIdx];

        $thisDisk.addClass(`disk-${diskSize}`)
      });
    });
  }
}

module.exports = View;


  