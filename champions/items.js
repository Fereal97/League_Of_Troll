var mythic_num, boots_num, item_num_1, item_num_2, item_num_3, item_num_4;

mythic_num = Math.floor(Math.random()*17+1);
boots_num = Math.floor(Math.random()*7+1);
item_num_1 = Math.floor(Math.random()*63+1);
item_num_2 = Math.floor(Math.random()*63+1);
item_num_3 = Math.floor(Math.random()*63+1);
item_num_4 = Math.floor(Math.random()*63+1);

while(item_num_1 == item_num_2){
    item_num_2 = Math.floor(Math.random()*63+1);
}

while(item_num_1 == item_num_3 || item_num_2 == item_num_3){
    item_num_3 = Math.floor(Math.random()*63+1);
}

while(item_num_1 == item_num_4 || item_num_2 == item_num_4 || item_num_3 == item_num_4){
    item_num_4 = Math.floor(Math.random()*63+1);
}

document.write('<img id="items" src="../../mythic/mythic'+mythic_num+'.png"/>');
document.write('<img id="items" src="../../items/item'+item_num_1+'.png"/>');
document.write('<img id="items" src="../../items/item'+item_num_2+'.png"/>');
document.write('<img id="items" src="../../items/item'+item_num_3+'.png"/>');
document.write('<img id="items" src="../../items/item'+item_num_4+'.png"/>');
document.write('<img id="items" src="../../boots/boots'+boots_num+'.png"/>');