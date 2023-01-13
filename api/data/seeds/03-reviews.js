const defaultData = [
  {
    brand_name: "A&W",
    author_review: 5,
    consumer_review: 3.5,
    img_url: "https://this",
    shop_url: "amazon.com",
    review_description: "Great for a store brand. Lots of vanilla"
  },
  {
    brand_name: "Barqs",
    author_review: 2,
    consumer_review: 4.5,
    img_url: "https://this",
    shop_url: "amazon.com",
    review_description: "Worst store brand not as sweet."
  },
  {
    brand_name: "Mugg",
    author_review: 3.5,
    consumer_review: 3,
    img_url: "https://this",
    shop_url: "amazon.com",
    review_description: "Happy middle ground"
  },
]

exports.seed = function(knex) {
  return knex('reviews').del()
    .then(function () {
      return knex('reviews').insert(defaultData);
    });
};