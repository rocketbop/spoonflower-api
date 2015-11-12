import DS from 'ember-data';

export default DS.Model.extend({
  contentType: DS.attr('string'),
  fabOfWeekWinner: DS.attr('boolean'),
  filename: DS.attr('string'),
  forSale: DS.attr('boolean'),
  name: DS.attr('string'),
  showDesign: DS.attr('boolean'),
  thumbnailUrl: DS.attr('string'),

  user: DS.belongsTo('user')
});
