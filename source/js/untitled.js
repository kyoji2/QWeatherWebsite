if(document.body.scrollTop < 400){

	$('#top-header,#show-case,#top-text').fadeIn();
    $('#fixedlogo > a').animate({top:"0px"},300);
    $('#topbar').css('display','none');
}else if(document.body.scrollTop >=400){
	$('#show-case,#top-text,#top-header').fadeOut();


	  $('#example-case div:nth-of-type(4)').animate({opacity:1},500);
      $('#example-case div:nth-of-type(3)').delay(200).animate({opacity:1,bottom:"55px",right:"217px"},500);

       $('#example-case div:nth-of-type(2)').delay(400).animate({opacity:1,bottom:"35px",right:"358px"},500);

       $('#example-case div:nth-of-type(1)').delay(600).animate({opacity:1,bottom:"55px",right:"567px"},500);
       if(document.body.scrollTop >620){
       		$('#topbar').css('display','block');
       		
	$('#fixedlogo > a').animate({top:"-70px"},200);
       }
}