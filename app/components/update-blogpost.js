import Ember from 'ember';

export default Ember.Component.extend({
  updateBlogForm: false,
  actions: {
    updateBlogForm() {
      this.set('updateBlogForm', true);
    },
    update(blogpost) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.set('updateBlogForm', false);
      this.sendAction('update', blogpost, params);
    }
  }
});
