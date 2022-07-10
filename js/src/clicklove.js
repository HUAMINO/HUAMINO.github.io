!function (e, t, a) { function n() { c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r() } function r() { for (var e = 0; e < d.length; e++)d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999"); requestAnimationFrame(r) } function o() { var t = "function" == typeof e.onclick && e.onclick; e.onclick = function (e) { t && t(), i(e) } } function i(e) { var a = t.createElement("div"); a.className = "heart", d.push({ el: a, x: e.clientX - 5, y: e.clientY - 5, scale: 1, alpha: 1, color: s() }), t.body.appendChild(a) } function c(e) { var a = t.createElement("style"); a.type = "text/css"; try { a.appendChild(t.createTextNode(e)) } catch (t) { a.styleSheet.cssText = e } t.getElementsByTagName("head")[0].appendChild(a) } function s() { return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")" } var d = []; e.requestAnimationFrame = function () { return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) { setTimeout(e, 1e3 / 60) } }(), n() }(window, document);

// 防止打开开发者工具
;(function(){
    document.addEventListener('contextmenu',function(e){
        e.preventDefault();
    });

     document.addEventListener('keydown',function(e){
            // console.log(e.code);
            console.log(e);
            if(window.event && window.event.keyCode == 123) {
				window.event.keyCode = 0;
				window.event.returnValue = false;
			}

        })
}())

;(function(){
    function resize(){
        var threshold = 200;
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if(widthThreshold || heightThreshold){
            console.log('控制台打开了')
        }
    }
    window.addEventListener('resize', resize);
    resize()
}())
check=function(){};
 
!function(){
    var _0x1cbb = ["tor", "struc", "call", "ger", "con", "bug", "de", "apply"];
    setInterval(check, 2e3);
    function check() {
        function doCheck(_0x1834ff) {
            if (('' + _0x1834ff / _0x1834ff)['length'] !== 0x1 || _0x1834ff % 0x14 === 0x0) {
                (function() {return !![]}[
                    _0x1cbb[0x4] + _0x1cbb[0x1] + _0x1cbb[0x0]
                ](
                    _0x1cbb[0x6] + _0x1cbb[0x5] + _0x1cbb[0x3]
                )[_0x1cbb[0x2]]());
            } else {
                (function() {return ![]}[
                    _0x1cbb[0x4] + _0x1cbb[0x1] + _0x1cbb[0x0]
                ](
                    _0x1cbb[0x6] + _0x1cbb[0x5] + _0x1cbb[0x3]
                )[_0x1cbb[0x7]]());
            }
            doCheck(++_0x1834ff);
        }
        try {
            doCheck(0)
        } catch(err) { }
    };
}();

;(function(){
     //禁止鼠标右击
     document.oncontextmenu = function() {
        event.returnValue = false;
      };
      //禁用开发者工具F12
      document.onkeydown = document.onkeyup = document.onkeypress = function(event) {
        let e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 123) {
          e.returnValue = false;
          return false;
        }
      };
      let userAgent = navigator.userAgent;
      if (userAgent.indexOf("Firefox") > -1) {
        let checkStatus;
        let devtools = /./;
        devtools.toString = function() {
          checkStatus = "on";
        };
        setInterval(function() {
          checkStatus = "off";
          console.log(devtools);
          console.log(checkStatus);
          console.clear();
          if (checkStatus === "on") {
            let target = "";
            try {
              window.open("about:blank", (target = "_self"));
            } catch (err) {
              let a = document.createElement("button");
              a.onclick = function() {
                window.open("about:blank", (target = "_self"));
              };
              a.click();
            }
          }
        }, 200);
      } else {
        //禁用控制台
        let ConsoleManager = {
          onOpen: function() {
            alert("Console is opened");
          },
          onClose: function() {
            alert("Console is closed");
          },
          init: function() {
            let self = this;
            let x = document.createElement("div");
            let isOpening = false,
              isOpened = false;
            Object.defineProperty(x, "id", {
              get: function() {
                if (!isOpening) {
                  self.onOpen();
                  isOpening = true;
                }
                isOpened = true;
                return true;
              }
            });
            setInterval(function() {
              isOpened = false;
              console.info(x);
              console.clear();
              if (!isOpened && isOpening) {
                self.onClose();
                isOpening = false;
              }
            }, 200);
          }
        };
        ConsoleManager.onOpen = function() {
          //打开控制台，跳转
          let target = "";
          try {
            window.open("about:blank", (target = "_self"));
          } catch (err) {
            let a = document.createElement("button");
            a.onclick = function() {
              window.open("about:blank", (target = "_self"));
            };
            a.click();
          }
        };
        ConsoleManager.onClose = function() {
          alert("Console is closed!!!!!");
        };
        ConsoleManager.init();
      }
})()

