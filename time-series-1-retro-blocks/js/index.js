const numbers = [
	[1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1], // 0
	[1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1], // 1
	[1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1], // 2
	[1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1], // 3
	[1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1], // 4
	[1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1], // 5
	[1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1], // 6
	[1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], // 7
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1], // 8
	[1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1]  // 9
];

// time blocks

const blocks = [];
const pixels = document.querySelectorAll('.pixel');

for (let i = 0; i < 4; i++) {
	let g = document.getElementById('grid-' + (i + 1));
	blocks.push( g.querySelectorAll('.pixel') );
}

// setting a block to a number

const setNum = (block, num) => {
	let n = numbers[num];
	for (let i = 0; i < block.length; i++) {
		 block[i].classList[ n[i] === 1 ?  'add' : 'remove']('active');
	}
};

// setting the time

const time = {
	s: '',
	m: '',
	h: ''
};

const animator = () => {
	let d = new Date(),
		 h = d.getHours().toString(),
		 m = d.getMinutes().toString(),
		 s = d.getSeconds().toString();
	
	s = s.length === 1 ? '0' + s : s;
	m = m.length === 1 ? '0' + m : m;
	h = h.length === 1 ? '0' + h : h;
	
	if (s !== time.s) {
		for (let i = 0; i < pixels.length; i++) {
			pixels[i].classList[i < s ? 'add' : 'remove']('second');
		}
		time.s = s;
	}
	
	if (m !== time.m) {
		setNum(blocks[2], m[0]);
		setNum(blocks[3], m[1]);
		time.m = m;
	}
	
	if (h !== time.h) {
		setNum(blocks[0], h[0]);
		setNum(blocks[1], h[1]);
		time.h = h;
	}
 	window.requestAnimationFrame(animator)
}

// init
window.requestAnimationFrame(animator)