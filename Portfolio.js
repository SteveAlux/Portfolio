

console.log($('#1circle').hasClass('unchecked'));

var width = $(window).width();
$(window).on('resize', function(){
   if($(this).width() != width){
      width = $(this).width();
       if(width<=321){
        $("#firstphoto_content").animate({
          opacity:1
    
        },100,function(){
          console.log('animation Complete');
        });

        $("#secondphoto_content").animate({
          opacity:1
    
        },100,function(){
          console.log('animation Complete');
        });




       }
       else {
        $("#firstphoto_content").animate({
          opacity:0
    
        },100,function(){
          console.log('animation Complete');
        });

        $("#secondphoto_content").animate({
          opacity:0
    
        },100,function(){
          console.log('animation Complete');
        });

       }

   }
});

function Projectdisplay(){
  
  $('#firstphoto').mouseenter(function () {
    
    console.log('test123');
    $("#firstphoto_content").animate({
      opacity:1

    },100,function(){
      console.log('animation Complete');
    });
   
  });

  $('#firstphoto').mouseleave(function(){
    if (width<=321){
      $('#firstphoto_content').animate({
        opacity:1
      },100,function(){
  
      });
    }
    else{
    $('#firstphoto_content').animate({
      opacity:0
    },100,function(){

    });
    }
});


$('#secondphoto').mouseenter(function () {
    
  console.log('test123');
  $("#secondphoto_content").animate({
    opacity:1

  },100,function(){
    console.log('animation Complete');
  });
 
});

$('#secondphoto').mouseleave(function(){
  if (width<=321){
    $('#secondphoto_content').animate({
      opacity:1
    },100,function(){

    });
  }
  else{
  $('#secondphoto_content').animate({
    opacity:0
  },100,function(){

  });
  }
});
}

function handleBurger(){
  $("#burger_menu").on('click',function(){
    console.log('test');
    const navholder = displayNav();
    $( '#landing').html(navholder);
    $('body').find('#burger_content').toggleClass('hidden2');
  });
  $('header').on('click','#x_mark',function(){
    console.log('test2');
    $('#landing').html('');
  });

  $('header').on('click','a',function(){
      console.log('landing close hyper');
      event.preventDefault();
      linkLocation = this.href;
      $("body").fadeOut(1000, redirectPage);
      $("body").fadeIn(1000, redirectPage);
      $('#landing').html('');
    
      function redirectPage() {
        window.location = linkLocation;
    }

  });
}

function displayNav(){
  return `<menu id='burger_content'class='hidden2'>
  <span id='x_mark'>X</span>
  <span class='box'> <a href='#aboutme'>About Me</a></span>
  <span class='box'> <a href='#projects'>Projects</a></span>
  <span class='box'> <a href='#contact'>Contact</a></span>
</menu>`;
}

function handleShowcase(){
  $('#1circle').on('click',function(){

    $('figure').animate({
        opacity:0
      },600,function(){
        $('figure').css('background-image','url(Starwars.png)');
      });

    if($('#1circle').hasClass('unchecked')===true){
      $('#1circle').toggleClass('unchecked')
    }
    if ($('#2circle').hasClass('unchecked')=== false){
      $('#2circle').toggleClass('unchecked');
    }
    else {
   
    }
    if ($('#3circle').hasClass('unchecked')=== false){
        $('#3circle').toggleClass('unchecked');
    }
    else {
    }
    $('figure').animate({
        opacity:1
      },600,function(){
       
      });
    



  });
  $('#2circle').on('click',function(){

    $('figure').animate({
        opacity:0
      },600,function(){
        $('figure').css('background-image','url(BuenProvecho.png)');
      });

    if($('#2circle').hasClass('unchecked')===true){
      $('#2circle').toggleClass('unchecked')
    }
    if ($('#1circle').hasClass('unchecked')=== false){
      $('#1circle').toggleClass('unchecked');
    }
    else {
   
    }
    if ($('#3circle').hasClass('unchecked')=== false){
        $('#3circle').toggleClass('unchecked');
    }
    else {
    }
    $('figure').animate({
        opacity:1
      },600,function(){
       
      });
      

  });

  $('#3circle').on('click',function(){
    $('figure').animate({
        opacity:0
      },600,function(){
        $('figure').css('background-image','url(Coding.png)');
      });
    
    if($('#3circle').hasClass('unchecked')===true){
      $('#3circle').toggleClass('unchecked')
    }
    if ($('#1circle').hasClass('unchecked')=== false){
      $('#1circle').toggleClass('unchecked');
    }
    else {
   
    }
    if ($('#2circle').hasClass('unchecked')=== false){
        $('#2circle').toggleClass('unchecked');
    }
    else {
    }
    $('figure').animate({
        opacity:1
      },600,function(){
       
      });
    // $('figure').css('background-image','url(https://www.makdigitaldesign.com/wp-content/uploads/2016/03/email.png)');
     
  });
}





function Loadscript(){
Projectdisplay();
handleBurger();
handleShowcase();
}





$(Loadscript);
