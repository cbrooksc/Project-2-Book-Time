





$(".gridImg-1").on("click", function(event){
  event.preventDefault();


$.get("/api/main/id:1", function(data) {

var books = $("<div>");

books.addClass("bookData");



books.append("<p>" + data.Title + "</p>");
books.append("<p>" + data.AUTHOR + "</p>");
books.append("<p>" + data.Genres + "</p>");
books.append("<p>" + data.PUBLISHED_YEAR + "</p>");
books.append("<p>" + data.SUMMARY + "</p>");
books.append("<p>" + data.URL_LINK + "</p>");



$(".grid-alpha").append(books);



});
});