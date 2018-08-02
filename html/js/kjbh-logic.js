// can use github raw as CDN
// todo consider shinjitai and kyuujitai
// todo export graph shown to text
// todo show radical info if focused is radical
// todo include parents of all forms of radical 糸
// todo find most interesting longest/biggest top 10 and recommend them in looked up
// todo find any duplicate kanji in trees
// todo standardize colors between CSS and vis.js

// test cases:
// 靴 - should not show synonym radicals for 化, since it's not the radical of main
// ... I'm still undecided on that one

// colors:
// (cannot apply CSS to canvas nodes; only colors)
// main light blue: #ACEDED
// onyomi in common: #FFD9BA
// radical green: #B3F6B3

// globals for recursive function
var nodes = [];
var edges = [];
var globalId = 0; // was 1

// colors -- manually match to CSS for now
var COLOR_MAIN = '#ACEDED';
var COLOR_PARTOF = '#C5B7F1';
var COLOR_RADICAL = '#B3F6B3';
var COLOR_SHARED_ONYOMI = '#FFD9BA';
var COLOR_NO_DICT = '#FFBABA';
var COLOR_IJIDOUKUN = '#FFE270';

// ensure each kanji node gets a new ID
function getNewNodeId() {
	globalId++;
	return globalId;
}

// others
var container = document.getElementById('visgraph');
var network;
var mostRecentlyUsed = {};

// build graph based on selected, but downstream only.
// we assume there are no cycles in the graph and do not check.
// addParentNodes() for upstream logic is different
// 'main' is the large kanji at the center of the graph
// 'focused' is the kanji we are handling now (1st arg)
function buildDescendantsGraph(kanji, parentId) {
	var myId = getNewNodeId();
	// make main kanji slightly larger
	var fontSize = parentId == 0 ? 60 : 40;
	// thicker border for jouyou
	var borderThickness = 1;
	if (kanji in kanji_defs && kanji_defs[kanji].is_jouyou) {
		borderThickness = 4;
	}
	// radical ID == 0 means this kanji is not a radical
	var radical_id = 0; 
	
	// use different color code for matching on readings
	// (implies that might be the purpose of this related kanji)
	var color = COLOR_MAIN;
	// main kanji ID is 1
	// if this is not the main one, check for:
	// * shared onyomi with main
	// * is radical of main (in any form)
	if (myId > 1) {
		mainKanji = nodes[0].label;
		if (onReadingsInCommon(kanji, mainKanji).length) {
			color = COLOR_SHARED_ONYOMI;
		}
		// mark focused kanji if it matches any form of the main kanji's radical
		if (mainKanji in kanji_defs) {
			// radical is an integer in def.
			var kangxi_id = kanji_defs[mainKanji].radical;
			var candidates = radical_list[kangxi_id].rad;
			for (candidate of candidates) {
				if (candidate == kanji) {
					color = COLOR_RADICAL;
					radical_id = kangxi_id;  // save for drawOtherFormsOfRadical()
					break;
				}
			}
		}
	}
	
	var nodeProperties = {
		'id': myId,
		'font': { size: fontSize },
		'color': color,
		'label': kanji,
		'borderWidth': borderThickness
	};
	// unknown kanji: dashed border
	if (!(kanji in kanji_defs)) {
		nodeProperties.shapeProperties = {borderDashes:[5,5]};
		nodeProperties.color = COLOR_NO_DICT;
	}
	nodes.push(nodeProperties);
	if (parentId > 0) {
		edges.push({from: parentId, to: myId, arrows:'to', length:200})
	}

	// if this kanji is a radical of main (parentId == 1), 
	// add other forms but do not expand them
	if (parentId == 1 && radical_id > 0) {
		drawOtherFormsOfRadical(kanji, myId, radical_id);
	}

	// here's the recursion
	if (kanji_parts[kanji]) {
		for (subnode of kanji_parts[kanji]) {
			buildDescendantsGraph(subnode, myId);
		}    
	}
}

// add other forms of the radical (if any) to the graph, but do not expand them
function drawOtherFormsOfRadical(kanji, myId, radical_id) {
	var fontSize = 40;  // we are never the main kanji
	var color = COLOR_RADICAL;
	if (radical_id > 0) {
		var candidates = radical_list[radical_id].rad;
		for (candidate of candidates) {
			if (candidate != kanji) {
				isoform_id = getNewNodeId();
				var np = {
					'id': isoform_id,
					'font': { size: fontSize },
					'color': color,
					'label': candidate
				};
				nodes.push(np);
				edges.push({from: isoform_id, to: myId, 
							length:200, dashes: true, 
							label: '異字部首', font: {align: 'horizontal'}});
			}
		}
	}
}

// find all parents of this kanji, but 1 level only
// we know ID is 1
function addParentNodes(kanji) {
	for (parent of Object.keys(kanji_parts)) {
		if (kanji_parts[parent].includes(kanji)) {
			var parentId = getNewNodeId();
			var color = COLOR_PARTOF;
			if (parentId > 1) {  // buggy; see 享
				if (onReadingsInCommon(parent, nodes[0].label).length) {
					color = COLOR_SHARED_ONYOMI;
				}
			}
			nodes.push({'id': parentId, 'font': { size: 40 }, color: color, 'label': parent});
			edges.push({from: parentId, to: 1, arrows:'to', length:200})
		}
	}	
}

