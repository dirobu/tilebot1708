/*tilebot-bgimg 1708*/
tilebot.plugins["tilebot-bgimg"] = function(){
	var tiles = document.querySelectorAll("[tilebot-bgimg]");
	for(f = 0; f < tiles.length; f++){
		var tile = tiles[f];
		var str = tile.attributes["tilebot-bgimg"].value;
			str = str.replace(/\s/g, "");
	
			tile.style.backgroundImage = "url('"+str+"')";
			tile.style.backgroundSize = "cover";
			tile.style.backgroundRepeat = "no-repeat";
			tile.style.backgroundPosition = "center center";
	}
}
