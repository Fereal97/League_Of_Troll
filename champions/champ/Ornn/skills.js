function shuffle(skill) {
    for(var i = skill.length - 1; i > 0; --i) {
        swap(skill, i, ( Math.random() * (i + 1) ) | 0);
    }
}

function swap(skill, a, b) {
    var holder = skill[a];
    skill[a] = skill[b];
    skill[b] = holder;
}

function check(skill){
    var c_1,c_2,c_3;
    c_1 = 0;
    c_2 = 0;
    c_3 = 0;
    for(var i = 0; i < 15; i++){
        if(skill[i] == 1 && c_1 + 1 > Math.ceil((i+1)/2)){
            for(var j = 8; j < 15; j++)
                if(skill[i] != skill[j]){
                    var hold;
                    hold = skill[i];
                    skill[i] = skill[j];
                    skill[j] = hold;
                    break;
                }
        }

        if(skill[i] == 2 && c_2 + 1 > Math.ceil((i+1)/2)){
            for(var j = 8; j < 15; j++)
                if(skill[i] != skill[j]){
                    var hold;
                    hold = skill[i];
                    skill[i] = skill[j];
                    skill[j] = hold;
                    break;
                }
        }

        if(skill[i] == 3 && c_3 + 1 > Math.ceil((i+1)/2)){
            for(var j = 8; j < 15; j++)
                if(skill[i] != skill[j]){
                    var hold;
                    hold = skill[i];
                    skill[i] = skill[j];
                    skill[j] = hold;
                    break;
                }
        }

        if(skill[i] == 1) c_1++;
        if(skill[i] == 2) c_2++;
        if(skill[i] == 3) c_3++;
    }
}


var skill_num, level;
var skill = new Array(15);
var skill_end = new Array(18);
var counter_1, counter_2, counter_3;

for(var i = 0; i < 5; i++)
    skill[i] = 1;
for(var i = 5; i < 10; i++)
    skill[i] = 2;
for(var i = 10; i < 15; i++)
    skill[i] = 3;



shuffle(skill);
check(skill);



for(var i = 0; i < 15; i++){
    if(i < 5)
        skill_end[i] = skill[i];
    if(i == 4)
        skill_end[i+1] = 4;
    if(i > 4 && i < 9)
        skill_end[i+1] = skill[i];
    if(i == 8)
        skill_end[i+2] = 4;
    if(i > 8 && i < 13){
        skill_end[i+2] = skill[i];
    }
    if(i == 12){
        skill_end[i+3] = 4;
    }
    if(i > 12){
        skill_end[i+3] = skill[i];
    }    
}



for(var i = 0; i < 18; i++){
    switch(skill_end[i]){

        case 1:
            document.write('<div id="skill"><img src="skills/skill1.png"/></div>');
        break;

        default:
            document.write('<div id="skill"><img src="skills/skill1s.png"/></div>');
        break;
    }
}
for(var i = 0; i < 18; i++){
    switch(skill_end[i]){

        case 2:
            document.write('<div id="skill"><img src="skills/skill2.png"/></div>');
        break;

        default:
            document.write('<div id="skill"><img src="skills/skill2s.png"/></div>');
        break;
    }
}
for(var i = 0; i < 18; i++){
    switch(skill_end[i]){

        case 3:
            document.write('<div id="skill"><img src="skills/skill3.png"/></div>');
        break;

        default:
            document.write('<div id="skill"><img src="skills/skill3s.png"/></div>');
        break;
    }
}
for(var i = 0; i < 18; i++){
    switch(skill_end[i]){

        case 4:
            document.write('<div id="skill"><img src="skills/skill4.png"/></div>');
        break;

        default:
            document.write('<div id="skill"><img src="skills/skill4s.png"/></div>');
        break;
    }
}