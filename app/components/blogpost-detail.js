import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    update(blogpost, params) {
      this.sendAction('update', blogpost, params);
    },

    deletePost(blogpost) {
      if (confirm('Are You Sure You Want to Delete this Post?')) {
        this.sendAction('destroyPost', blogpost);
      }
    }
  }
});
