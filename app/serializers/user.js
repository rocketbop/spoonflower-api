import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize(typeClass, hash) {
  return {
    data: {
      type:       'user',
      id:         hash.id,
      attributes: {
        firstName: hash.first_name
      }
    }
  };
}
});
