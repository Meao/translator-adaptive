/*
	Telephasic by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			normal:    [ '1081px',  '1280px'  ],
			narrow:    [ '821px',   '1080px'  ],
			narrower:  [ '737px',   '820px'   ],
			mobile:    [ '481px',   '736px'   ],
			mobilep:   [ null,      '480px'   ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 300,
			alignment: 'center',
			noOpenerFade: true
		});

	// Nav.

		// Buton.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
					//	'<a href="index.html" class="link depth-0">Home</a>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					resetScroll: true,
					resetForms: true,
					side: 'top',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

var input = document.querySelectorAll('textarea')[0];
 characterCount = document.querySelector('#characterCount'),
  wordCount = document.querySelector('#wordCount'),
 dollarCount = document.querySelector('#dollarCount'),
   euroCount = document.querySelector('#euroCount'),
   rubCount = document.querySelector('#rubCount');
// updating the displayed stats after every keypress
input.addEventListener('keyup', function() {

  //keeping the console clean to make only the latest data visible
  console.clear();

  // character count
  // just displaying the input length as everything is a character
 /*  characterCount.innerHTML = input.value.length;  */
  // word counter logic
  // \b matches word boundaries i.e. starting or ending of a word
// \w+  match word characters. + makes it match one or more characters
// + at the end of the pattern matches one or more occurrences of the whole pattern
// i makes it case insensitive, g makes it do a global search instead of stopping at first match
  var words = input.value.split(/[ |-|'|.|!|?]+/g);
   console.log(words);
  if (words) {
    wordCount.innerHTML = words.length - 1;
  } else {
    wordCount.innerHTML = 0;
  }
  // price counter logic
   dollarCount.innerHTML = Math.ceil(words.length*0.0157);
   euroCount.innerHTML = Math.ceil(words.length*0.0134);
   rubCount.innerHTML = Math.ceil(words.length*0.75);
});
function myFunction(text1,text2) {
  document.getElementById("source").innerHTML = text1;
  document.getElementById("result").innerHTML = text2;
};
function copyFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
//  alert("Copied the text: " + copyText.value);
};
