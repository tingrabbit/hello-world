function show1(){
	changeColor(1);
	show_pic(1);
}

function show2(){
	changeColor(2);
	show_pic(2);
}

function show3(){
	changeColor(3);
	show_pic(3);
}

function show4(){
	changeColor(4);
	show_pic(4);
}

function show5(){
	changeColor(5);
	show_pic(5);
}

function show6(){
	changeColor(6);
	show_pic(6)
}

function show7(){
	changeColor(7);
	show_pic(7);
}

function show8(){
	changeColor(8);
	show_pic(8);
}

function show9(){
	changeColor(9);
	show_pic(9);
}

function changeColor(number){//改变照片导航栏的选择状态
	window.localStorage.setItem("pic_id", 1);//初始化localStorage
	document.getElementById('left').src='images/left.png';
	document.getElementById('right').src='images/right.png'
	for(var i=1;i<10;i++){
		var a='sh'+i;
		document.getElementById(a).setAttribute("class","pic_nor");
	}
	document.getElementById('h2_show').setAttribute("class","visi");
	document.getElementById('big_photo').setAttribute("class","visi");
	document.getElementById("sh" + number).setAttribute("class","pic_act");
}


function getPic(src,num,text_){
	//localStorage存储相册名
	localStorage.setItem("src", src);
	//localStorage存储相片数量
	localStorage.setItem("num", num);
	document.getElementById('s_pic').src = "images/" + src + "/1.jpg";
	document.getElementById('s_ar').innerHTML = text_;
	var img_mdiv=document.createElement("div")
	img_mdiv.setAttribute("id","mylist");
	document.getElementById("pic-nav").appendChild(img_mdiv);
	for(var i = 1;i<=num;i++){
		var img_node = document.createElement("img");
		var img_a=document.createElement("a");
		var img_div=document.createElement("div");
		var img_h3=document.createElement("h3");
		var img_p=document.createElement("p");
		img_h3.innerHTML=src;
		img_p.innerHTML="2018-04-17";
		img_a.setAttribute("href","#");
		img_div.setAttribute("class","mylist");
		img_node.setAttribute("src","images/" + src + "/small" + i + ".jpg");
		img_node.className="chicken";
		//点击图片，设置localstorage pic_id为当前图片序号
		img_node.setAttribute("onclick","localStorage.setItem('pic_id', " + i + ");"+
		"window.location='#s_pic';"+
		"document.getElementById('s_pic').src='images/" + src + "/" + i + ".jpg';"+
		"document.getElementById('left').src='images/left.png';"+
		"document.getElementById('right').src='images/right.png'");
		img_a.appendChild(img_node);
		img_div.appendChild(img_a);
		img_div.appendChild(img_h3);
		img_div.appendChild(img_p);
		img_mdiv.appendChild(img_div);
	}
	//window.location="#h2_show";
}

//点击图片，设置localstorage pic_id为当前图片序号，下面方法传入当前相册的照片数量
function next(){
	var id = localStorage.getItem("pic_id");
	var src = localStorage.getItem("src");
	var num = localStorage.getItem("num");
	
	if(id <  num){
		document.getElementById("s_pic").src="images/"+src+"/"+(parseInt(id)+1)+".jpg";
		localStorage.setItem("pic_id",parseInt(id)+1);
	}
}

function  last(){
	var id = localStorage.getItem("pic_id");
	var src = localStorage.getItem("src");
	if(id > 1){
		document.getElementById("s_pic").src="images/"+src+"/"+(parseInt(id)-1)+".jpg";
		localStorage.setItem("pic_id",parseInt(id)-1);
	}
}


