(function(d,b){
	var q = d.createElement('div');
	q.innerHTML = '<style>.bubble{position:absolute;background:rgba(255,255,255,0.1);border:thin solid ##00BFF0;border-radius:16px;box-shadow: 0 0 1px 1px rgba(204, 242, 255, 0.2);}'+
'.bubble:after{content:"";display:block;height:3px;width:3px;border-radius:2px;background:rgba(204, 242, 255, 0.2);}</style>';
	q.id = 'bubbleparticle';
	b.appendChild(q);
	q = document.getElementById('bubbleparticle');
	b.style.overflowX = 'hidden';
	var h = window.innerHeight;
	var u = document.documentElement.scrollTop || document.body.scrollTop;
	var e = u-10;
	var z = 9999;
	var t = new Array();
	var l = new Array();
	var y = new Array();
	var s = new Array();
	var g = new Array();
	var c = new Array();
  var footerHeight = d.querySelector('.footer').offsetHeight;  // フッターの高さ
    var pageLimit = d.body.scrollHeight - footerHeight;  // フッター上で泡を停止させるページの限界点
	d.addEventListener('scroll',function(){u = document.documentElement.scrollTop || document.body.scrollTop;e = u-10;},false);
	for(var i=0;i<50;i++){//泡の量(値を小さくすると泡の数が減りCPUの負荷も減る)
		var m = d.createElement('div');
		m.id = 'awa'+i;
		t[i] = Math.random()*(h+u)+u;
		// l[i] = Math.random()*window.innerWidth;
		var p = Math.random()*20+10; // PCの泡のサイズ
    var speedAdjust = 1; // スピード調整用係数
    if (window.innerWidth < 768) { // SPの画面幅が768px以下の場合
			p *= 0.5; // バブルのサイズを小さくする
      speedAdjust = 0.5; // 上昇速度を遅くする
		}
    l[i] = Math.random() * (window.innerWidth - p); // バブルが画面の右端を超えないように調整
		m.setAttribute('style','z-index:'+(z+i)+';top:'+t[i]+'px;width:'+p+'px;height:'+p+'px;left:'+l[i]+'px;');
		m.setAttribute('class','bubble');
		q.appendChild(m);
		y[i] = Math.random()*25+0.1;
		// s[i] = Math.random()*5+5;//泡の上昇速度(速くしたいときは値を大きくする)
    s[i] = (Math.random()*5+5) * speedAdjust; // 泡の上昇速度の調整
		g[i] = document.getElementById('awa'+i);
		c[i] = 0;
	}
	setInterval(function(){
		for(var i=0;i<50;i++){//泡の量
			if(u<t[i]){
				if(y[i]>=c[i]){
					l[i] = l[i]+0.5+Math.random()*0.5;
				}else{
					l[i] = l[i]-0.5-Math.random()*0.5;
				}
				if((y[i]*2)<=c[i]){
					c[i] = 0;
				}
			}else{
				t[i] = u+h+10;
				// l[i] = Math.random()*window.innerWidth;
        l[i] = Math.random() * (window.innerWidth - p); // リセット時も画面の右端を超えないように調整
			}
			t[i] = t[i]-s[i];
      if (t[i] > pageLimit) t[i] = pageLimit;  // 最下部の限界点を超えないように制限
			g[i].style.top = t[i]+'px';
			g[i].style.left = l[i]+'px';
			c[i]++;
		}
	},50);//繰り返しまでの数値(数値を減らすとCPUの負荷はかかるが動作がなめらかになる)
})(document,document.body);