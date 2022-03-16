// var search = $('#searchPicture');
var search = document.getElementById("searchPicture")
var line = document.getElementByClassName('line');
var inputPlace = document.getElementsByClassName("inputPlace");
var hamburger = document.getElementById("hamburgerPic");
var searchDiv = $("div.inputPlace")

// click on search icon - phone view

search.click(function(){
   
    var html = '';
    if($(this).attr('src') === 'img/searchSmall.png'){
        $(this).attr('src', 'img/searchSmallGreen.png');
        hamburger.attr('src', 'img/hamburgerSmall.png');
        html = "<input type='text' class='inputStyle'>";
        searchDiv.html(html);
        searchDiv.css('display','none').delay(200).fadeIn(600);           
    }
    
    else {
       fadeOutSearch();
    }
    
});


function fadeOutSearch(){ 
            search.attr('src','img/searchSmall.png');
            searchDiv.delay(100).fadeOut(500);
}


// click on hamburger menu icon - phone view

hamburger.click( function(){
    
    var hamburgerList = ' ';
    if( $(this).attr('src') === 'img/hamburgerSmallGreen.png')
        {
            $(this).attr('src','img/hamburgerSmall.png');
            searchDiv.delay(100).fadeOut(400);
            line.fadeIn(500);
        }
    
    else{
        $(this).attr('src','img/hamburgerSmallGreen.png');
        
        fadeOutSearch();
        
            hamburgerList += " <ul class='menuUl'>";
            hamburgerList +="<li class='lightGreen'>HOME</li>";
            hamburgerList +="<li class='Green'>ABOUT US</li>";
            hamburgerList +="<li class='lightBlue'>OUR WORK</li>";
            hamburgerList +="<li class='Blue'>CONTACT</li>";
            hamburgerList +="</ul>";
         
            line.fadeOut();
        
         searchDiv.html(hamburgerList);
        
         searchDiv.css('display','none').fadeIn(600);
        
    }
     
});

$('.schoolPic').hover(
    function(){
        $(this).attr('src', "img/schoolGreen.png");
    },
    
    function(){
        $(this).attr('src', "img/school.png");
    },
);

$('.thumsUpPic').hover(
    function(){
        $(this).attr('src', 'img/thumUpGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/thumUp.png');
    },
);

$('.calculator').hover(
    function(){
        $(this).attr('src', 'img/calculatorGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/calculator.png');
    },
);

$('.cloud').hover(
    function(){
        $(this).attr('src', 'img/cloudGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/cloud.png');
    },
);

$('.clock').hover(
    function(){
        $(this).attr('src', 'img/clockGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/clock.png');
    },
);

$('.heart').hover(
    function(){
        $(this).attr('src', 'img/heartGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/heart.png');
    },
);

$('.facebook').hover(
    function(){
        $(this).attr('src', 'img/facebookGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/facebook.png');
    },
);

$('.twitter').hover(
    function(){
        $(this).attr('src', 'img/twitterGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/twitter.png');
    },
);

$('.envelopeSocial').hover(
    function(){
        $(this).attr('src', 'img/envelopeGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/envelope.png');
    },
);

$('.arrowUp').hover(
    function(){
        $(this).attr('src', 'img/arrrowUpGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/arrrowUp.png');
    },
);

$('.homeSmall').hover(
    function(){
        $(this).attr('src', 'img/homeGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/home.png');
    },
);

$('.aboutUsSmall').hover(
    function(){
        $(this).attr('src', 'img/aboutUsGreen.png');
    },
    
    function(){
        $(this).attr('src', 'img/aboutUs.png');
    },
);

$('.schoolSmall').hover(
    function(){
        $(this).attr('src', 'img/schoolBlue.png');
    },
    
    function(){
        $(this).attr('src', 'img/schoolSmall.png');
    },
);

$('.envelopeSmall').hover(
    function(){
        $(this).attr('src', 'img/envelopeBlue.png');
    },
    
    function(){
        $(this).attr('src', 'img/envelopeSmall.png');
    },
);


$(".arrowUp").click(function(){
    $('html, body').animate(
        {
            scrollTop: '0px'
        }, 400, 'linear'
    );
});