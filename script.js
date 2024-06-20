// script.js
const hexagrams = [
    { name: "乾", guaCi: "元亨利貞", details: "方向：南\n時間：上午\n顏色：紅色\n屬性：陽性\n吉凶：大吉\n建議：適合執行" },
    { name: "坤", guaCi: "元亨利牝馬之貞", details: "方向：北\n時間：晚上\n顏色：黑色\n屬性：陰性\n吉凶：中吉\n建議：適合隨順" },
    { name: "屯", guaCi: "元亨，利貞。勿用有攸往，利建侯。", details: "方向：東北\n時間：清晨\n顏色：綠色\n屬性：陰性\n吉凶：中吉\n建議：適合開始新事物" },
    { name: "蒙", guaCi: "亨。匪我求童蒙，童蒙求我。初筮告，再三瀆，瀆則不告。利貞。", details: "方向：西南\n時間：傍晚\n顏色：黃色\n屬性：陰性\n吉凶：小吉\n建議：謹慎行事" },
    { name: "需", guaCi: "有孚，光亨，貞吉。利涉大川。", details: "方向：北\n時間：夜晚\n顏色：黑色\n屬性：陽性\n吉凶：中吉\n建議：等待機會" },
    { name: "訟", guaCi: "有孚窒惕，中吉，終凶。利見大人，不利涉大川。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陰性\n吉凶：小凶\n建議：避免爭論" },
    { name: "師", guaCi: "貞，丈人吉，无咎。", details: "方向：西北\n時間：上午\n顏色：白色\n屬性：陽性\n吉凶：中吉\n建議：追隨良師" },
    { name: "比", guaCi: "吉。原筮，元永貞，无咎。不寧方來，後夫凶。", details: "方向：東北\n時間：早晨\n顏色：綠色\n屬性：陰性\n吉凶：大吉\n建議：合群協作" },
    { name: "小畜", guaCi: "亨。密雲不雨，自我西郊。", details: "方向：東南\n時間：下午\n顏色：藍色\n屬性：陽性\n吉凶：小吉\n建議：積小成多" },
    { name: "履", guaCi: "履虎尾，不咥人。亨。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：中吉\n建議：小心謹慎" },
    { name: "泰", guaCi: "小往大來，吉，亨。", details: "方向：東南\n時間：下午\n顏色：綠色\n屬性：陽性\n吉凶：大吉\n建議：順勢而為" },
    { name: "否", guaCi: "否之匪人，不利君子貞，大往小來。", details: "方向：西北\n時間：早晨\n顏色：白色\n屬性：陰性\n吉凶：小凶\n建議：避險守成" },
    { name: "同人", guaCi: "同人于野，亨。利涉大川，利君子貞。", details: "方向：東\n時間：早晨\n顏色：綠色\n屬性：陽性\n吉凶：中吉\n建議：合作共贏" },
    { name: "大有", guaCi: "元亨。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：大吉\n建議：大膽行動" },
    { name: "謙", guaCi: "亨，君子有終。", details: "方向：西南\n時間：傍晚\n顏色：黃色\n屬性：陰性\n吉凶：大吉\n建議：謙虛謹慎" },
    { name: "豫", guaCi: "利建侯行師。", details: "方向：東北\n時間：早晨\n顏色：綠色\n屬性：陽性\n吉凶：中吉\n建議：積極準備" },
    { name: "隨", guaCi: "元亨，利貞，无咎。", details: "方向：西\n時間：傍晚\n顏色：白色\n屬性：陰性\n吉凶：中吉\n建議：隨機應變" },
    { name: "蠱", guaCi: "元亨，利涉大川。先甲三日，後甲三日。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：中吉\n建議：及時修正" },
    { name: "臨", guaCi: "元亨，利貞。至于八月有凶。", details: "方向：東北\n時間：早晨\n顏色：綠色\n屬性：陽性\n吉凶：小吉\n建議：提前準備" },
    { name: "觀", guaCi: "盥而不薦，有孚顒若。", details: "方向：西南\n時間：傍晚\n顏色：黃色\n屬性：陰性\n吉凶：中吉\n建議：觀察形勢" },
    { name: "噬嗑", guaCi: "亨。利用獄。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：小吉\n建議：嚴格執法" },
    { name: "賁", guaCi: "亨。小利有攸往。", details: "方向：東\n時間：早晨\n顏色：綠色\n屬性：陰性\n吉凶：中吉\n建議：適度裝飾" },
    { name: "剝", guaCi: "不利有攸往。", details: "方向：北\n時間：夜晚\n顏色：黑色\n屬性：陰性\n吉凶：小凶\n建議：守成待機" },
    { name: "復", guaCi: "亨。出入无疾，朋來无咎。反復其道，七日來復。利有攸往。", details: "方向：東\n時間：早晨\n顏色：綠色\n屬性：陽性\n吉凶：大吉\n建議：重新開始" },
    { name: "无妄", guaCi: "元亨利貞。其匪正有眚，不利有攸往。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：中吉\n建議：遵循本心" },
    { name: "大畜", guaCi: "利貞。不家食吉，利涉大川。", details: "方向：西\n時間：下午\n顏色：白色\n屬性：陽性\n吉凶：中吉\n建議：積蓄力量" },
    { name: "頤", guaCi: "貞吉。觀頤，自求口實。", details: "方向：東\n時間：早晨\n顏色：綠色\n屬性：陰性\n吉凶：小吉\n建議：自我養護" },
    { name: "大過", guaCi: "棟橈，利有攸往，亨。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：中吉\n建議：勇於突破" },
    { name: "坎", guaCi: "習坎，有孚，維心亨，行有尚。", details: "方向：北\n時間：夜晚\n顏色：黑色\n屬性：陰性\n吉凶：小吉\n建議：迎難而上" },
    { name: "離", guaCi: "利貞。亨。畜牝牛吉。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：大吉\n建議：保持光明" },
    { name: "咸", guaCi: "亨，利貞。取女吉。", details: "方向：西\n時間：下午\n顏色：白色\n屬性：陽性\n吉凶：中吉\n建議：感應共鳴" },
    { name: "恆", guaCi: "亨，无咎，利貞。利有攸往。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：大吉\n建議：恆心堅持" },
    { name: "遯", guaCi: "亨，小利貞。", details: "方向：北\n時間：夜晚\n顏色：黑色\n屬性：陰性\n吉凶：中吉\n建議：退避三舍" },
    { name: "大壯", guaCi: "利貞。", details: "方向：東\n時間：早晨\n顏色：綠色\n屬性：陽性\n吉凶：大吉\n建議：強化實力" },
    { name: "晉", guaCi: "康侯用錫馬蕃庶，晝日三接。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：大吉\n建議：積極進取" },
    { name: "明夷", guaCi: "利艱貞。", details: "方向：北\n時間：夜晚\n顏色：黑色\n屬性：陰性\n吉凶：小凶\n建議：隱忍待時" },
    { name: "家人", guaCi: "利女貞。", details: "方向：西南\n時間：傍晚\n顏色：黃色\n屬性：陰性\n吉凶：大吉\n建議：家庭和睦" },
    { name: "睽", guaCi: "小事吉。", details: "方向：東南\n時間：早晨\n顏色：綠色\n屬性：陽性\n吉凶：小吉\n建議：求同存異" },
    { name: "蹇", guaCi: "利西南，不利東北。利見大人。貞吉。", details: "方向：東北\n時間：早晨\n顏色：綠色\n屬性：陰性\n吉凶：中吉\n建議：面對困難" },
    { name: "解", guaCi: "利西南，无所往，其來復吉。有攸往，夙吉。", details: "方向：西南\n時間：傍晚\n顏色：黃色\n屬性：陽性\n吉凶：大吉\n建議：解除困難" },
    { name: "損", guaCi: "有孚，元吉，无咎。可貞。利有攸往。曷之用，二簋可用享。", details: "方向：北\n時間：夜晚\n顏色：黑色\n屬性：陰性\n吉凶：小吉\n建議：節制消耗" },
    { name: "益", guaCi: "利有攸往，利涉大川。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：大吉\n建議：增益擴展" },
    { name: "夬", guaCi: "揚于王庭，孚號，有厲。告自邑，不利即戎，利有攸往。", details: "方向：東\n時間：早晨\n顏色：綠色\n屬性：陽性\n吉凶：中吉\n建議：果決行動" },
    { name: "姤", guaCi: "女壯，勿用取女。", details: "方向：西北\n時間：晚上\n顏色：白色\n屬性：陰性\n吉凶：小凶\n建議：謹慎交往" },
    { name: "萃", guaCi: "亨，王假有廟，利見大人，亨，利貞。用大牲吉，利有攸往。", details: "方向：西南\n時間：傍晚\n顏色：黃色\n屬性：陰性\n吉凶：大吉\n建議：團結聚集" },
    { name: "升", guaCi: "元亨。用見大人，勿恤，南征吉。", details: "方向：東南\n時間：下午\n顏色：綠色\n屬性：陽性\n吉凶：大吉\n建議：提升進取" },
    { name: "困", guaCi: "亨。貞大人吉，无咎。有言不信。", details: "方向：北\n時間：夜晚\n顏色：黑色\n屬性：陰性\n吉凶：小凶\n建議：堅持信念" },
    { name: "井", guaCi: "改邑不改井，无喪无得。往來井井。汔至亦未繘井，羸其瓶，凶。", details: "方向：東北\n時間：早晨\n顏色：綠色\n屬性：陽性\n吉凶：中吉\n建議：安於現狀" },
    { name: "革", guaCi: "已日乃孚，元亨利貞，悔亡。", details: "方向：西\n時間：下午\n顏色：白色\n屬性：陽性\n吉凶：大吉\n建議：革故鼎新" },
    { name: "鼎", guaCi: "元吉，亨。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：大吉\n建議：更新變革" },
    { name: "震", guaCi: "亨。震來虩虩，笑言啞啞。震驚百里，不喪匕鬯。", details: "方向：東\n時間：早晨\n顏色：綠色\n屬性：陽性\n吉凶：中吉\n建議：迅速行動" },
    { name: "艮", guaCi: "艮其背，不獲其身，行其庭，不見其人，无咎。", details: "方向：西北\n時間：晚上\n顏色：白色\n屬性：陰性\n吉凶：中吉\n建議：自我反省" },
    { name: "漸", guaCi: "女歸吉，利貞。", details: "方向：西南\n時間：傍晚\n顏色：黃色\n屬性：陰性\n吉凶：大吉\n建議：循序漸進" },
    { name: "歸妹", guaCi: "征凶，无攸利。", details: "方向：東南\n時間：早晨\n顏色：綠色\n屬性：陰性\n吉凶：小凶\n建議：避免衝突" },
    { name: "豐", guaCi: "亨。王假之，勿憂，宜日中。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：大吉\n建議：豐收有餘" },
    { name: "旅", guaCi: "小亨。旅貞吉。", details: "方向：北\n時間：夜晚\n顏色：黑色\n屬性：陰性\n吉凶：中吉\n建議：謹慎行旅" },
    { name: "巽", guaCi: "小亨。利有攸往，利見大人。", details: "方向：東南\n時間：下午\n顏色：藍色\n屬性：陽性\n吉凶：大吉\n建議：順應變通" },
    { name: "兌", guaCi: "亨，利貞。", details: "方向：西\n時間：下午\n顏色：白色\n屬性：陰性\n吉凶：中吉\n建議：喜悅溝通" },
    { name: "渙", guaCi: "亨。王假有廟，利涉大川，利貞。", details: "方向：東北\n時間：早晨\n顏色：綠色\n屬性：陽性\n吉凶：大吉\n建議：解散化解" },
    { name: "節", guaCi: "亨。苦節不可貞。", details: "方向：北\n時間：夜晚\n顏色：黑色\n屬性：陰性\n吉凶：小吉\n建議：節制節約" },
    { name: "中孚", guaCi: "豚魚，吉。利涉大川，利貞。", details: "方向：東南\n時間：早晨\n顏色：藍色\n屬性：陽性\n吉凶：中吉\n建議：誠信立身" },
    { name: "小過", guaCi: "亨。利貞。可小事，不可大事。飛鳥遺之音，不宜上，宜下，大吉。", details: "方向：西北\n時間：下午\n顏色：白色\n屬性：陰性\n吉凶：小吉\n建議：小心謹慎" },
    { name: "既濟", guaCi: "亨，小利貞。初吉終亂。", details: "方向：南\n時間：中午\n顏色：紅色\n屬性：陽性\n吉凶：中吉\n建議：順勢而行" },
    { name: "未濟", guaCi: "亨。小狐汔濟，濡其尾，无攸利。", details: "方向：北\n時間：夜晚\n顏色：黑色\n屬性：陰性\n吉凶：小凶\n建議：謹慎收尾" }
];

