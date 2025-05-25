// Started off from
// Daniel Shiffman
// https://github.com/shiffman/A2Z-F20

// Tracery by Kate Compton
// https://github.com/galaxykate/tracery

let grammar;

// Here is the grammar
let data = {
	"smart1": [
		"smart",
		"connected",
		"IOT-enabled",
		"AI powered",
		"neural net based",
		"machine learning enabled",
		"block chain connected",
		"public ledger based",
		"crypto-backed"
	],
	"smart2": [
		"magical",
		"mutant",
		"celestial",
		"angelic",
		"fey",
		"mysterious",
		"dark-energy",
		"vibranium shielded",
		"adamantium cored"
	],
	"object1": [
		"egg",
		"spoon",
		"chair",
		"plate",
		"glass",
		"pen",
		"wine glass",
		"champagne flute",
		"ink pen",
		"book",
		"shoe",
		"sneaker",
		"stiletto heel",
		"jar",
		"jar of candy",
		"pickle jar",
		"hair band",
		"hair clip",
		"belt",
		"pencil",
		"bottle"
	],
	"verbs": [
		"connects",
		"uplinks",
		"powerlinks",
		"hotlinks",
		"couples",
		"bridges from",
		"interfaces",
		"networks",
		"ports from",
		"syncs"
	],

	"possOb": [
		"#poss# #object2#",
		"#poss# #object2#",
		"#poss2# #object2#",
		"#poss2# #object3#"
	],
	"poss": [
		"my",
		"your",
		"the",
		"the local",
		"the neighbourhood",
		"your spouse's",
		"your kids'",
		"your parents'",
		"your kids'",
		"your spouse's parents'"
	],
	"poss2": [
		"the",
		"the"
	],
	"object2": [
		"fridge",
		"TV",
		"microwave",
		"washing machine",
		"car",
		"home",
		"co-working space",
		"billboard"
	],
	"object3":[
		"international space station",
		"seat of government",
		"capital city",
		"country escape",
		"community pool",
		"beach shack"
	],
	"cloud": [
		"the cloud",
		"a data hub",
		"the server",
		"a server farm",
		"a database",
		"a pendrive",
		"a Google Drive",
		"Dropbox"
	],
	"cloud2": [
		"a cupboard full of printouts",
		"a hand written journal",
		"the reptilian fossil record",
		"geological strata",
		"the heiroglyphs inside the Great Pyramid",
		"ancient cave writings"
	],
	"protocol": [
		"bluetooth",
		"HTTPS",
		"5G",
		"LoRaWAN",
		"radio"
	],
	"protocol2": [
		"cosmic ray bursts",
		"gamma ray modulation",
		"FM radio",
		"disturbances in the force",
		"telepathic mind-meld",
		"inner ear bone conduction",
		"screaming into the void",
		"visions in the crystal ball"
	],
	"objective": [
		"to make fluffier omelettes",
		"to improve the quality of the local icecream",
		"to increase the efficiency of mental breakdown inducement",
		"to exploit the lowermost classes of society for better profit margins",
		"to induce the complete breakdown of critical thinking",
		"to prevent jaywalking on busy roads",
		"to prevent world war 3",
		"to safeguard online financial transactions",
		"to find inner peace",
		"to trigger world war 3"
	],
	"agency": [
		"the service provider",
		"the ISP",
		"the government",
		"the app",
		"the site",
		"the trackers",
		"the app store",
		"Google",
		"Apple",
		"Facebook",
		"Amazon",
		"the free market",
		"the platform"
	],
	"agency2": [
		"Russian spies",
		"hackers on the dark web",
		"Anonymous",
		"ancient Druids",
		"invading aliens",
		"peaceful aliens",
		"modern witches",
		"colonial officers"
	],
	"story1":
	[
		"#smart1.capitalize# #object1# that #verbs# #poss# #object2# to #cloud# using #protocol# #objective# while also enabling #agency# #objective#"
	],
	"story2": [
		"#smart2.capitalize# #object1# that #verbs# #possOb# to #cloud2# using #protocol2# #objective# while also enabling #agency2# #objective#"
	],
	"reply" : [
"What do you think of a", "We would like to invite you to the beta test of a", "Would you like to be an early adopter of a"
	],
	"start": [
		"#story1#",
		"#story1#",
		"#story2#"
	],
	"originReply": [
		"#story1Rep#",
		"#story1Rep#",
		"#story2Rep#"
	],
	"story1Rep":
	[
		"#smart1# #object1# that #verbs# #poss# #object2# to #cloud# using #protocol# #objective# while also enabling #agency# #objective#"
	],
	"story2Rep": [
		"#smart2# #object1# that #verbs# #poss# #object3# to #cloud2# using #protocol2# #objective# while also enabling #agency2# #objective#"
	]
}


//   const fonts = [
//   "'Playfair Display', serif",
//   "'Inter', sans-serif",
//   "'Fira Code', monospace",
//   "'Archivo Black', sans-serif",
//   "'Amatic SC', cursive",
//   "'Courier Prime', monospace"
// ];

const fontMap = [
  { name: 'Playfair Display', css: 'font-playfair' },
  { name: 'Inter', css: 'font-inter' },
  { name: 'Fira Code', css: 'font-fira' },
  { name: 'Archivo Black', css: 'font-archivo' },
  { name: 'Amatic SC', css: 'font-amatic' },
  { name: 'Courier Prime', css: 'font-courier' }
];


function setup() {
  noCanvas();
  // Make the grammar
  grammar = tracery.createGrammar(data);

  // A button to generate a new sentence
  let button = select('#generate');
  button.mousePressed(generate);

  // A button to clear everything
  let clearButton = select('#clearButton');
  clearButton.mousePressed(clearAll);
}

// // Remove everything
// function clearAll() {
//   let elements = selectAll('.text');
//   for (let i = 0; i < elements.length; i++) {
//     elements[i].remove();
//   }
// }

//clear all for Grid Card version
function clearAll() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
}


// generate for earlier line text version
// function generate() {
//   let expansion = grammar.flatten('#start#');
//   // console.log(grammar.expand('#start#'));
//   let par = createP(expansion);
//   let r = floor(random(100, 255));
//   let g = floor(random(150, 255));
//   let b = floor(random(200, 255));
//   par.style('background-color', 'rgb(' + r + ',' + g + ',' + b + ')');
//   par.class('text');
// }

//generate for card version
// function generate() {
//   const expansion = grammar.flatten('#start#');
//   const div = document.createElement('div');
//   div.className = 'card';

//   const r = Math.floor(Math.random() * 155 + 100);
//   const g = Math.floor(Math.random() * 105 + 150);
//   const b = Math.floor(Math.random() * 55 + 200);
//   div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

//   div.textContent = expansion;
//   document.getElementById('grid').appendChild(div);
// }

//cards and variable fonts with custom styling

function generate() {
  const expansion = grammar.flatten('#start#');
  const div = document.createElement('div');
  div.classList.add('card');

  // Apply background color
  const r = Math.floor(Math.random() * 155 + 100);
  const g = Math.floor(Math.random() * 105 + 150);
  const b = Math.floor(Math.random() * 55 + 200);
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Apply random font class
  const font = fontMap[Math.floor(Math.random() * fontMap.length)];
  div.classList.add(font.css);

  // Insert text
  div.textContent = expansion;

  // Append to grid
  document.getElementById('grid').appendChild(div);
}