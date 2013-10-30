$(document).ready(function(){
  
    document.ontouchmove = function(e){
 
       thePosition = $(window).scrollTop();
        console.log(thePosition);

        if(thePosition >= 518){
            $('#showcase2 > img').animate({  opacity:1});
            $('#back2top').css('display','block');
            if(thePosition >=790){
               $('#showcase3').animate({  opacity:1});
               if(thePosition >=1470){
                $('#showcase4 > img').animate({opacity:1,left:'0px'},500,'cubic-bezier(.61,1.81,.36,.47)');
                if(thePosition >=1500){
                      //nothing
                }
               }
            }
        }else{
           $('#back2top').css("display","none");
        }

    };
    $('#back2top').click(function(){
         document.body.scrollTop = 0;
    });
    
   

    
});
