import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalize(typeClass, hash) {
    return {
      data: {
        type:          'design',
        id:            hash.id,
        attributes:    {
          contentType:     hash.content_type,
          fabOfWeekWinner: hash.fab_of_week_winner,
          filename:        hash.filename,
          forSale:         hash.for_sale,
          name:            hash.name,
          showDesign:      hash.show_design,
          thumbnailUrl:    hash.thumbnail_url
        },
        relationships: {
          user: {
            data: {
              type: 'user',
              id:   hash.user.id
            }
          }
        }
      }
    };
  },

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {

    let results = payload.results[0].results;
    let users = results.mapBy('user');

    var newPayload = {
      designs: results,
      users: users
    };

    return this._super(store, primaryModelClass, newPayload, id, requestType);
  }

});
