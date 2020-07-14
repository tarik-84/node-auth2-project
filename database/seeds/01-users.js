// pre-hashed password for "abc123"
const hashedPassword = " e99a18c428cb38d5f260853678922e03"
exports.seed = async function(knex) {
  await knex('users').insert([
    {username: 'john doe', password: hashedPassword},
    {username: 'jane doe', password: hashedPassword},
    {username: 'josh doe', password: hashedPassword},
  ])
};