function show_pic(number){//图片展示
	var dataRows=document.getElementById("mylist");
	if(dataRows) {
		document.getElementById("pic-nav").removeChild(dataRows);
	}
	if(number == 1){
		//老鹰捉小鸡(变化部分：src名字，图片张数，文字部分（列表）)
		getPic("老鹰捉小鸡", 4, "<h3>游戏规则</h3><p>以猜拳定出老鹰、鸡妈妈、小鸡仔，鸡妈妈后面依次是小鸡仔，“老鹰”不许推鸡妈妈，"+
		"只能跑动避开鸡妈妈，抓到鸡妈妈后面第三个以后的“小鸡”，即为一次游戏结束。"
		+"下一次开始时，被抓住或散开的“小鸡”做“老鹰”，排尾的“小鸡”做老鹰，原来的“老鹰”排在鸡妈妈后，"
		+"原排尾倒数第二的“小鸡”排在原“老鹰”之后。在这个游戏中，只要玩下去，胜利一方必属于老鹰无疑。"
		+"因为主动权完全掌握在老鹰手中，母鸡除了可以防守，毫无进攻之可能。这倒也符合事实，但这个游戏还有一个重要规则，"
		+"那就是老鹰不可侵犯母鸡，这才使得母鸡对小鸡的护卫成为可能。</p><h3>意义</h3><p>攻守双方来回跑动，能起到锻炼身体的作用；"+
		"同时小鸡仔们齐力躲避老鹰的追击，也能培养大家的团结互助意识；当鸡妈妈能够锻炼其责戏结束。</p></div>");

	}else if(number == 2){//捉迷藏
		getPic("捉迷藏", 6, "<h3>游戏规则</h3><p>首先选定一个范围，大家经过猜拳或一定规则之后，选定一个人先蒙上眼睛或背着大家数数，"+
		"可长可短，而其他人必须在这段时间找到一个地方躲藏，时间到后那个人去找其他人，最先找到的人为下一轮找的人。"+
		"没有被找到，且最后回到出发点没有被寻找者发现的人，将不参与第二局的猜拳，直接成为躲藏者。游戏可反复进行。"+
		"</p><h3>意义</h3><p>如果躲藏者都想赢，那就需要互相帮助，而不只是单独行动，所以这个游戏也讲究团队协作能力。</p></div>");		

	}else if(number == 3){//丢手绢
		getPic("丢手绢", 5, "<h3>游戏规则</h3><p>开始前，准备几块手绢，然后大家推选一个丢手绢的人，其余的人围成一个大圆圈蹲下。"+
		"游戏开始，被推选为丢手绢的人沿着圆圈外行走。丢手绢的人要不知不觉地将手绢丢在其中一人的身后。"+
		"被丢了手绢的人要迅速发现自己身后的手绢，然后迅速起身追逐丢手绢的人，丢手绢的人沿着圆圈奔跑，跑到被丢"+
		"手绢人的位置时蹲下，如被抓住，则要表演一个节目，可表演跳舞、歌谣、讲故事等。</p><h3>意义</h3><p>这个游戏非常考究反应度"+
		"和灵敏度，因为丢手绢的人是在背后丢的，所以蹲下的人要随时保持警惕，一旦手绢丢下就要迅速发现并起身追。</p></div>");
	}else if(number == 4){//救人木
		getPic("救人木", 1, "<h3>游戏规则</h3><p>在规定时间和范围内，一个人负责抓人，其他人避开，等到无路可退时说\"木\"避免被抓。"+
		"这时这个人不能动，要等到同伴过来碰一下才能动。如果被抓的人全部抓到了或者全部都\"木\"了，就算抓人的那个"+
		"人赢，如果时间到了，还剩下没抓完的人，就算抓人的那个人输。</p><h3>意义</h3><p>这游戏刺激之处在于不能被抓人的那个人碰到，"+
		"要不断躲，所以非常考究策略，被抓的人如何才能避免被抓或全部都\"木\"的情况，就需要在玩的过程中不断调整策略。</p></div>");
	}else if(number == 5){//木头人
		getPic("木头人", 5, "<h3>游戏规则<h3><p>首先划定一个起点，一个终点。一个人蒙眼，叫123，这时候其他人可以行动，要尽快到达终点，"+
		"到达终点的人可以自由活动。不然，当蒙眼的人叫木头人，转过身的时候，他要看到其他人不能动，直至他再次回头蒙眼。"+
		"如果动了，这个人就出局。</p><h3>意义</h3><p>这个游戏考究令行静止的能力，能培养小孩子敏捷的反应能力。</p></div>");
	}else if(number == 6){//翻绳
		getPic("翻绳", 7, "<h3>游戏规则</h3><p>用一根绳子结成绳套，一人以手指编成一种花样，另一人用"+
		"手指接过来，翻成另一种花样，相互交替编翻，直到一方不能再编翻下去为止。</p><h3>意义</h3><p>这个游戏不像其它游戏那样固定，"+
		"它是很灵活的，翻出来的花式不唯一，顺序也不唯一，不仅能锻炼手指灵活度，还能培养大脑的创新思维。</p></div>");
	}else if(number == 7){//跳大绳
		getPic("跳大绳", 7, "<h3>游戏规则</h3><p>开始时，先选两个人摇大绳。然后大家排成一队，"+
		"一个跟着一个，依次跳。一般是先开始时较慢，后来越摇节奏越快，跳的人也要跟上节奏。在跳的过程中，"+
		"如果有谁跳坏了就被罚下场去摇大绳。</p><h3>意义</h3><p>这种游戏不仅可以增加乐趣，还可以锻炼身体，培养敏捷能力，"+
		"并且摇绳的两人还可以培养默契能力。</p></div>");
	}else if(number == 8){//跳格子
		getPic("跳格子", 4, "<h3>游戏规则</h3><p>在地上画若干个格子，可以一行有一个，也可以有多个，"+
		"并标上序号，然后孩子们排着队按着格子序号依次跳，可以单脚跳，也可以两只脚分别跳进两个格子里。"+
		"</p><h3>意义</h3><p>这种有规定活动范围的游戏也能增加孩子们的乐趣。</p></div>");
	}else if(number == 9){//跳皮绳
		getPic("跳皮绳", 4, "<h3>游戏规则<h3><p>两人双脚站在一条大约有四五米长的橡皮筋里，"+
		"双脚并拢，然后慢慢调整橡皮筋的高度，一般从小腿、臀部，再到腰部，比较有挑战性的是肩部的高度和单脚站"+
		"在橡皮筋里。跳的人可以跳各种花式，如果踩到橡皮筋或被绊倒就算输。</p><h3>意义</h3><p>这个游戏"+
		"可以锻炼脚的灵活度和身体协调能力，同时也能培养创新意识，鼓励孩子们突破当前的花式，去创造新的跳法。</p></div>");
	}

}
/************这玩意我不会写循环********************/
$('#sh1').click(function () {
$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
return false;
});
$('#sh2').click(function () {
$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
return false;
});
$('#sh3').click(function () {
$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
return false;
});
$('#sh4').click(function () {
$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
return false;
});
$('#sh5').click(function () {
$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
return false;
});
$('#sh6').click(function () {
$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
return false;
});
$('#sh7').click(function () {
$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
return false;
});
$('#sh8').click(function () {
$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
return false;
});
$('#sh9').click(function () {
$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
return false;
});
/******************************************/