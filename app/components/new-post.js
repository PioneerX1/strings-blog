import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        image: this.get('image'),
        content: this.get('content'),
      };
      this.sendAction('savePost', params);
    }
  }
});
