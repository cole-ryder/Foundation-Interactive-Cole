let paragraph = document.querySelector('p.paragraph');
let rainbow = document.querySelector('div#rainbow');
let dark = document.querySelector('div#dark');

function toggleClass(){
	if(paragraph.className ==='paragraph'){
		paragraph.Classname ='rainbow';
	} else if(paragraph.className === 'rainbow'){
		paragraph.Classname ='dark';
	} else if (paragraph.className === 'dark'){
		paragraph.Classname ='paragraph';
	}
}

rainbow.addEventListener('click',toggleClass);
dark.addEventListener('click',toggleClass);