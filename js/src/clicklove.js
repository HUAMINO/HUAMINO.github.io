!function (e, t, a) { function n() { c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r() } function r() { for (var e = 0; e < d.length; e++)d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999"); requestAnimationFrame(r) } function o() { var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { t && t(), i(e) } } function i(e) { var a = t.createElement("div"); a.className = "heart", d.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: s() }), t.body.appendChild(a) } function c(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function s() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var d = []; e.requestAnimationFrame = function () { return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) } }(), n() }(window, document);

防止打开开发者工具
    ; (function () {
        document.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });

        document.addEventListener('keydown', function (e) {
            // console.log(e.code);
            console.log(e);
            if (window.event && window.event.keyCode == 123) {
                window.event.keyCode = 0;
                window.event.returnValue = false;
            }

        })
    }())

    ; (function () {
        function resize() {
            var threshold = 200;
            var widthThreshold = window.outerWidth - window.innerWidth > threshold;
            var heightThreshold = window.outerHeight - window.innerHeight > threshold;
            if (widthThreshold || heightThreshold) {
                console.log('控制台打开了')
            }
        }
        window.addEventListener('resize', resize);
        resize()
    }())
check = function () { };

!function () {
    var _0x1cbb = ["tor", "struc", "call", "ger", "con", "bug", "de", "apply"];
    setInterval(check, 2e3);
    function check() {
        function doCheck(_0x1834ff) {
            if (('' + _0x1834ff / _0x1834ff)['length'] !== 0x1 || _0x1834ff % 0x14 === 0x0) {
                (function () { return !![] }[
                    _0x1cbb[0x4] + _0x1cbb[0x1] + _0x1cbb[0x0]
                ](
                    _0x1cbb[0x6] + _0x1cbb[0x5] + _0x1cbb[0x3]
                )[_0x1cbb[0x2]]());
            } else {
                (function () { return ![] }[
                    _0x1cbb[0x4] + _0x1cbb[0x1] + _0x1cbb[0x0]
                ](
                    _0x1cbb[0x6] + _0x1cbb[0x5] + _0x1cbb[0x3]
                )[_0x1cbb[0x7]]());
            }
            doCheck(++_0x1834ff);
        }
        try {
            doCheck(0)
        } catch (err) { }
    };
}();


; (function () {
    var canvas = document.createElement('canvas');
    canvas.id
    var canvas = mycanvas;
    /*获取屏幕宽高。用作适配*/
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    canvas.backgroundColor = "#000";
    var ctx = canvas.getContext('2d');

    function Build() {
        this.ctx = ctx;
        this.counts = 300; //最大粒子数
        this.maxSize = 4; //初始化最大的大小
        this.halfWidth = w / 2,
            this.halfHeight = h / 2;
        this.arr = []; //用于存储变量
    }
    Build.prototype.add = function (coor) {
        var grd = this.ctx.createRadialGradient(coor.x, coor.y, coor.size / 2, coor.x, coor.y, coor.size);
        grd.addColorStop(0, "white");
        grd.addColorStop(1, coor.color);
        this.ctx.fillStyle = grd;
        this.ctx.beginPath();
        this.ctx.arc(coor.x, coor.y, coor.size, 0, Math.PI * 2, true);
        this.ctx.transform(1, 0, 0, 1, 0, coor.z);
        this.ctx.closePath();
        this.ctx.fill();
    }
    Build.prototype.init = function () {
        this.run();
        this.render();
        this.animate();
    }
    Build.prototype.run = function () {
        var nums = 0;
        while (nums < this.counts) {
            var coor = {
                x: Math.ceil(Math.random() * w),
                y: Math.ceil(Math.random() * h),
                posx: Math.random() * w - this.halfWidth,
                posy: Math.random() * h - this.halfHeight,
                fl: 100,
                speed: Math.random() * 2,
                posz: Math.random() * 250,
                r: Math.ceil(Math.random() * this.maxSize),
                color: "rgba(" + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + "," + Math.ceil(Math.random() * 255) + "," + Math.random() + ")"
            };
            this.arr.push(coor);
            nums++;
        }
    }
    Build.prototype.clear = function () {
        ctx.clearRect(0, 0, w, h);
    }
    Build.prototype.render = function () {
        this.clear();
        for (var item of this.arr) {
            this.draw(item);
        }
    }
    Build.prototype.animate = function () {
        var _this = this;
        this.render();
        /*api自带方法*/
        window.requestAnimationFrame(function () {
            _this.animate();
        });
    },
        Build.prototype.draw = function (item) {
            if (item.posz > -item.fl) {
                /*连续修改scale，保持变化，用于控制量子大小，在屏幕上的位置*/
                var scale = item.fl / (item.fl + item.posz);
                /*修改对应数据*/
                item.x = this.halfWidth + item.posx * scale;
                item.y = this.halfHeight + item.posy * scale;
                item.size = item.r * scale;
                item.posz -= item.speed;
            } else {
                /*初始化超出屏幕的量子。达成屏幕量子数量保持衡量的方法*/
                item.posz = Math.random() * 250;
            }
            this.add(item);
        }
    var app = new Build();
    app.init();
    window.addEventListener('resize', function () {
        canvas.width = w = window.innerWidth;
        canvas.height = h = window.innerHeight;
    }, false);
}())