// 八卦符號對應的Unicode字符
const hexagramSymbols = [
    '\u4DC0', '\u4DC1', '\u4DC2', '\u4DC3', '\u4DC4', '\u4DC5', '\u4DC6', '\u4DC7',
    '\u4DC8', '\u4DC9', '\u4DCA', '\u4DCB', '\u4DCC', '\u4DCD', '\u4DCE', '\u4DCF',
    '\u4DD0', '\u4DD1', '\u4DD2', '\u4DD3', '\u4DD4', '\u4DD5', '\u4DD6', '\u4DD7',
    '\u4DD8', '\u4DD9', '\u4DDA', '\u4DDB', '\u4DDC', '\u4DDD', '\u4DDE', '\u4DDF',
    '\u4DE0', '\u4DE1', '\u4DE2', '\u4DE3', '\u4DE4', '\u4DE5', '\u4DE6', '\u4DE7',
    '\u4DE8', '\u4DE9', '\u4DEA', '\u4DEB', '\u4DEC', '\u4DED', '\u4DEE', '\u4DEF',
    '\u4DF0', '\u4DF1', '\u4DF2', '\u4DF3', '\u4DF4', '\u4DF5', '\u4DF6', '\u4DF7',
    '\u4DF8', '\u4DF9', '\u4DFA', '\u4DFB', '\u4DFC', '\u4DFD', '\u4DFE', '\u4DFF'
];

