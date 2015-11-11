import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://api.spoonflower.com/design/search',
    namespace: 'design/search'
});
