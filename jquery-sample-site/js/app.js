var featuredArticle;

featuredArticle = $('li.featured').toggleClass('featured');
console.log(featuredArticle);

var article2, article3;

article2 = $('.featured');
article3 = article2.next();
article2.toggleClass('featured');
article3.toggleClass('featured');

var navList, firstItem, link;

navList = $('.nav-list');
firstItem = navList.children().first();
link = firstItem.find('a');
link.attr('href', '#1');