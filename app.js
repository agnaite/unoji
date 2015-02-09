$("body").css("background-color", "white");

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

var confused =
[ { face: "(゜-゜)" },
{ face: "(・_・ヾ" },
{ face: "(•ิ_•ิ)?" },
{ face: "｢(ﾟﾍﾟ)" },
{ face: "(｀_´)ゞ" },
{ face: "(´･_･`)" },
{ face: "(。ヘ°)" },
{ face: "(´−｀) ﾝｰ" },
{ face: "(」・ω・)」" },
{ face: "( ・◇・)？" },
{ face: "(」゜ロ゜)」" },
{ face: "(」ﾟヘﾟ)」" },
{ face: "(￣■￣;)!?" },
{ face: "(」ﾟﾛﾟ)｣" },
{ face: "( •᷄ὤ•᷅)？" },
{ face: "(＃⌒∇⌒＃)ゞ" },
{ face: "(゜。゜)" },
{ face: "(⊙_☉)" },
{ face: "(⊙_◎)" },
{ face: "(◎_◎;)" },
{ face: "(●__●)" },
{ face: "(☉_☉)" },
{ face: "(C_C)" },
{ face: "ヽ(゜Q。)ノ？" },
{ face: "●.◉" },
{ face: "c( O.O )ɔ" },
{ face: "щ(゜ロ゜щ)" },
{ face: "ఠ_ఠ" },
{ face: "ʕ•ૅૄ•ʔ" },
{ face: "ɾ◉⊆◉ɹ" },
{ face: "(o゜ー゜o)??" },
{ face: "（・∩・）？" },
{ face: "Σ(￣□￣lll)" },
{ face: "( -_・)?" }
];

var toggleText = function(expander){
    $(expander).append("<span>+</span>").click(function() {
        var $sp = $('span', this);
        $(this).nextUntil("hr").slideToggle("fast");
        $sp.text( $sp.text()=="+"?"−":"+");
    }).nextUntil("hr").hide();
}

toggleText(".expander-angry");
toggleText(".expander-happy");
toggleText(".expander-confused");

var i = 1;

//gets random ANGRY 6 emojis

while(i < 7) {
  r = Math.floor((Math.random() * angry.length-1) + 1);

  var item = angry[r].face;
  $(".random-angry").append("<a class='unoji'>"+item+"</a>");
  
  i++;
}

//puts all other ANGRY unojis with display off in div
var x = 0;

while(x < angry.length) {
   var item = angry[x].face;
   $(".content-angry").append("<a class='unoji'>"+item+"</a>");

   x++;
}

//expands hidden unojis
$('.expander-angry').simpleexpand({'defaultTarget':'.content-angry'});

//shows 6 random HAPPY unojis
var i = 1;

while(i < 7) {
  r = Math.floor((Math.random() * happy.length-1) + 1);

  var item = happy[r].face;
  $(".random-happy").append("<a class='unoji'>"+item+"</a>");
  
  i++;
}

//puts all other HAPPY unojis with display off in div
var x = 0;

while(x < happy.length) {
   var item = happy[x].face;
   $(".content-happy").append("<a class='unoji'>"+item+"</a>");

   x++;
}

//expands hidden unojis

$('.expander-happy').simpleexpand({'defaultTarget':'.content-happy'});

//gets random CONFUSED 6 emojis

var i = 1;

while(i < 7) {
  r = Math.floor((Math.random() * confused.length-1) + 1);

  var item = confused[r].face;
  $(".random-confused").append("<a class='unoji'>"+item+"</a>");
  
  i++;
}

//puts all other CONFUSED unojis with display off in div
var x = 0;

while(x < confused.length) {
   var item = confused[x].face;
   $(".content-confused").append("<a class='unoji'>"+item+"</a>");

   x++;
}

//expands hidden unojis
$('.expander-confused').simpleexpand({'defaultTarget':'.content-confused'});


$(".unoji").hover(function () {
   $(this).toggleClass("hoverColor");
});

$(".unoji").click(function(){
	swal({   title: "Copied to clipboard!",   
	text: this.textContent,  
	timer: 1000 });
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