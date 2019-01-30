/*
	Make changes to references and dictionaries that are generated from
	third-party sources. These may include:
	* kanji_defs (from KANJIDIC project dictionary)
	* ijidoukun (shared kun reading and meaning - from dictionary cross-ref)
	* radical_list (from Wikipedia radical list)
	This allows for future changes and updates without losing these fixes.

	In the HTML page, include this script after all the above scripts and definitions.
*/

// Town and mound radicals (which look the same) were under multiple Unicode points
// u+2ed6
kanji_defs['⻖'] = {
	"on_readings": [],
	"kun_readings": [],
	"meanings": [
		"mound radical (left)"
	],
	"is_jouyou": false,
};
// u+2ecf
kanji_defs['⻏'] = {
	"on_readings": [],
	"kun_readings": [],
	"meanings": [
		"town radical (right)"
	],
	"is_jouyou": false,
};
// there was no definition for this radical
kanji_defs['訁'] = {
	"on_readings": [],
	"kun_readings": [],
	"meanings": [
		"combining form of speech radical (言)"
	],
	"is_jouyou": false,
};
// radical definitions use the wrong Unicode point for lower heart
radical_list[61] = {
	"rad": ["心", "忄", "㣺"],
	"def": "heart (りっしんべん risshinben, 立心偏)"
}