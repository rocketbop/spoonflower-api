import Ember from 'ember';

export default Ember.Component.extend({
  filtered: Ember.computed('designs.@each.forSale', 'filter', function() {
    var filter = this.get('filter');
    var all = this.get('designs');

    if (filter === 'all') { return all; }

    return all.filterBy('forSale', filter === 'forSale');
  }),
});
