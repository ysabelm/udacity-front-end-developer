var featuredArticle;

featuredArticle = $('li.featured').toggleClass('featured');
console.log(featuredArticle);

var article2, article3;

article2 = $('.featured');
article3 = article2.next();
article2.toggleClass('featured');
article3.toggleClass('featured');