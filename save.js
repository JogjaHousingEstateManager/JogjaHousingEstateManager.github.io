var save = {};

save.tosave = { buildings: buildings, player: player, upgrades: upgrades };

save.saveData = function() {
	localStorage.setItem('JogjaHousingEstateManager', JSON.stringify(save.tosave));
};

save.removeData = function() {
	player.saveLoop = undefined;
	localStorage.removeItem('JogjaHousingEstateManager');
	location.reload();
};

save.loadData = function() {
	if (localStorage.getItem('JogjaHousingEstateManager') === null)
		console.log("No save found!");
	else {
		var savegame = s = JSON.parse(localStorage.getItem('JogjaHousingEstateManager'));
    var sbuildings = s.buildings; // saved buildings
    var splayer = s.player; // saved player
    var supgrades = s.upgrades; // saved upgrades
    // if save is older
    if (splayer.version !== player.version){
      console.warn("Warning : loading save from older version");
    }
    // loading variables
    buildings = sbuildings;
    player = splayer;
    upgrades = supgrades;
  };
};
