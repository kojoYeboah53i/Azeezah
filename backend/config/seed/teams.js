exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('products')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('products').insert([
          { 
            name : 'Manchester United',
            badge: 'http://localhost:9222/uploads/headset.jpg',
            matchesPlayed : 26,
            points : 55,
         },
         { 
          name : 'Manchester City',
          badge: 'http://localhost:9222/uploads/headset.jpg',
          matchesPlayed : 26,
          points : 61,

         },
         {
          name : 'Liverpool',
          badge: 'http://localhost:9222/uploads/headset.jpg',
          matchesPlayed : 25,
          points : 50,

         },
         {
          name: 'Chelsea',
          badge: 'http://localhost:9222/uploads/headset.jpg',
          matchesPlayed : 25,
          points : 38,
         },

         {
          name: 'Arsenal',
          badge: 'http://localhost:9222/uploads/headset.jpg',
          matchesPlayed : 26,
          points : 49,

         }
    
        ]);
      });
  };

