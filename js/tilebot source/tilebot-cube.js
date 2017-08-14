/*tilebot-cube 1708*/
tilebot.plugins["tilebot-cube"] = function (action){
	var tiles = document.querySelectorAll("[tilebot-cube]");
	for(f = 0; f < tiles.length; f++){
		var tile = tiles[f];
		var str = tile.attributes["tilebot-cube"].value;
			str = str.replace(/\s/g, "");
			
			if(str.indexOf("height") > -1){tile.style["width"] = tile.clientHeight+"px";}
			else if(str.indexOf("width") > -1){tile.style["height"] = tile.clientWidth+"px";}
	}
}
