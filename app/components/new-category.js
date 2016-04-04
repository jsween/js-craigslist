import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow(){
      this.set("addNewCategory", true);
    },

    saveCategory(){
      var params = {
        title: this.get('title')
      };
      this.set('addNewCategory', false);
      this.sendAction('saveCategory', params);
    }
  }
});
