$(document).ready(function() {
	
    $('[name="country"]').on('change', function() {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var delivery_price = data.delivery_price;
        var currency = data.currency
        $("[value = "+geoKey+"]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_s3').text(delivery_price);
        $('.price_land_curr').text(currency);
        if(geoKey == '357') { $('body').addClass('bel'); }
    });


    $('a').click( function(){ 
        var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
        return false;
    });


    initializeClock('timer', deadline);


    $("#slides").slides({
	    width: $('.slide').width(),
	    height:$('.slide').height()
	});

}); 


