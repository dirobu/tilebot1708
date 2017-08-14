var tilebot = {
	plugins: {},
	tiles: {},
	refresh: {
		plugins: function(){for(var key in tilebot.plugins){tilebot.plugins[key]();}},
		tiles: function(){for(var key in tilebot.tiles){tilebot.tiles[key]();}}
	},
	info: 'TileBot - 1708 - Dirobu'
}
window.addEventListener("resize", function(){
	tilebot.refresh.plugins();
});
window.onload = function(){
	var div = document.body;

	var types = ["\t<","\n<"," <"];
	for(f = 0; f < types.length; f++){
		while(div.innerHTML.indexOf(types[f]) > -1){div.innerHTML = div.innerHTML.split(types[f]).join("<");}
	}
	tilebot.refresh.plugins();
	tilebot.refresh.tiles();
};
document.head.innerHTML+= '<style>body {min-height: 100%; padding: 0px; margin: 0px; text-align: center;}body > * {vertical-align: text-top; display: inline-block;}</style>';
