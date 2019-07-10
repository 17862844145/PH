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
//获取任意区间内的整数值
function rand(min,max){
	//返回一个[min,max]区间内的随机的整数值
	return Math.round( Math.random()*(max-min) + min );
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
//封装一个函数 功能是 将日期转成字符串 显示自定义的时间格式
function dateToString(d){
	var y = d.getFullYear();
	var m =toTwo(  d.getMonth() + 1 );
	var d1 =toTwo( d.getDate() );
	
	var h = toTwo( d.getHours() );
	var mi =toTwo(  d.getMinutes() );
	var s = toTwo( d.getSeconds() );
	
	return y+"-"+m+"-"+d1+" "+h+":"+mi+":"+s;
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
//封装一个函数  功能是获取任意一个元素非行内样式值
function getStyle(obj,attr){
	//兼容
	if( getComputedStyle ){
		return window.getComputedStyle(obj)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
//封装一个执行弹窗函数：例Alert("250px","成功！"，"什么东西成功执行"，true)
//true:为绿色，没有bool值为棕色
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
//元素在固定区域内跟随,//放大镜
function Gdgensui (box1,box2){
		box1.onmousemove = function(evt) { //鼠标移动,div跟随移动
			var e = evt || event;
			var x = e.pageX - box1.offsetLeft - box2.offsetWidth / 2;
			var y = e.pageY - box1.offsetTop - box2.offsetHeight / 2;

			//获取最大边界
			var maxL = box1.offsetWidth - box2.offsetWidth;
			var maxT = box1.offsetHeight - box2.offsetHeight;

			//边界处理
			x = x <=0 ? 0 : (x >= maxL ? maxL : x);
			y = y <=0 ? 0 : (y >= maxT ? maxT : y);
			//修改mask的left 和 top值，目的让他跟随鼠标移动
			box2.style.left = x + "px";
			box2.style.top = y + "px";
		}
}
//碰撞检测
function pz(obj1,obj2){
	var L1 = obj1.offsetLeft;
	var R1 = obj1.offsetLeft + obj1.offsetWidth;
	var T1 = obj1.offsetTop;
	var B1 = obj1.offsetTop + obj1.offsetHeight;
	
	var L2 = obj2.offsetLeft;
	var R2 = obj2.offsetLeft + obj2.offsetWidth;
	var T2 = obj2.offsetTop;
	var B2 = obj2.offsetTop + obj2.offsetHeight;
	
	if( R1<L2||L1>R2||B1<T2||T1>B2 ){ //碰不上的条件
		return false;
	}else{
		return true;
	}
}
//完美拖拽
//购物车
//
