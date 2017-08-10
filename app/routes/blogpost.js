import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blogpost', params.blogpost_id);
  },
  actions: {
    destroyPost(blogpost) {
      blogpost.destroyRecord();
      this.transitionTo('index');
    }
  }
});