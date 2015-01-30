$("body").css("background-color", "#ecf0f1");

var faces = [
           "( ͡° ͜ʖ ͡°)",
           "(V)(°,,°)(V)",
           "(─‿‿─)",
           "(✿◠‿◠)",
           "(。・_・。)",
           "{◕ ◡ ◕}",
           "¯\\_(ツ)_/¯",
           "ʕ•ᴥ•ʔ",
           "༼ つ ◕_◕༽つ",
           "‹(ᵒᴥᵒ)›",
           "⊙▃⊙",
           "⊙﹏⊙",
           "ツ",
           "三 ┏( ^o^)┛"
     ];

var i = 0;

 while(i < faces.length) {
 	var item = faces[i];
 	$(".facesList").append("<a class='btn'>"+item+"</a>");
 	i++;	
  }

$("a").click(function(){
	swal({   title: "Copied to clipboard!",   
	text: this.textContent,  
	timer: 1000 });
});

$("a").mouseenter(function() {
	$(this).css("background-color", "#f1c40f");
	// console.log(this.textContent);
});

$("a").mouseleave(function() {
	$(this).css("background-color", "white");
	// console.log(this.textContent);
});

var client = new ZeroClipboard( $('.btn') );

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