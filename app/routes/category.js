import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    savePost(params){
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('category');

      }
    }

});
