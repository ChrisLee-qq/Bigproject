
function Slider(id) {

    this.ele = document.querySelector('#' + id);
    this.init();
}
Slider.prototype = {
    init: function() {

        this.ulli = this.ele.children[0].children;

        this.num = this.ulli.length;

        this.olli = this.createEle();

        this.indexA = 0;

        this.div = document.querySelector('#msg');

        this.slide();

        this.ltBtn = document.querySelector('#ltBtn');
        this.rtBtn = document.querySelector('#rtBtn');

        this.addEvent();
        this.timer = null;
        this.autoPlay();
    },
    createEle: function() {

        let ltSpan = this.$create('span');
        ltSpan.innerHTML = '&lt;';
        ltSpan.id = 'ltBtn';
        this.ele.appendChild(ltSpan);

        let rtSpan = this.$create('span');
        rtSpan.innerHTML = '&gt;';
        rtSpan.id = 'rtBtn';
        this.ele.appendChild(rtSpan);
     
        let div = this.$create('div');
        div.id = 'msg';
        this.ele.appendChild(div);

        let ol = this.$create('ol');
        let arr = [];
        for (let i = 0; i < this.num; i++) {

            let li = this.$create('li');
            arr.push(li);
            ol.appendChild(li);
        }
        this.ele.appendChild(ol);
        return arr;
    },
    $create: function(tagName) {
        return document.createElement(tagName);
    },
    slide: function() {

        for (let i = 0; i < this.num; i++) {
            this.ulli[i].style.display = 'none';
            this.olli[i].style.backgroundColor = 'red';
        }
        this.ulli[this.indexA].style.display = 'block';
        this.olli[this.indexA].style.backgroundColor = 'blue';

        this.div.innerHTML = this.ulli[this.indexA].children[0].children[0].alt;
    },
    addEvent: function() {

        this.ltBtn.onclick = () => {
                this.indexA--;
                if (this.indexA === -1) {
                    this.indexA = this.num - 1;
                }
                this.slide();
            }

        this.rtBtn.onclick = () => {
                this.indexA++;
                if (this.indexA === this.num) {
                    this.indexA = 0;
                }
                this.slide();
            }

        for (let i = 0; i < this.num; i++) {
            this.olli[i].onmouseenter = () => {
                this.indexA = i;
                this.slide();
            }
        }
    },
    autoPlay: function() {
        this.timer = setInterval(() => {
            this.indexA++;
            if (this.indexA === this.num) {
                this.indexA = 0;
            }
            this.slide();
        }, 1000);
        this.ele.onmouseenter = () => {
            clearInterval(this.timer);
        }
        this.ele.onmouseleave = () => {
            this.autoPlay();
        }
    }
}