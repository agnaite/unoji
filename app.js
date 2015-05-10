//divutohide header via headroom.js
(function() {
    var header = new Headroom(document.querySelector(".headroom"), {
        tolerance: 5,
        offset : 205,
        classes: {
          initial: "headroom",
          pinned: "headroom--pinned",
          unpinned: "headroom--unpinned"
        }
    });
    header.init();
}());

//navigate to sections aka categories
var navigateTo = function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  };

//expand/collapse icons next to categories
var toggleText = function(expander){
    $(expander).append("<span>+</span>").click(function() {
        var $sp = $('span', this);
        $(this).nextUntil("hr").slideToggle("fast");
        $sp.text( $sp.text()=="+"?"−":"+");
    }).nextUntil("hr").hide();
}

navigateTo();

toggleText(".expander-angry");
toggleText(".expander-happy");
toggleText(".expander-confused");
toggleText(".expander-surprised");

var i = 1;

// *************************** A N G R Y 

//gets random ANGRY 6 emojis

while(i < 7) {
  r = Math.floor((Math.random() * angry.length-1) + 1);

  var item = angry[r].face;
  $(".random-angry").append("<div class='unoji'>"+item+"</div>");
  
  i++;
}

//puts all other ANGRY unojis with display off in div
var x = 0;

while(x < angry.length) {
   var item = angry[x].face;
   $(".content-angry").append("<div class='unoji'>"+item+"</div>");

   x++;
}

//expands hidden unojis
$('.expander-angry').simpleexpand({'defaultTarget':'.content-angry'});

// *************************** H A P P Y 

//shows 6 random HAPPY unojis
var i = 1;

while(i < 7) {
  r = Math.floor((Math.random() * happy.length-1) + 1);

  var item = happy[r].face;
  $(".random-happy").append("<div class='unoji'>"+item+"</div>");
  
  i++;
}

//puts all other HAPPY unojis with display off in div
var x = 0;

while(x < happy.length) {
   var item = happy[x].face;
   $(".content-happy").append("<div class='unoji'>"+item+"</div>");

   x++;
}

//expands hidden unojis

$('.expander-happy').simpleexpand({'defaultTarget':'.content-happy'});

// *************************** C O N F U S E D 

//gets random CONFUSED 6 emojis

var i = 1;

while(i < 7) {
  r = Math.floor((Math.random() * confused.length-1) + 1);

  var item = confused[r].face;
  $(".random-confused").append("<div class='unoji'>"+item+"</div>");
  
  i++;
}

//puts all other CONFUSED unojis with display off in div
var x = 0;

while(x < confused.length) {
   var item = confused[x].face;
   $(".content-confused").append("<div class='unoji'>"+item+"</div>");

   x++;
}

//expands hidden unojis
$('.expander-confused').simpleexpand({'defaultTarget':'.content-confused'});

// *************************** S U R P R I S E D 

//gets random SURPRISED 6 emojis

var i = 1;

while(i < 7) {
  r = Math.floor((Math.random() * surprised.length-1) + 1);

  var item = surprised[r].face;
  $(".random-surprised").append("<div class='unoji'>"+item+"</div>");
  
  i++;
}

//puts all other SURPRISED unojis with display off in div
var x = 0;

while(x < surprised.length) {
   var item = surprised[x].face;
   $(".content-surprised").append("<div class='unoji' type='text/plain'>"+item+"</div>");

   x++;
}

//expands surprised unojis
$('.expander-surprised').simpleexpand({'defaultTarget':'.content-surprised'});

$(function() {
    FastClick.attach(document.body);
});
//unoji alert copy to clipboard

var mq = window.matchMedia("(min-width: 540px)" ); //"(min-width: 540px)"

if (mq.matches) {

  //unojis color change over hover

  $(".unoji").mouseenter(function () {
    $(".unoji").removeClass("hoverColor");
    $(this).addClass("hoverColor");
  });

  $(".unoji").mouseleave(function () {
    $(this).removeClass("hoverColor");
  });

  $(".unoji").click(function(){
    swal({   title: "Copied to clipboard!",   
    text: this.textContent,  
    timer: 500 });
  });


  var client = new ZeroClipboard( $('.unoji') );

  client.on( 'ready', function(event) {
    // console.log( 'movie is loaded' );

    client.on( 'copy', function(event) {
      event.clipboardData.setData('text/plain', event.target.innerHTML);
    } );

    client.on( 'aftercopy', function(event) {
      console.log('Copied text to clipboard: ' + event.data['text/plain']);
    } );
  } );

  client.on( 'error', function(event) {
    // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
    ZeroClipboard.destroy();
} );
  // window width is at least 540px
}
else {
  // window width is less than 540px
   // Code credit: http://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery

    //  $(".unoji").tap(function(){
    //   var text = this.textContent;
    //   console.log(text);
    //   text.();
    // });

// onClick="";

 // $.fn.OneTapSelect = function(){
 //      return $(this).on('click',function(){
        
 //         var range, selection;
 //         if (window.getSelection) {
 //            selection = window.getSelection();        
 //            range = document.createRange();
 //            range.selectNodeContents(this);
 //            selection.removeAllRanges();
 //            selection.addRange(range);
 //        } else if (document.body.createTextRange) {
 //            range = document.body.createTextRange();
 //            range.moveToElementText(this);
 //            range.select();
 //        }
 //      });
 //    };

 $(document).ready(
    function() {
        $('.unoji').click(
            function() {
                if ($('#tmp').length) {
                    $('#tmp').remove();
                }
                var clickText = $(this).text();
                $('<textarea id="tmp" />')
                    .appendTo($(this))
                    .val(clickText)
                    .focus()
                    .select();
        return false;
    });
$(':not(.unoji)').click(
    function(){
        $('#tmp').remove();
    });

});
    
    // Apply to these elements
    // $('.unoji').css('cursor','pointer');
    // $('.unoji').OneTapSelect();


      // $(".unoji").tap(function() {
      // var x = this.innerText;
      // console.log(this);
      // console.log(x);
      // $(this).select();
      // $this.select();

      // });
    }

 

    // Work around Chrome's little problem
    // $this.mouseup(function() {
    //     // Prevent further mouseup intervention
    //     $this.unbind("mouseup");
    //     return false;
    // });







