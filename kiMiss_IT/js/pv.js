if(typeof(pvhitimgview)=="undefined"){
	var pvhitimgview=true;
	function pv_rport(dm,f) {
		var i = dm.indexOf(f);
		if (i > 0) {
			return  dm.substring(0, i);
		}
		return dm;
	}

	function getRefUrl(refUrl) {
		if (refUrl.indexOf('ref0') > -1){
			var regexstr = /(?:\&|\?)ref0=([\s\S]*?)$/i;
			refUrl = refUrl.match(regexstr);
			refUrl = encodeURI(refUrl[1]);
			return refUrl;
		}
	}
	function getDomain(){
		var dm = '';
		hn=location.hostname;
		str=hn.replace(/\.(com|net|org|cn$)\.?.*/,"");
		if(str.lastIndexOf(".") == -1)
			dm = "." + hn;
		else
		{
			str = str.substring(str.lastIndexOf("."));
			dm = hn.substring(hn.lastIndexOf(str));
		}
		return dm;
	}

	function getflash(){
		var i,flash;
		if (window.ActiveXObject){
			for(i=12;i>0;i--){
				try{
					flash=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
					return i+".0";
				}
				catch(e){
				}
			}
		}
		else if (navigator.plugins&&navigator.plugins.length){
			for (i=0;i<navigator.plugins.length;i++){
				if (navigator.plugins[i].name.indexOf('Shockwave Flash')!=-1){
					return navigator.plugins[i].description.split(" ")[2];
				}
			}
		}
		return "Not enabled";
	}


	function readck(name){
		var cookieValue = "";
		var search_s = name + "=";
		if(document.cookie.length > 0)
		{ 
			offset = document.cookie.indexOf(search_s);
			if (offset != -1)
			{ 
				offset += search_s.length;
				end = document.cookie.indexOf(";", offset);
				if (end == -1) end = document.cookie.length;
				cookieValue = unescape(document.cookie.substring(offset, end))
			}
		}
		return cookieValue;
	}

	function writeck(name, value, hours){
		var expire = "";
		var dm = getDomain();
		if(hours != null)
		{
			expire = new Date((new Date()).getTime() + hours * 3600000);
			expire = "; expires=" + expire.toGMTString();
		}
		document.cookie = name + "=" + escape(value) + expire + ";domain=" + dm + ";path=/; ";
	}

	function randck(){
		return Math.floor(Math.random()*256);
	}

	function gettitle(){
		var title;
		if (typeof(encodeURIComponent)=="function"){
			if (document.title){
				if (window.RegExp){
					var tire=new RegExp("^"+window.location.protocol+"//"+window.location.hostname+"\\s-\\s");
					title=document.title.replace(tire,"");
				}
			}else{
				title=document.title;
			}
			title=encodeURIComponent(title);
		}else{
			title='';
		}
		return title;
	}

	var imgsrc='';
	function pv_d(){
		var _check_url = document.URL;
		if(_check_url.indexOf('#cwmysxghgu')!=-1){
			return;
		}
		var now = new Date().getTime();
		var pv_userid;
		var dm = getDomain();
		if(dm==".onlylady.com"){
			pv_userid = readck('USERNAME');
		}else if(dm==".kimiss.com"){
			pv_userid = readck('j_c_usernick');			
		}
		var datestr=escape(now*1000+Math.round(Math.random()*1000));

		//增加频道id统计
		if(typeof(pv_subcatid)=="undefined")
			pv_subcatid=0;
		
		var refferstr=document.referrer;
		if (!refferstr)
		{
			 refferstr = readck('refferstr');
		}
		imgsrc='http://olpvimg.onlylady.com/images/pvhit0001.gif?t='+datestr+'&subcat='+pv_subcatid+'&vuserid='+pv_userid+'&reffer='+encodeURIComponent(refferstr);			
		
		writeck('refferstr', document.location.href);

		if(imgsrc!='')
		{
			var ck = readck('ip_ck');
			var zyuv = readck("zyuv");
			document.write('<scr'+'ipt type="text/javascript" src="http://olpv.onlylady.com/file/p.ht?t='+ datestr +'&zyuv='+ zyuv +'&ip_ck='+ ck +'"></scr'+'ipt>');
		}
	}
	pv_d();
	
}