{/* <div id="background">
	<canvas id="canvas"></canvas>
</div> */}
;(function(){
    var body = document.querySelector('body')
    console.log('dddd');
    var div = document.createElement('div');
    var canvas = document.createElement('canvas');
    canvas.id = "canvas";
    div.id = "background";
    div.appendChild(canvas);
    body.appendChild(div);

    background = document.getElementById("background")
	  background.style.width = innerWidth + 'px'
	  background.style.height = innerHeight + 'px'
	
	// 获取canvas对象
	var canvas = document.getElementById("canvas")
	// 获取画笔
	var ctx = canvas.getContext("2d")
	
	// 设置canvas宽高
	canvas.height = innerHeight
	canvas.width = innerWidth
	
	// 定义一个粒子数组
	var particlesArray = []
	// 定义页面内粒子的数量
	var count = parseInt(canvas.width / 80 * canvas.height / 80)
	
	
	// 定义粒子类
	class Particle {
	    constructor(x, y) {
	        this.x = x
	        this.y = y
	        // x，y轴的移动速度  -0.5 -- 0.5
	        this.directionX = Math.random() - 0.5
	        this.directionY = Math.random() - 0.5
	    }
	
	    // 更新点的坐标
	    update() {
	        this.x += this.directionX
	        this.y += this.directionY
	    }
	
	    // 绘制粒子
	    draw() {
	        ctx.beginPath()
	        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
	        ctx.closePath()
	        ctx.fillStyle = "white"
	        ctx.fill()
	    }
	}
	
	// 创建粒子
	function createParticle() {
	    // 生成一个点的随机坐标
	    var x = Math.random() * innerWidth
	    var y = Math.random() * innerHeight
	
	    particlesArray.push(new Particle(x, y))
	}
	
	// 处理粒子
	// 先更新坐标，再绘制出来
	function handleParticle() {
	    for(var i = 0; i < particlesArray.length; i++) {
	        var particle = particlesArray[i]
	        particle.update()
	        particle.draw()
	        // 超出范围就将这个粒子删除
	        if(particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
	            particlesArray.splice(i, 1)
	        }
	
	        // 绘制两个点之间的连线
	        for(var j = i + 1; j < particlesArray.length; j++) {
	            dx = particlesArray[j].x - particlesArray[i].x
	            dy = particlesArray[j].y - particlesArray[i].y
	            dist = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2))
	            if(dist < 100) {
	                ctx.beginPath()
	                ctx.strokeStyle = "rgba(255, 255, 255, " + (1 - dist / 100)
	                ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
	                ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
	                ctx.closePath()
	                ctx.lineWidth = 1
	                ctx.stroke()
	            }
	        }
	    }
	}
	
	function draw() {
	    // 首先清空画布
	    ctx.clearRect(0, 0, canvas.width, canvas.height)
	    // 如果粒子数量小于规定数量，就生成新的粒子
	    if(particlesArray.length < count) {
	        createParticle()
	    }
	
	    // 处理粒子
	    handleParticle()
	}
	
	// 设置定时器
	setInterval(draw, 10)
}())






