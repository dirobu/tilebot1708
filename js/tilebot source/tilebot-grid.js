/*tilebot-grid 1708*/
tilebot.plugins["tilebot-grid"] = function (){
	var tiles = document.querySelectorAll("[tilebot-grid]");
	for(f = 0; f < tiles.length; f++){
		var tile = tiles[f];
		var str = tile.attributes["tilebot-grid"].value;
			str = str.replace(/\s/g, "");
			str = str.split(",");
			/* 0 < 500 1200 */
			/* 1 > 500 < 1000 */
			/* 2 > 1000  */
		var viewWidth = document.body.clientWidth;
		var	baseWidth = document.body.clientWidth / 12;
		var tileWidth = '';
			function format(str){
				if(str.indexOf("px") > -1){return str;}
				else if(str.indexOf("%") > -1){return str;}
				else{ return (baseWidth * str)+'px';}
			}
			if(str.length == 1){tileWidth = str[0];}
			else if(str.length < 1 || str.length == 2){console.warn('TileBot-Grid: Parameters Error - '+tile.attributes.tilebot.value);}
			else if(viewWidth < 500){tileWidth = str[0];}
			else if(viewWidth > 500 && viewWidth < 1000){tileWidth = str[1];}
			else if(viewWidth > 1000 && viewWidth < 2000){tileWidth = str[2];}
			else{tileWidth = str[2];}

			tileWidth = format(tileWidth);

		tile.style.width = tileWidth;
		tile.style.overflow = "hidden";
		tile.style.display = "inline-block";

	}
}
