

let rules = {

	"origin": ["The #color# #animal# of the #natureNoun# is called #name#"]
,	"color": ["orange","blue","white","black","grey","purple","indigo","turquoise"]
,	"animal": ["unicorn","raven","sparrow","scorpion","coyote","eagle","owl","lizard","zebra","duck","kitten"]
,	"natureNoun": ["ocean","mountain","forest","cloud","river","tree","sky","sea","desert"]
,	"name": ["Arjun","Yuuma","Darcy","Mia","Chiaki","Izzi","Azra","Lina"]

}

let spellbook = tracery.createGrammar(rules);
print("spelbook grammered");

let aStory = spellbook.createTrace();
aStory.expand();
let myString = aStory.flatten();

let myStory = spellbook.createFlattened();

let trace2 = spellbook.createTrace("A story about #color#");
let trace3 = spellbook.createTraceFromSymbol("name");

trace2.expand();
let myString2 = trace2.flatten();

trace3.expand();
let myString3 = trace3.flatten();

createP(myString);
createP(myString2);
createP(myString2);

print(mystring);
print(mystring2);
print(mystring3);
