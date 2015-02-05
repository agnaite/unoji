$("body").css("background-color", "#ecf0f1");

var angry = // all the faces in one convenient array
[{ face: "ಠ_ಠ" },
{ face: "( ≧Д≦)" },
{ face: "o(-`д´- 。)" },
{ face: "(；￣Д￣" },
{ face: "(」゜ロ゜)" },
{ face: "凸(｀0´)凸" },
{ face: "(*｀へ´*)" },
{ face: "(*≧m≦*)" },
{ face: "(/ﾟДﾟ)/" },
{ face: "(＃｀д´)ﾉ" },
{ face: "( •̀ω•́ )σ" },
{ face: "(*￣m￣)" },
{ face: "(>人<)" },
{ face: "( ꒪Д꒪)ノ" },
{ face: "(#ಠQಠ#)" },
{ face: "(　ﾟДﾟ)＜!!" },
{ face: "(´･益･｀*)" },
{ face: "(´Д｀)" },
{ face: "( ಠ ಠ )" },
{ face: "(･｀ｪ´･)つ" },
{ face: "(҂⌣̀_⌣́)" },
{ face: "＼(｀0´)／" },
{ face: "(>_<)" },
{ face: "（＞д＜）" },
{ face: "ヽ(●-`Д´-)ノ" },
{ face: "(((p(>o<)q)))" },
{ face: "(≧σ≦)" },
{ face: "(╯°□°）╯︵ ┻━┻" },
{ face: "(ノಠ益ಠ)ノ" },
{ face: "ヽ༼ ಠ益ಠ ༽ﾉ" },
{ face: "(ಠ⌣ಠ)" },
{ face: "[○･｀Д´･○]" },
{ face: "{{|└(>o< )┘|}}" },
{ face: "＼(・｀(ｪ)・)/" },
{ face: "＼(〇O〇)／" },
{ face: "＼(＠O＠)／" },
{ face: "( #`⌂´)/┌┛" },
{ face: "ヾ( ･`⌓´･)ﾉﾞ" },
{ face: "＼(>o<)ノ" },
{ face: "＼( ｀.∀´)／" },
{ face: "ヽ(≧Д≦)ノ" },
{ face: "o(≧o≦)o" },
{ face: "ヽ(#`Д´)ﾉ" },
{ face: "ヽ(ｏ`皿′ｏ)ﾉ" },
{ face: "ヽ(｀◇´)/" },
{ face: "ヽ(￣д￣;)ノ" },
{ face: "o(>< )o" },
{ face: "ლ(ಠ_ಠლ)" },
{ face: "ಠ▃ಠ" },
{ face: "ಥ⌣ಥ" },
{ face: "ᕦ(ò_óˇ)ᕤ" },
{ face: "ᕙ(⇀‸↼‶)ᕗ" },
{ face: "凸(｀⌒´メ)凸" },
{ face: "(⁎˃ᆺ˂)" },
{ face: "(ᗒᗣᗕ)՞" },
{ face: "(,,Ծ‸Ծ,, )" },
{ face: "┗(•̀へ •́ ╮ )”" },
{ face: "ఠ ͟ಠ" },
{ face: "(ఠ్ఠ ˓̭ ఠ్ఠ)" },
{ face: "( ｰ̀εｰ́ )" },
{ face: "<(｀^´)>" },
{ face: "(;｀O´)o" },
{ face: "( ‾᷅⚰‾᷄ )" },
{ face: "(｀◕‸◕´+)" },
{ face: "( ︶︿︶)_╭∩╮" },
{ face: "( ͒˃⌂˂ ͒)" },
{ face: "ヽ(｀⌒´)ﾉ" },
{ face: "༼ つ ͠° ͟ ͟ʖ ͡° ༽つ" },
{ face: "ʕ •̀ o •́ ʔ" },
{ face: "୧ʕ ⇀ ⌂ ↼ ʔ୨" },
{ face: "ヾ(｀⌒´メ)ノ″" },
{ face: "ヽ(｀○´)/" },
{ face: "v(｀皿´)ﾉ~" },
{ face: "(#｀皿´)" },
{ face: "(ﾉ｀Д´)ﾉ" },
{ face: "୧▒ •̀ o •́ ▒୨" },
{ face: "（○｀Ｏ´○）" },
{ face: "ヽ(｀δ´)ノ" },
{ face: "ヾ(｀◇´)ﾉ彡" },
{ face: "┗(｀皿´)┛" }

];

