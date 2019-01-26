// from https://en.wikipedia.org/wiki/List_of_kanji_radicals_by_stroke_count
// position in the array is Kangxi radical index (1 to 214)
// mostly generated from source except fixups for left and right mound/city radical
var radical_list = [
{
	"rad": ["zero"],
	"def": "nothing here; kangxi index starts at 1" 
},
{
	"rad": ["一"],
	"def": "one (いち ichi, 一)" 
},
{
	"rad": ["丨"],
	"def": "line, stick (ぼう bō, 棒)" 
},
{
	"rad": ["丶"],
	"def": "dot (てん ten, 点)" 
},
{
	"rad": ["丿"],
	"def": "bend, possessive particle no (の no, ノ)" 
},
{
	"rad": ["乙", "乚"],
	"def": "second, latter (おつ otsu, 乙)" 
},
{
	"rad": ["亅"],
	"def": "hook, hooked stick (はねぼう hanebō, 撥棒)" 
},
{
	"rad": ["二"],
	"def": "two (に ni, 二)" 
},
{
	"rad": ["亠"],
	"def": "pot lid (なべぶた nabebuta, 鍋蓋)" 
},
{
	"rad": ["人", "亻"],
	"def": "human (ひと hito, 人)" 
},
{
	"rad": ["儿"],
	"def": "legs, human underneath (にんにょう ninnyō, 人繞)" 
},
{
	"rad": ["入"],
	"def": "enter (いる iru, 入)" 
},
{
	"rad": ["八", "ハ"],
	"def": "eight, eight-head (はちがしら hachigashira, 八頭)" 
},
{
	"rad": ["冂"],
	"def": "inverted box, window frame (まきがまえ makigamae, 冏構)" 
},
{
	"rad": ["冖"],
	"def": "cover, wa crown (わかんむり wakanmuri, ワ冠)" 
},
{
	"rad": ["冫"],
	"def": "ice, 2-stroke water (にすい nisui, 二水)" 
},
{
	"rad": ["几"],
	"def": "desk (つくえ tsukue, 机)" 
},
{
	"rad": ["凵"],
	"def": "container, inbox (うけばこ ukebako, 受け箱)" 
},
{
	"rad": ["刀", "刂", "⺈"],
	"def": "sword (かたな katana, 刀)" 
},
{
	"rad": ["力"],
	"def": "power, force (ちから chikara, 力)" 
},
{
	"rad": ["勹"],
	"def": "embrace, wrap frame (つつみがまえ tsutsumigamae, 包構)" 
},
{
	"rad": ["匕"],
	"def": "spoon hi (さじのひ sajinohi, 匕のヒ)" 
},
{
	"rad": ["匚"],
	"def": "box frame (はこがまえ hakogamae, 匚構)" 
},
{
	"rad": ["亡", "匸"],
	"def": "dead, hiding frame (かくしがまえ kakushigamae, 隠構)" 
},
{
	"rad": ["十"],
	"def": "ten, complete (じゅう jū, 十)" 
},
{
	"rad": ["卜", "⼘", "⺊"],
	"def": "divination to (ぼくのと bokunoto, 卜のト)" 
},
{
	"rad": ["卩", "㔾"],
	"def": "seal (ふしづくり fushidzukuri, 節旁)" 
},
{
	"rad": ["厂"],
	"def": "cliff (がんだれ gandare, 雁垂)" 
},
{
	"rad": ["厶"],
	"def": "private (む mu)" 
},
{
	"rad": ["又"],
	"def": "again, right hand (また mata)" 
},
{
	"rad": ["口"],
	"def": "mouth, opening (くち kuchi)" 
},
{
	"rad": ["囗"],
	"def": "enclosure (くにがまえ kunigamae, 国構)" 
},
{
	"rad": ["土"],
	"def": "earth (つち tsuchi)" 
},
{
	"rad": ["士"],
	"def": "scholar, bachelor (さむらい samurai, 侍)" 
},
{
	"rad": ["夂"],
	"def": "winter (ふゆがしら fuyugashira, 冬頭)" 
},
{
	"rad": ["夊"],
	"def": "winter variant (すいにょう suinyou, 夊繞)" 
},
{
	"rad": ["夕"],
	"def": "evening, sunset (ゆうべ yūbe)" 
},
{
	"rad": ["大"],
	"def": "big, very (だい dai)" 
},
{
	"rad": ["女"],
	"def": "woman, female (おんな onna)" 
},
{
	"rad": ["子"],
	"def": "child, seed (こ ko)" 
},
{
	"rad": ["宀"],
	"def": "roof (うかんむり ukanmuri, ウ冠)" 
},
{
	"rad": ["寸"],
	"def": "sun (unit of measurement) (すん sun)" 
},
{
	"rad": ["小", "⺌", "⺍"],
	"def": "small, insignificant (ちいさい chīsai, 小さい)" 
},
{
	"rad": ["尢", "尤", "尣"],
	"def": "lame (まげあし mageashi)" 
},
{
	"rad": ["尸"],
	"def": "corpse (しかばね shikabane, 屍)" 
},
{
	"rad": ["屮"],
	"def": "sprout (てつ tetsu)" 
},
{
	"rad": ["山"],
	"def": "mountain (やま yama)" 
},
{
	"rad": ["巛", "川", "巜"],
	"def": "river (かわ kawa)" 
},
{
	"rad": ["工"],
	"def": "work (たくみ takumi)" 
},
{
	"rad": ["已", "己", "巳"],
	"def": "oneself (おのれ onore)" 
},
{
	"rad": ["巾"],
	"def": "turban, scarf (はば haba)" 
},
{
	"rad": ["干"],
	"def": "dry (ほし hoshi)" 
},
{
	"rad": ["幺"],
	"def": "short thread (いとがしら itogashira, 糸頭)" 
},
{
	"rad": ["广"],
	"def": "dotted cliff (まだれ madare, 麻垂)" 
},
{
	"rad": ["廴"],
	"def": "long stride (いんにょう innyō, 延繞)" 
},
{
	"rad": ["廾"],
	"def": "two hands, twenty (にじゅうあし nijūashi, 二十脚)" 
},
{
	"rad": ["弋"],
	"def": "ceremony, shoot, arrow (しきがまえ shikigamae, 式構)" 
},
{
	"rad": ["弓"],
	"def": "bow (ゆみ yumi)" 
},
{
	"rad": ["彐", "彑"],
	"def": "pig's head (けいがしら keigashira, 彑頭)" 
},
{
	"rad": ["彡"],
	"def": "hair, bristle, stubble, beard (さんづくり sandzukuri, 三旁)" 
},
{
	"rad": ["彳"],
	"def": "step (ぎょうにんべん gyouninben, 行人偏)" 
},
{
	"rad": ["心", "忄", "⺗"],
	"def": "heart (りっしんべん risshinben, 立心偏)" 
},
{
	"rad": ["戈"],
	"def": "spear, halberd (かのほこ kanohoko)" 
},
{
	"rad": ["戸", "戶", "户"],
	"def": "door, house (とびらのと tobiranoto)" 
},
{
	"rad": ["手", "扌", "龵"],
	"def": "hand (て te)" 
},
{
	"rad": ["支"],
	"def": "branch (しにょう shinyō, 支繞)" 
},
{
	"rad": ["攵", "攴"],
	"def": "strike, whip (のぶん nobun, ノ文)" 
},
{
	"rad": ["文"],
	"def": "script, literature (ぶん bun)" 
},
{
	"rad": ["斗"],
	"def": "dipper, measuring scoop (とます tomasu)" 
},
{
	"rad": ["斤"],
	"def": "axe (おの ono, 斧)" 
},
{
	"rad": ["方"],
	"def": "way, square, raft (ほう hō)" 
},
{
	"rad": ["无", "旡"],
	"def": "have not (むにょう munyō)" 
},
{
	"rad": ["日"],
	"def": "sun, day (にち nichi)" 
},
{
	"rad": ["曰"],
	"def": "say (いわく iwaku)" 
},
{
	"rad": ["月", "⺝"],
	"def": "moon, month; body, flesh (つき tsuki)" 
},
{
	"rad": ["木"],
	"def": "tree (き ki)" 
},
{
	"rad": ["欠"],
	"def": "yawn, lack (あくび akubi)" 
},
{
	"rad": ["止"],
	"def": "stop (とめる tomeru)" 
},
{
	"rad": ["歹", "歺"],
	"def": "death, decay (がつへん gatsuhen, 歹偏)" 
},
{
	"rad": ["殳"],
	"def": "weapon, lance (ほこつくり hokotsukuri)" 
},
{
	"rad": ["毋", "母", "⺟"],
	"def": "do not; mother (なかれ-nakare; はは haha)" 
},
{
	"rad": ["比"],
	"def": "compare, compete (くらべる kuraberu)" 
},
{
	"rad": ["毛"],
	"def": "fur, hair (け ke)" 
},
{
	"rad": ["氏"],
	"def": "clan (うじ uji)" 
},
{
	"rad": ["气"],
	"def": "steam, breath (きがまえ kigamae, 気構)" 
},
{
	"rad": ["水", "氵", "氺"],
	"def": "water (みず mizu)" 
},
{
	"rad": ["火", "灬"],
	"def": "fire (ひ hi)" 
},
{
	"rad": ["爪", "爫", "⺥", "⺤"],
	"def": "claw, nail, talon (つめ tsume)" 
},
{
	"rad": ["父"],
	"def": "father (ちち chichi)" 
},
{
	"rad": ["爻"],
	"def": "mix, twine, cross (こう kō)" 
},
{
	"rad": ["爿", "丬"],
	"def": "split wood (しょうへん shōhen, 爿偏)" 
},
{
	"rad": ["片"],
	"def": "(a) slice (かた kata)" 
},
{
	"rad": ["牙"],
	"def": "fang (きばへん kibahen, 牙偏)" 
},
{
	"rad": ["牛", "牜", "⺧"],
	"def": "cow (うし ushi)" 
},
{
	"rad": ["犬", "犭"],
	"def": "dog (いぬ inu)" 
},
{
	"rad": ["玄"],
	"def": "dark, profound (げん gen)" 
},
{
	"rad": ["王", "玉", "玊", "⺩"],
	"def": "king; ball, jade (おう-ō; たま tama)" 
},
{
	"rad": ["瓜"],
	"def": "melon (うり uri)" 
},
{
	"rad": ["瓦"],
	"def": "tile (かわら kawara)" 
},
{
	"rad": ["甘"],
	"def": "sweet (あまい amai)" 
},
{
	"rad": ["生"],
	"def": "life (うまれる umareru)" 
},
{
	"rad": ["用", "甩"],
	"def": "use; (throw) (もちいる mochīru)" 
},
{
	"rad": ["田"],
	"def": "field (た ta)" 
},
{
	"rad": ["疋", "⺪"],
	"def": "bolt of cloth (ひき hiki)" 
},
{
	"rad": ["疒"],
	"def": "sickness (やまいだれ yamaidare, 病垂)" 
},
{
	"rad": ["癶"],
	"def": "footsteps (はつがしら hatsugashira, 発頭)" 
},
{
	"rad": ["白"],
	"def": "white (しろ shiro)" 
},
{
	"rad": ["皮"],
	"def": "skin (けがわ kegawa, 毛皮)" 
},
{
	"rad": ["皿"],
	"def": "dish (さら sara)" 
},
{
	"rad": ["目"],
	"def": "eye (め me)" 
},
{
	"rad": ["矛"],
	"def": "spear, pike (むのほこ munohoko)" 
},
{
	"rad": ["矢"],
	"def": "arrow (や ya)" 
},
{
	"rad": ["石"],
	"def": "stone (いし ishi)" 
},
{
	"rad": ["示", "礻"],
	"def": "altar, display (しめす shimesu)" 
},
{
	"rad": ["禸"],
	"def": "track (ぐうのあし gūnoashi)" 
},
{
	"rad": ["禾"],
	"def": "two-branch tree (のぎ nogi, ノ木)" 
},
{
	"rad": ["穴"],
	"def": "cave (あな ana)" 
},
{
	"rad": ["立"],
	"def": "stand, erect (たつ tatsu)" 
},
{
	"rad": ["竹", "⺮"],
	"def": "bamboo (たけ take)" 
},
{
	"rad": ["米"],
	"def": "rice (こめ kome)" 
},
{
	"rad": ["糸", "糹"],
	"def": "thread, string (いと ito)" 
},
{
	"rad": ["缶"],
	"def": "can, earthenware jar (かん kan)" 
},
{
	"rad": ["罒", "网", "罓", "⺲" ,"⺳"],
	"def": "net (あみがしら amigashira, 網頭)" 
},
{
	"rad": ["羊", "⺶", "⺷"],
	"def": "sheep (ひつじ hitsuji)" 
},
{
	"rad": ["羽"],
	"def": "feather, wing (はね hane)" 
},
{
	"rad": ["耂", "老", "⺹"],
	"def": "old (ろう rō)" 
},
{
	"rad": ["而"],
	"def": "rake, beard (しかして shikashite)" 
},
{
	"rad": ["耒"],
	"def": "plow (らいすき raisuki)" 
},
{
	"rad": ["耳"],
	"def": "ear (みみ mimi)" 
},
{
	"rad": ["聿", "⺻"],
	"def": "brush (ふでづくり fudezukuri, 聿旁)" 
},
{
	"rad": ["肉", "⺼", "月"],
	"def": "meat (にく niku)" 
},
{
	"rad": ["臣"],
	"def": "minister, official (しん shin)" 
},
{
	"rad": ["自"],
	"def": "oneself (みずから mizukara)" 
},
{
	"rad": ["至"],
	"def": "arrive (いたる itaru)" 
},
{
	"rad": ["臼"],
	"def": "mortar (うす usu)" 
},
{
	"rad": ["舌"],
	"def": "tongue (した shita)" 
},
{
	"rad": ["舛"],
	"def": "opposite (ます masu)" 
},
{
	"rad": ["舟"],
	"def": "boat (ふね fune)" 
},
{
	"rad": ["艮"],
	"def": "stopping (うしとら ushitora, 丑寅)" 
},
{
	"rad": ["色"],
	"def": "colour, prettiness (いろ iro)" 
},
{
	"rad": ["艹", "艸", "䒑"],
	"def": "grass, vegetation (くさ kusa, 草)" 
},
{
	"rad": ["虍"],
	"def": "tiger stripes (とらかんむり torakanmuri, 虎冠)" 
},
{
	"rad": ["虫"],
	"def": "insect (むし mushi)" 
},
{
	"rad": ["血"],
	"def": "blood (ち chi)" 
},
{
	"rad": ["行"],
	"def": "go, do (ぎょう gyō)" 
},
{
	"rad": ["衣", "衤"],
	"def": "clothes (ころも koromo)" 
},
{
	"rad": ["西", "襾", "覀"],
	"def": "west (にし nishi)" 
},
{
	"rad": ["見"],
	"def": "see (みる miru)" 
},
{
	"rad": ["角"],
	"def": "horn (つの tsuno)" 
},
{
	"rad": ["言", "訁"],
	"def": "speech (こと koto)" 
},
{
	"rad": ["谷"],
	"def": "valley (たに tani)" 
},
{
	"rad": ["豆"],
	"def": "bean (まめ mame)" 
},
{
	"rad": ["豕"],
	"def": "pig (いのこ inoko, 猪子)" 
},
{
	"rad": ["豸"],
	"def": "cat, badger (むじな mujina, 狢)" 
},
{
	"rad": ["貝"],
	"def": "shell (かい kai)" 
},
{
	"rad": ["赤"],
	"def": "red, bare (あか aka)" 
},
{
	"rad": ["走", "赱"],
	"def": "run (はしる hashiru)" 
},
{
	"rad": ["足", "⻊"],
	"def": "foot (あし ashi)" 
},
{
	"rad": ["身"],
	"def": "body (み mi)" 
},
{
	"rad": ["車"],
	"def": "cart, car (くるま kuruma)" 
},
{
	"rad": ["辛"],
	"def": "spicy, bitter (からい karai)" 
},
{
	"rad": ["辰"],
	"def": "morning (しんのたつ shinnotatsu, 辰のたつ)" 
},
{
	"rad": ["⻌", "辵", "辶"],
	"def": "walk (しんにゅう shinnyū, 之繞)" 
},
{
	"rad": ["邑", "⻏"],
	"def": "town (阝 right) (むら mura)" 
},
{
	"rad": ["酉"],
	"def": "sake (rice-based alcoholic beverage) (とり tori)" 
},
{
	"rad": ["釆"],
	"def": "divide, distinguish, choose (のごめ nogome, ノ米)" 
},
{
	"rad": ["里"],
	"def": "village, mile (さと sato)" 
},
{
	"rad": ["金", "釒"],
	"def": "metal, gold (かね kane)" 
},
{
	"rad": ["長", "镸"],
	"def": "long, grow; leader (ながい-nagai; ちょう chō)" 
},
{
	"rad": ["門"],
	"def": "gate (もん mon)" 
},
{
	"rad": ["阜", "⻖"],
	"def": "mound, dam (阝 left) (ぎふのふ gifunofu, 岐阜の阜)" 
},
{
	"rad": ["隶"],
	"def": "slave, capture (れいづくり reidzukuri, 隷旁)" 
},
{
	"rad": ["隹"],
	"def": "old bird (ふるとり furutori, 古鳥)" 
},
{
	"rad": ["雨", "⻗"],
	"def": "rain (あめ ame)" 
},
{
	"rad": ["青", "靑"],
	"def": "green, blue (あお ao)" 
},
{
	"rad": ["非"],
	"def": "wrong (あらず arazu)" 
},
{
	"rad": ["面", "靣"],
	"def": "face (めん men)" 
},
{
	"rad": ["革"],
	"def": "leather, rawhide (かくのかわ kakunokawa)" 
},
{
	"rad": ["韋"],
	"def": "tanned leather (なめしがわ nameshigawa)" 
},
{
	"rad": ["韭"],
	"def": "leek (にら nira)" 
},
{
	"rad": ["音"],
	"def": "sound (おと oto)" 
},
{
	"rad": ["頁"],
	"def": "big shell (おおがい ōgai, 大貝)" 
},
{
	"rad": ["風"],
	"def": "wind (かぜ kaze)" 
},
{
	"rad": ["飛"],
	"def": "fly (とぶ tobu)" 
},
{
	"rad": ["食", "飠"],
	"def": "eat, food (しょく shoku)" 
},
{
	"rad": ["首"],
	"def": "neck, head (くび kubi)" 
},
{
	"rad": ["香"],
	"def": "fragrant (においこう nioikō)" 
},
{
	"rad": ["馬"],
	"def": "horse (うま uma)" 
},
{
	"rad": ["骨"],
	"def": "bone (ほね hone)" 
},
{
	"rad": ["高", "髙"],
	"def": "tall, high (たかい takai)" 
},
{
	"rad": ["髟"],
	"def": "hair (かみがしら kamigashira, 髪頭)" 
},
{
	"rad": ["鬥"],
	"def": "fight (とうがまえ tōgamae, 闘構)" 
},
{
	"rad": ["鬯"],
	"def": "herbs, sacrificial wine (ちょう chō)" 
},
{
	"rad": ["鬲"],
	"def": "tripod, cauldron (かなえ kanae)" 
},
{
	"rad": ["鬼"],
	"def": "ghost, demon (おに oni)" 
},
{
	"rad": ["魚"],
	"def": "fish (うお uo)" 
},
{
	"rad": ["鳥"],
	"def": "bird (とり tori)" 
},
{
	"rad": ["鹵"],
	"def": "salt (ろ ro)" 
},
{
	"rad": ["鹿"],
	"def": "deer (しか shika)" 
},
{
	"rad": ["麦", "麥"],
	"def": "wheat (むぎ mugi, 麦)" 
},
{
	"rad": ["麻"],
	"def": "hemp, flax (あさ asa)" 
},
{
	"rad": ["黄", "黃"],
	"def": "yellow (きいろ kīro, 黄色)" 
},
{
	"rad": ["黍"],
	"def": "millet (きび kibi)" 
},
{
	"rad": ["黒", "黑"],
	"def": "black (くろ kuro)" 
},
{
	"rad": ["黹"],
	"def": "embroidery, needlework (ふつ futsu, 黻)" 
},
{
	"rad": ["黽"],
	"def": "frog, amphibian (べん ben)" 
},
{
	"rad": ["鼎"],
	"def": "sacrificial tripod (かなえ kanae)" 
},
{
	"rad": ["鼓"],
	"def": "drum (つづみ tsudzumi)" 
},
{
	"rad": ["鼠"],
	"def": "rat, mouse (ねずみ nezumi)" 
},
{
	"rad": ["鼻"],
	"def": "nose (はな hana)" 
},
{
	"rad": ["齊"],
	"def": "even, uniformly (せい sei, 斉)" 
},
{
	"rad": ["歯", "齒"],
	"def": "tooth, molar (は ha)" 
},
{
	"rad": ["竜", "龍"],
	"def": "dragon (りゅう ryū)" 
},
{
	"rad": ["亀", "龜"],
	"def": "turtle, tortoise (かめ kame)" 
},
{
	"rad": ["龠"],
	"def": "flute (やく yaku)" 
}
];