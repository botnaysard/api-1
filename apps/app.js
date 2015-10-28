// My solution to iterating through the array is below.

//$(function(){
//
//  	$.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
//  		i = 0 ;
//  		while (i < data.Search.length) {		
//    		filmTitle = data.Search[i].Title;
//    		filmYear = data.Search[i].Year;
//    		console.log(i);
//    		console.log(filmTitle + ', ' + filmYear);
//    		i++;
//    	}
//  	});
//});


  

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequestBetter(searchTerm);
  });
});


// getRequest is the basic way to do the search 

function getRequest(searchTerm){
  $.getJSON('http://www.omdbapi.com/?s='+ searchTerm + '&r=json', function(data){
    showResults(data.Search);
  });
}

//getRequestBetter is a more flexible way of doing the search; easier to edit later on

function getRequestBetter(searchTerm){
  var params = {
    s: searchTerm,
    r: 'json'
  };
  url = 'http://www.omdbapi.com';

  $.getJSON(url, params, function(data){
    showResults(data.Search);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
  html += '<p>' + value.Title + ' (' + value.Year + ')' + '</p>'; 
  console.log(value.Title);
  $('#search-results').html(html)
  });
}







// Alternate way to request JSON info.  'json' is passed as a third parameter, indicating what type of data is expected to be returned from the server
//$.get('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
//    console.log(data);
//  }, 'json')



// vs. getobjectbyid (var searchTerm = $('#query').val();)
// reationship b/w function showResults(results) and $.each(results...)