/*tilebot-copy 1708*/
tilebot.plugins["tilebot-copy"] = function (action){
	var tiles = document.querySelectorAll("[tilebot-copy]");
	for(f = 0; f < tiles.length; f++){
		var tile = tiles[f];
		var str = tile.attributes["tilebot-copy"].value;
			str = str.replace(/\s/g, "");
			str = str.split(";");
			
			for(ff = 0; ff < str.length; ff++){
				if(str[ff].indexOf("height:") > -1){action = "height";}
				else if(str[ff].indexOf("width:") > -1){action = "width";}


				var id = str[ff].replace(action+":", "");

				function clientAction(action, elm){
					if(action == "height"){return elm.clientHeight;}
					if(action == "width"){return elm.clientWidth;}
				}

				tile.style[action] = clientAction(action, document.getElementById(id))+"px";
					
			}

	}
}
