const defaultData = [
  {
    first_name: "Spencer",
    last_name: "Patterson",
    email: "spencerp34@yahoo.com",
    role: "Admin"
  },
  {
    first_name: "Talia",
    last_name: "Merrill",
    email: "test@test.com",
    role: "user"
  },
  {
    first_name: "Lexi",
    last_name: "Ackley",
    email: "this.test@test.com",
    role: "user"
  },
]

exports.seed = function(knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert(defaultData);
    });
};