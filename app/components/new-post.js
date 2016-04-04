import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow(){
      console.log('hi from postFormShow');
      this.set("addNewPost", true);
    },
    savePost(){
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        image: this.get('image')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
