import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    state: { refreshModel: true }
  },
  model(params) {
    return this.store.findAll('design').then((designs) => {
      return {
        all: designs,
        filter: params.state
      }
    });
  }
});
