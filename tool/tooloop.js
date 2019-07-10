class ${
	constructor(){
		//这是ES6的工具箱
		console.log("111")
	}
	//根据id获取名字
	static Class(classname){
        return document.getElementsByClassName(classname);
	}
	//根据class名字获取
	static Id(idname){
		return document.getElementById(idname);
	}
	//根据标签名字获取
	static Lable(lablename){
		return document.getElementsByTagName(lablename);
	}
	//根据名字属性获取
	static Name(sname){
		return document.getElementsByName(sname);
	}
	//根据标签名字，ID名，class名字，属性名字获取
	static Qust(qname){
		return document.querySelector(qname);
	}
	//根据标签名字，ID名，class名字，属性名字获取(集合)
	static Qusts(qnames){
		return document.querySelector(qnames);
	}
	static Rand(min,max){
		//返回一个[min,max]区间内的随机的整数值
		return Math.round( Math.random()*(max-min) + min );
	}
	//创建标签
	static Ce(clabel) {
		return document.createElement(clabel);
	}
	//给标签添加css样式
		 Celable(type, style) {
		Object.assign(type.style, style);
		return type;
	}
	//随机颜色16进制
	 static Color16() {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
		return color;
	}
	//随机颜色rgb
	static Rgb() {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		let rgb = "rgb" + '(' + r + ',' + g + ',' + b + ')';
		return rgb;
	}
	//创建标签以及标签的css样式
	static Celable(type, style) {
		let elem = document.createElement(type);
		Object.assign(elem.style, style);
		return elem;
	}
	//封装一个函数用于把创建的元素添加到指定元素中
	static Add(Ylabel, Tlabel) {
		return Ylabel.appendChild(Tlabel);
	}
	//封装一个函数 功能是 将日期转成字符串 显示自定义的时间格式
	static dateToString(d){
		var y = d.getFullYear();
		var m =toTwo(  d.getMonth() + 1 );
		var d1 =toTwo( d.getDate() );
		
		var h = toTwo( d.getHours() );
		var mi =toTwo(  d.getMinutes() );
		var s = toTwo( d.getSeconds() );
		return y+"-"+m+"-"+d1+" "+h+":"+mi+":"+s;
	}
	//封装一个函数  功能是获取任意一个元素非行内样式值
	static GetStyle(obj,attr){
		//兼容
		if( getComputedStyle ){
			return window.getComputedStyle(obj)[attr];
		}else{
			return obj.currentStyle[attr];
		}
	}
	//元素在固定区域内跟随,//放大镜
	static Gdgensui(box1,box2){
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
	static Pz(obj1,obj2){
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
}