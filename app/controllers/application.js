import Ember from 'ember';

export default Ember.Controller.extend({
  state: 'all',
  queryParams: [
    'state'
  ],
  filteredProducts: Ember.computed('model.products@each.name', 'model.filter', function () {
    var products = this.get('model.products');
    var filter = this.get('model.filter');
    return products.filterBy('productCategoryId', filter);
  })
});
