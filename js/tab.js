$(function() {
    $("#tabcontentMain1 > div.storeBox:nth-child(3n)").addClass( "last" );
	$("#tabcontentMain1 > div.storeBox:nth-child(3n+1)").addClass( "first" );
	$("#tabcontentMain1 > div.storeBox:nth-child(-n+3)").addClass( "firstRow" );
	$("#listTwoNrRow > li:nth-child(10n)").addClass( "thenthRow" );
});


$(function() {
    $("a.howTheProductWorks[rel]").overlay({mask: '#000', effect: 'apple'});
	$("a.watchTheAd[rel]").overlay({mask: '#000', effect: 'apple',
        onClose: function(){
            $('video, audio').each(function() {
              $(this)[0].player.pause();		  
        });
        },

        onBeforeLoad: function() {

            
        }});
  });
  