var happy =
[{ face: "( ´ ▽ ` )ﾉ" },
{ face: "(｡´∀｀)ﾉ" },
{ face: "(((o(*ﾟ▽ﾟ*)o)))" },
{ face: "(*´・ｖ・)" },
{ face: "(*^▽^*)" },
{ face: "(´∇ﾉ｀*)ノ" },
{ face: "（＾凹＾）" },
{ face: "(^～^)" },
{ face: "(^・ω・^ )" },
{ face: "(=^-ω-^=)" },
{ face: "(=^･ω･^)y＝" },
{ face: "(¬‿¬)" },
{ face: "＼（＠￣∇￣＠）／" },
{ face: "(ノ^∇^)" },
{ face: "(★^O^★)" },
{ face: "＼(^▽^＠)ノ" },
{ face: "⊂((・▽・))⊃" },
{ face: "Ｏ(≧▽≦)Ｏ" },
{ face: "o((*^▽^*))o" },
{ face: "ヾ(@^▽^@)ノ" },
{ face: "ლ(⌒▽⌒ლ)" },
{ face: "-(๑☆‿ ☆#)ᕗ" },
{ face: "。(⌒∇⌒。)" },
{ face: "〜(￣▽￣〜)" },
{ face: "〜(^∇^〜）" },
{ face: "｡^‿^｡" },
{ face: "｡◕‿◕｡" },
{ face: "( ^_^)／" },
{ face: "(　´∀｀)" },
{ face: "( ´ ▽ ` )ﾉ" },
{ face: "(　＾∇＾)" },
{ face: "( ͡° ͜ʖ ͡°)" },
{ face: "( ⋂‿⋂’)" },
{ face: "( ﾟ▽ﾟ)/" },
{ face: "( ﾉ^ω^)ﾉﾟ" },
{ face: "（‐＾▽＾‐）" },
{ face: "(-^〇^-)" },
{ face: "(-‿◦☀)" },
{ face: "(“⌒∇⌒”)" },
{ face: "(。⌒∇⌒)。" },
{ face: "(((o(*ﾟ▽ﾟ*)o)))" },
{ face: "(*‿*✿)" },
{ face: "(*^▽^*)" },
{ face: "(*≧▽≦)" },
{ face: "(*⌒∇⌒*)" },
{ face: "(•‿•)" },
{ face: "(/^▽^)/" },
{ face: "(´ω｀★)" },
{ face: "（=´∇｀=）" },
{ face: "(=^･^=)" },
{ face: "(＝⌒▽⌒＝)" },
{ face: "(≡^∇^≡)" },
{ face: "（⌒▽⌒）" },
{ face: "(⌒▽⌒)☆" },
{ face: "(●⌒∇⌒●)" },
{ face: "(◑‿◐)" },
{ face: "(☆^ー^☆)”" },
{ face: "(☆^O^☆)" },
{ face: "(❀◦‿◦)" },
{ face: "(✿´‿`)" },
{ face: "ʘ‿ʘ" },
{ face: "ಥ‿ಥ" },
{ face: "ヘ(^_^ヘ)" },
{ face: "ヘ(^o^ヘ)" },
{ face: "(✿◠‿◠)" },
{ face: "(◡‿◡✿)" },
{ face: "˙ ͜ʟ˙" },
{ face: "◦°˚\(*❛‿❛)/˚°◦" },
{ face: "(　◠ ◡ ◠　)" },
{ face: "〤◕‿◕〤" },
{ face: "ᕕ( ᐛ )ᕗ" },
{ face: "☜(⌒▽⌒)☞" },
{ face: "୧[ ˵ ͡ᵔ ͜ʟ ͡ᵔ ˵ ]୨" },
{ face: "♪♪ｖ(⌒ｏ⌒)ｖ♪♪" },
{ face: "ﾍ(=￣∇￣)ﾉ" },
{ face: "❀◕ ‿ ◕❀" },
{ face: "ヾ(^▽^ヾ)" },
{ face: "（★￣∀￣★）" },
{ face: "(✿╹◡╹)" },
{ face: "(o˘◡˘o)" }

];

// puts ALL the unojis in one array for whatever future use
// var unoji = [];

// var index = lunr(function() {
//   this.field('categories', { boost: 10 })
//   this.ref('id')
// });

// var i = 0;
// while(i < angry.length) {
//   unoji[i] = {
//     id: i+1,
//     face: angry[i].face,
//     // categories: faces[i].categories[0]
//   };

//   var item = unoji[i].face;
//   $(".container").append("<a class='btn'>"+item+"</a>");

//   i++;
// }

//shows 6 random ANGRY unojis
var i = 1;

while(i < 7) {
  r = Math.floor((Math.random() * angry.length-1) + 1);

  var item = angry[r].face;
  $(".random-angry").append("<a class='btn'>"+item+"</a>");
  
  i++;
}

//puts all other ANGRY unojis with display off in div
var x = 0;

while(x < angry.length) {
   var item = angry[x].face;
   $(".content-angry").append("<a class='btn'>"+item+"</a>");

   x++;
}

//expands hidden unojis

$('.expander-angry').simpleexpand({'defaultTarget':'.content-angry'});

//shows 6 random HAPPY unojis
var i = 1;

while(i < 7) {
  r = Math.floor((Math.random() * happy.length-1) + 1);

  var item = happy[r].face;
  $(".random-happy").append("<a class='btn'>"+item+"</a>");
  
  i++;
}

//puts all other HAPPY unojis with display off in div
var x = 0;

while(x < happy.length) {
   var item = happy[x].face;
   $(".content-happy").append("<a class='btn'>"+item+"</a>");

   x++;
}

//expands hidden unojis

$('.expander-happy').simpleexpand({'defaultTarget':'.content-happy'});

// unoji.forEach(function (x) {
//   index.add(x)
// })


 // while(i < unoji.length) {
 // 	var item = unoji[i].face;
 // 	$(".container").append("<a class='btn'>"+item+"</a>");

 //  index.add
 //  // index.add({
 //  //   id: i,
 //  //   title: item,
 //  //   body: 'Foo foo foo!',
 //  // });
 //  // console.log(index);
 //  i++;  
 //  }

// $(".angry a").click(function(){
//   angry.forEach(function (x) {
//     $(".angry").append("<a class='btn'>"+item+"</a>");
//   })
// });

$(".btn").click(function(){
	swal({   title: "Copied to clipboard!",   
	text: this.textContent,  
	timer: 1000 });
});

$(".btn").mouseenter(function() {
	$(this).css("background-color", "#f1c40f");
	// console.log(this.textContent);
});

$(".btn").mouseleave(function() {
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