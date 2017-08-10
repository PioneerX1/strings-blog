import Ember from 'ember';

export default Ember.Route.extend({
  //do we need model here??

  actions: {
    savePost(params) {
      var newPost = this.store.createRecord('blogpost', params);
      newPost.save();
      this.transitionTo('index');
    }
  }
});
