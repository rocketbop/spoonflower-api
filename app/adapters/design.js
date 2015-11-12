import ApplicationAdapter from './application';

export default DS.RESTAdapter.extend({
  host: 'https://api.spoonflower.com',
  namespace: 'design/search',
  pathForType: function(modelName) {
    return '';
  }
});