// find kanji with same kunyomi and meaning as main
// it could already be a component, but we assume not
// we know the ID is 1; call this only for main kanji
function addIjidoukun(mainKanji) {
	var sisters = new Set();
	for (group of ijidoukun) {
		if (group.kanji.includes(mainKanji)) {
			var exceptMain = group.kanji.filter(function(x) { return x !== mainKanji; });
			for (sister of exceptMain) {
				sisters.add(sister);
			}
		}
	}
	// now we have all our sisters
	for (let sister of sisters) {
		var color = COLOR_IJIDOUKUN;
		var id = getNewNodeId();
		var np = {
			'id': id,
			'font': { size: 40 },
			'color': color,
			'label': sister
		};
		nodes.push(np);
		edges.push({from: 1, to: id, length:200, dashes: true,
					label: '同訓', font: {align: 'horizontal'}})		
	}
}

// for figuring out on readings in common
function intersect(a, b) {
	var t;
	if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
	return a.filter(function (e) {
		return b.indexOf(e) > -1;
	});
}

function onReadingsInCommon(kanji1, kanji2) {
	if (!(kanji1 in kanji_defs) || !(kanji2 in kanji_defs)) {
		return [];
	}
	on1 = kanji_defs[kanji1].on_readings
	on2 = kanji_defs[kanji2].on_readings
	return intersect(on1, on2)
}

// kanji that are related, but the parts in common are not a kanji
function addBrothers() { }

// update details about clicked-on kanji (which can differ from central kanji)
// assumes graph is already built
// highlight shared onyomi
function update_details(kanji) {
	$('#kanji777').text(kanji);
	var html = "<p>Clicked on " + kanji + "</p>";
	if (kanji_defs[kanji]) {
		// highlight shared onyomi, compared to parent (if not parent)
		if (kanji == nodes[0].label) {
			onyomi = kanji_defs[kanji].on_readings.join(", ");
			$('#onyomi').text(onyomi);
		}
		else {
			items = [];
			inCommon = onReadingsInCommon(kanji, nodes[0].label);
			for (reading of kanji_defs[kanji].on_readings) {
				if (inCommon.indexOf(reading) > -1) {
					items.push("<span style='background: " + COLOR_SHARED_ONYOMI + 
						"'>" + reading + "</span>");
				}
				else {
					items.push(reading);
				}
			}
			$('#onyomi').html(items.join(", "));
		}
		kunyomi = kanji_defs[kanji].kun_readings.join(", ");
		$('#kunyomi').text(kunyomi);
		meanings = kanji_defs[kanji].meanings.join(", ");
		$('#meanings').text(meanings);
		jouyou = kanji_defs[kanji].is_jouyou;
		if (jouyou) {
			$('#jouyou-yesno').css('color', '#444');
		}
		else {
			$('#jouyou-yesno').css('color', '#efefef');
		}
	}
	else {
		var notFound = '情報なし';
		$('#onyomi').text(notFound);
		$('#kunyomi').text(notFound);
		$('#meanings').text(notFound);
		$('#jouyou-yesno').css('color', '#efefef');
	}		
}

// keep most recently used list of kanji, newest first	
function update_mru(kanji) {
	// first, remove any existing
	$('#recent a').remove();
	// update with recently focused
	unixTime = new Date().getTime();
	mostRecentlyUsed[kanji] = unixTime;
	keysSorted = Object.keys(mostRecentlyUsed).sort(
		function(a,b){
			return mostRecentlyUsed[b] - mostRecentlyUsed[a]
		}
	);
	for (key of keysSorted) {
		$('<a>',{
			text: key,
			title: 'Look up ' + key,
			href: '#',
			style: 'padding-right: 0.5em',
			click: function(){ reset_graph(this.text); return false; }
		}).appendTo('#recent');
	}
}

// update the graph for your kanji of interest (which is always ID 1)
function reset_graph(kanji) {
	nodes = [];
	edges = [];
	globalId = 0;   // was 1
	buildDescendantsGraph(kanji, 0);
	addParentNodes(kanji);
	addIjidoukun(kanji);

	var data = {
		nodes: new vis.DataSet(nodes),
		edges: new vis.DataSet(edges)
	};
	var options = {
		nodes: { shadow:true }, edges: { shadow: true }
	};
	var network = new vis.Network(container, data, options);
	// automatically draws
	update_details(kanji);
	update_mru(kanji);	  

	network.on("click", function (params) {
		var nodeId = params.nodes[0];
		var kanji = nodes[nodeId-1].label;
		update_details(kanji);
	});

	// 	network.on("dragEnd" is problematic: won't release mouse focus

	network.on("doubleClick", function (params) {
		var nodeId = params.nodes[0];
		var kanji = nodes[nodeId-1].label;
		reset_graph(kanji);
	});
	
	network.selectNodes([1]);		
}

// look for an interesting random kanji
function chooseRandom() {
	var keys = Object.keys(kanji_parts);
	var isBoring = true;
	while (isBoring) {
		var kanji = keys[ keys.length * Math.random() << 0];
		if (kanji_parts[kanji].length > 1) {
			break;
		}
	}
	reset_graph(kanji);
}

// find all kanji in lookup phrase and create links below.
// for convenience, reset the graph to the first kanji if found.
// note: click callback must refer to this.text; 'key' is no good, not a closure
function lookup() {
	// first, remove any existing
	$('#looked_up a').remove();
	//
	var chars = $("#lookup_kanji").val().split('');
	var alreadyReset = false;
	for (key of chars) {
		if (key in kanji_parts) {
			$('<a>',{
				text: key,
				title: 'Look up ' + key,
				href: '#',
				style: 'padding-right: 0.5em',
				click: function(){ reset_graph(this.text); return false; }
			}).appendTo('#looked_up');
			if (!alreadyReset) {
				reset_graph(key);
				alreadyReset = true;
			}
		}
	}
}

// main entry point
// todo: handle this better? query param?
var arg = window.location.hash;
if (arg.length) {
	var kanji = decodeURIComponent(arg.substr(1));
	if (kanji in kanji_parts) {
		reset_graph(kanji);
	}
}
else {
	chooseRandom();
}