function generateHexagram() {
            document.getElementById('startButton').classList.add('hidden');
            document.getElementById('animation').classList.remove('hidden');
            
            generateAnimation();

            setTimeout(showResult, 3000);
        }

function generateAnimation() {
    let animationElement = document.getElementById('animationText');
    let interval = setInterval(() => {
        let randomSymbol = hexagramSymbols[Math.floor(Math.random() * hexagramSymbols.length)];
        animationElement.innerText = randomSymbol;
    }, 100);

    setTimeout(() => clearInterval(interval), 3000);
}

        function showResult() {
            document.getElementById('animation').classList.add('hidden');
            document.getElementById('result').classList.remove('hidden');

            let randomHexagram = hexagrams[Math.floor(Math.random() * hexagrams.length)];
            
            document.getElementById('guaXiang').innerText = randomHexagram.name;
            document.getElementById('guaCi').innerText = randomHexagram.guaCi;
            document.getElementById('resultDetails').innerText = randomHexagram.details;

            document.getElementById('continueButton').classList.remove('hidden');
            document.getElementById('resetButton').classList.remove('hidden');
        }

        function reset() {
            document.getElementById('result').classList.add('hidden');
            document.getElementById('startButton').classList.remove('hidden');
            document.getElementById('continueButton').classList.add('hidden');
            document.getElementById('resetButton').classList.add('hidden');
        }
