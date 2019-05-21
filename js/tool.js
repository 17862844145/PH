//根据id查找
function $Id(lable) {
	return document.getElementById(lable);
}
//根据class查找
function $Class(lable) {
	return document.getElementsByClassName(lable);
}
//根据标签名查找
function $(lable) {
	return document.getElementsByTagName(lable);
}
//根据name查找
function $Name(name) {
	return document.getElementsByName(name);
}
//根据标签名，id名 class名,结果是唯一的,一般是第一个
function $findFirst(label){
	return document.querySelector(label)
}
//根据标签名，id名 class名，结果是一个集合
function $FindAll(labels){
	return document.querySelectorAll(labels)
}
//创建标签
function $label(label) {
	return document.createElement(label)
}
//封装一个函数用于把创建的元素添加到指定元素中
function $addto(Ylabel, Tlabel) {
	return Ylabel.appendChild(Tlabel);
}
//创建标签以及标签的css样式
function ce(type, style) {
	let elem = document.createElement(type);
	Object.assign(elem.style, style);
	return elem;
}
//判断素数
function $isPrimerNumber(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}
//随机整数
function $rand(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
//随机颜色16进制
function $color16() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
	return color;
}
//随机颜色rgb
function $rgb() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let rgb = "rgb" + '(' + r + ',' + g + ',' + b + ')';
	return rgb;
}
//随机颜色rgba
function $rgba() {
	let r = parseInt(Math.random() * 256);
	let g = parseInt(Math.random() * 256);
	let b = parseInt(Math.random() * 256);
	let a = Math.random().toFixed(2);
	let rgba = "rgba" + "(" + r + "," + g + "," + b + "," + a + ")";
	return rgba;
}
function Alert(width, alert, alertText, bool) {
	if (bool) {
		backgrounds = "#DFF0D8"
		colors = "#3c763d"
	} else {
		backgrounds = "#FCF8E3"
		colors = "#8a6d3b"
	}
	let div = ce("div", {
		width: width,
		position: "fixed",
		right: "4px",
		background: backgrounds, 
		borderColor: backgrounds,
		color: colors, 
		padding: "15px",
		borderRadius: "4px"
	});
	//div.className = "alert alert-warning";
	let strong = ce("strong", {
		fontWeight: "700"
	});
	strong.innerText = alert;
	$addto(div, strong); 
	div.innerHTML += alertText;
	let a = ce("a", {
		float: "right",
		fontSize: "21px",
		lineHeight: "1",
		color:" #B2C0AD",
		cursor:"pointer" ,
		textDecoration:"none"
	});
	a.innerText = "x";
	a.addEventListener("click", clickHandler)
	$addto(div, a);
	$addto(document.body, div);

	function clickHandler(e) {
		this.parentNode.remove();
		this.parentNode = null;
	}
}
//拖拽效果完美版
function $drag(element ){
element .onmousedown = function(e){
		var e = e || event;
		//记录内部偏移量
		let disx = e.offsetX || e.layerX;
		let disy = e.offsetY || e.layerY;
		 
		//添加鼠标移动事件 （在哪移动？）
		document.onmousemove = function(e){
			//移动时  取消文字被选中的状态 
			window.getSelection().removeAllRanges();
			var e = e||event;
			//获取div的最大left和top值
			var maxL = window.innerWidth - element .offsetWidth;
			var maxT = window.innerHeight - element .offsetHeight;
			
			//设置拖拽元素div的left和top值
			var x = e.pageX - disx;
			var y = e.pageY - disy;
			x = x < 0 ? 0 : ( x > maxL ? maxL : x );
			y = y < 0 ? 0 : ( y > maxT ? maxT : y );
			element .style.left = x + "px";
			element .style.top = y + "px";
		}
		
		//鼠标抬起 取消移动（事件源？？建议在document上）
		document.onmouseup = function(){
			document.onmousemove = null;
		}
		
		//return false;
	}
	}
//完美拖拽
//放大镜
//碰撞检测
//购物车
//
