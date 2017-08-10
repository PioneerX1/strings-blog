import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deletePost(blogpost) {
      if (confirm('Are You Sure You Want to Delete this Post?')) {
        this.sendAction('destroyPost', blogpost);
      }
    }
  }
});
