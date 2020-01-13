// 简易lunbo
var pics = new Array(3);
pics[0] = "lunbo/01.jpg";
pics[1] = "lunbo/02.jpg";
pics[2] = "lunbo/03.jpg";
pics[3] = "lunbo/04.jpg";
var timer;
var index = 0;

function showpic() {
	document.getElementById("pic").src = pics[index];
	if (index < (pics.length - 1))
		index++;
	else
		index = (index + 1) % pics.length;
	timer = setTimeout("showpic()", 4000);
}
window.onload = showpic();
// 存储歌曲信息
var music = [
	["img/陈柯宇.jpg", "Katy Perry", "Zedd-365", "./mp3/男人KTV.mp3"],
	["img/Zedd.jpg", "一百万个不可能", "Christine Welch--经典咏流传", "./mp3/1.mp3"],
	["img/Olly-Murs_thay-girl_guitar.jpg", "生僻字", "陈柯宇--生僻字", "./mp3/生僻字.mp3"],
	["img/陈柯宇.jpg", "夏小虎", "夏小虎 - 逝年", "./mp3/夏小虎 - 逝年.mp3"]
];
//渲染【推荐音乐】的歌曲列表
var tmp = "";
var myLi = document.getElementById('content');
for (var i = 0; i < music.length; i++) {
	tmp += "<div class=\"myli\" onClick=\"myclick('" + music[i][1] + "','" + music[i][2] + "')\">";
	tmp += "<img src=\"" + music[i][0] + "\" width=\"75\" height=\"75\" >";
	tmp += "<div class=\"text\" >";
	//tmp+="<audio id=\"music1\" src=\""+music[i][3]+"\" >";
	//tmp+="当前浏览器不支持audio";
	//tmp+="</audio>";
	tmp += "<span>" + music[i][1] + "</span><br />";
	tmp += "<span style=\"font-size: 13px;\">" + music[i][2] + "</span>";
	tmp += "<div class=\"btn\">";
	tmp += "<img id=\"bf" + i + "\" onClick=\"playMusic('bf" + i + "','" + music[i][3] +
		"')\" src=\"icon/more.png\" width=\"32\" height=\"32\">";
	tmp += "</div></div></div>";
}
document.getElementById('content').innerHTML = document.getElementById('content').innerHTML + tmp;

// 播放功能模块
var player = document.getElementById("music1");
var a = "";
var musicsrc = new Array();
function playMusic(eid, msrc) {
	if (a != msrc) {
		a = msrc;
		player.src = msrc;
		player.load();
	}
	if (player.paused) {
		player.play();
		document.getElementById(eid).src = "icon/暂停.png";
	} else {
		player.pause();
		document.getElementById(eid).src = "icon/more.png";
	}
	for (var i = 0; i < music.length; i++) {
		if (("bf" + i) != eid) {
			document.getElementById("bf" + i).src = "icon/more.png";
		}
	}
}
// 进入播放
function myclick(aa, bb) {
	document.getElementById("songname").innerHTML = aa;
	document.getElementById("singer").innerHTML = bb;
	document.getElementById("template3").style.display = "block";
	document.getElementById("template1").style.display = 'none';
	document.getElementById("mynav").style.display = 'none';
}
//返回
function backIndex() {
	document.getElementById("songname").innerHTML = '';
	document.getElementById("singer").innerHTML = '';
	document.getElementById("template1").style.display = 'block';
	document.getElementById("template3").style.display = 'none';
	document.getElementById("mynav").style.display = 'block';
}
//【推荐音乐】
function tjmusic() {
	var mya1 = document.getElementById('mya1');
	var mya2 = document.getElementById('mya2');
	var myicon1 = document.getElementById('icon1');
	var myicon2 = document.getElementById('icon2');
	myicon1.src = "icon/music-active.png";
	myicon2.src = "icon/my.png";
	mya1.style.color = "#AC2925";
	mya2.style.color = "#000000";
	document.getElementById('template1').style.display = "block";
	document.getElementById('template2').style.display = "none";
}
// 【我的音乐】
function mymusic() {
	var mya1 = document.getElementById('mya1');
	var mya2 = document.getElementById('mya2');
	var myicon1 = document.getElementById('icon1');
	var myicon2 = document.getElementById('icon2');
	myicon1.src = "icon/music.png";
	myicon2.src = "icon/my-active.png";
	mya1.style.color = "#000000";
	mya2.style.color = "#AC2925";
	document.getElementById('template1').style.display = "none";
	document.getElementById('template2').style.display = "block";
}
// 测试传参
// function getData()
// {
//   var info={"name":"oec2003","age":"25"};
//   return info;
// }
// function getInfo()
// {
//   var info=myclick();
//   var name=info["name"];
//   var age=info["singer"];
//   alert("姓名："+name+" 年龄："+age);
// }
function click() {
	if (event.button == 2) {
		alert('提示：浏览器检测到你正在非法使用网页，请关闭退出！');
	}
}
document.onmousedown = click;
