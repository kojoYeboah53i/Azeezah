exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('teams')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('teams').insert([
          { 
            name : 'Manchester United',
            badge: 'http://localhost:9222/uploads/headset.jpg',
            matchesPlayed : 26,
            totalPoints : 55,
         },
         { 
          name : 'Manchester City',
          badge: 'http://localhost:9222/uploads/headset.jpg',
          matchesPlayed : 26,
          totalPoints : 61,

         },
         {
          name : 'Liverpool',
          badge: 'http://localhost:9222/uploads/headset.jpg',
          matchesPlayed : 25,
          totalPoints : 50,

         },
         {
          name: 'Chelsea',
          badge: 'http://localhost:9222/uploads/headset.jpg',
          matchesPlayed : 25,
          totalPoints : 38,
         },

         {
          name: 'Arsenal',
          badge: 'http://localhost:9222/uploads/headset.jpg',
          matchesPlayed : 26,
          totalPoints : 49,

         }
    
        ]);
      });
  };

