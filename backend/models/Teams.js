const { Model } = require('objection');
const knex = require('../config/db')


Model.knex(knex);




class Team extends Model {
    static tableName = 'teams';


    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                badge: { type: 'string' },
                matchesPlayed: { type: 'integer' },
                totalPoints: { type: 'integer' },
                created_at: { type: 'string' },
                updated_at: { type: 'string' }
            }
        };
    }
  

  }

  module.exports = Team;