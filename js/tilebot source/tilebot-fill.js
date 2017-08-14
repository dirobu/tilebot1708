/*tilebot-fill 1708*/
tilebot.plugins["tilebot-fill"] = function (action){
	var tiles = document.querySelectorAll("[tilebot-fill]");
	for(f = 0; f < tiles.length; f++){
		var tile = tiles[f];
		var str = tile.attributes["tilebot-fill"].value;

			str = str.replace(/\s/g, "");
			str = str.split(";");

			/* height: id1, id2; width: id1, id2 */
			for(ff = 0; ff < str.length; ff++){

				if(str[ff].indexOf("height:") > -1){action = "height";}
				else if(str[ff].indexOf("width:") > -1){action = "width";}

				tile.style[action] = "0px";

				var temp = str[ff].replace(action+":", "");
					temp = temp.split(",");

				function clientAction(action, elm){
					if(action == "height"){return elm.clientHeight;}
					if(action == "width"){return elm.clientWidth;}
				}

				var currentDimension = 0;
					for(fff = 0; fff < temp.length; fff++){
						if(document.getElementById(temp[fff]).offsetTop == tile.offsetTop){
							currentDimension = Number(currentDimension) + Number(clientAction(action, document.getElementById(temp[fff])));
						}
					}
					currentDimension = Math.round(Number(clientAction(action, document.body)) - Number(currentDimension));
						if(currentDimension % 2){}else{currentDimension--;}
					
				tile.style[action] = currentDimension+"px";

			}		

	}
}
