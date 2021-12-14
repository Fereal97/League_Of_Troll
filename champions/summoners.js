var summoner_num_1, summoner_num_2;

summoner_num_1 = Math.floor(Math.random()*9+1);
summoner_num_2 = Math.floor(Math.random()*9+1);

while(summoner_num_1 == summoner_num_2){
    summoner_num_2 = Math.floor(Math.random()*9+1);
}

document.write('<img id="summoners" src="../../summoners/summoner'+summoner_num_1+'.png"/>');
document.write('<img id="summoners" src="../../summoners/summoner'+summoner_num_2+'.png"/>');