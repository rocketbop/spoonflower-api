import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),

  designs: DS.hasMany('design', {async: true})
});
