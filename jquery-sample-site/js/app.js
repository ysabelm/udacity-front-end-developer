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


var articleItems, first, ul;

articleItems = $('.article-item');
articleItems.css('fontSize', '20px');
first = articleItems.first();
ul = first.children('ul');
ul.remove();


$('#input').on('change', function() {
    var val, h1;
    val = $('#input').val();
    h1 = $('.articles').children('h1');
    h1.text(val);
});


$('p').each( function () {
    var len, text;
    text = $(this).text();
    len = text.length;
    $(this).text(text + " " + len);
});


$(function () {
	$("img").attr("src", "http://lorempixel.com/350/150/animals/");
});
