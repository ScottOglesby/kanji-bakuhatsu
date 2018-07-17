// can use github raw as CDN
// todo consider shinjitai and kyuujitai
// todo export graph shown to text
// todo show radical info if focused is radical
// todo include parents of all forms of radical糸
// todo shared kunyomi and meaning (sisters)
// todo find most interesting longest/biggest top 10 and recommend them in looked up
// todo find any duplicate kanji in trees
// todo find parts that are not further defined or linked (maybe python)
// todo standardize colors between CSS and vis.js

// test cases:
// 靴 - should not show synonym radicals for 化
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
function buildDescendantsGraph(kanji, parentId) {
	var myId = getNewNodeId();
	// make focused kanji slightly larger
	var fontSize = parentId == 0 ? 60 : 40;
	// use different color code for matching on readings
	// (implies that might be the purpose of this related kanji)
	var color = '#ACEDED';
	// focused kanji ID is 1
	// if this is not the focused one, check for:
	// * shared onyomi with focused
	// * is radical of focused (in any form)
	if (myId > 1) {
		mainKanji = nodes[0].label;
		if (onReadingsInCommon(kanji, mainKanji).length) {
			color = '#FFD9BA';
		}
		// mark focused kanji if it matches any form of the main kanji's radical
		if (mainKanji in kanji_defs) {
			// radical is an integer in def.
			var kangxi_id = kanji_defs[mainKanji].radical;
			var candidates = radical_list[kangxi_id].rad;
			for (candidate of candidates) {
				if (candidate == kanji) {
					color = '#B3F6B3';
					break;
				}
			}
		}
	}
	
	var nodeProperties = {
		'id': myId,
		'font': { size: fontSize },
		'color': color,
		'label': kanji
	};
	// unknown kanji: dashed border
	if (!(kanji in kanji_defs)) {
		nodeProperties.shapeProperties = {borderDashes:[5,5]};
		nodeProperties.color = '#FFBABA';
	}
	nodes.push(nodeProperties);
	if (parentId > 0) {
		edges.push({from: parentId, to: myId, arrows:'to', length:200})
	}

	// if this kanji is a radical (anywhere), add other forms but do not expand them
	var found_id = 0;  // < 1 means not found
	for (kangxi_id = 1; kangxi_id < radical_list.length; kangxi_id++) {
		var candidates = radical_list[kangxi_id].rad;
		for (candidate of candidates) {
			if (candidate == kanji) {
				found_id = kangxi_id;
				break;
			}
		}
	}
	if (found_id > 0) {
		var candidates = radical_list[found_id].rad;
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
				edges.push({from: isoform_id, to: myId, length:200})
			}
		}
	}	

	if (kanji_parts[kanji]) {
		for (subnode of kanji_parts[kanji]) {
			buildDescendantsGraph(subnode, myId);
		}    
	}
}

// find all parents of this kanji, but 1 level only
// we know ID is 1
function addParentNodes(kanji) {
	for (parent of Object.keys(kanji_parts)) {
		if (kanji_parts[parent].includes(kanji)) {
			var parentId = getNewNodeId();
			var color = '#C5B7F1';
			if (parentId > 1) {  // buggy; see 享
				if (onReadingsInCommon(parent, nodes[0].label).length) {
					color = '#FFD9BA';
				}
			}
			nodes.push({'id': parentId, 'font': { size: 40 }, color: color, 'label': parent});
			edges.push({from: parentId, to: 1, arrows:'to', length:200})
		}
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
					items.push("<span style='background: #FFD9BA'>" + reading + "</span>");
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

// uses global nodes[]
function addLegendNodes() {
	// these get centered, shit
}

// update the graph for your kanji of interest (which is always ID 1)
function reset_graph(kanji) {
	nodes = [];
	edges = [];
	globalId = 0;   // was 1
	buildDescendantsGraph(kanji, 0);
	addParentNodes(kanji);

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

// the chooser is disabled for now... too many kanji to choose from,
// and no easy way to index them.
function populate_chooser() {
	html = 'Choose: ';
	for (kanji of Object.keys(kanji_parts)) {
		html += "<a href=\"javascript:reset_graph('" + kanji + "');\">" + kanji + "</a> ";
	}
	document.getElementById('big_chooser').innerHTML = html;
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

//populate_chooser();
chooseRandom();