var wave, wave_b;
var keystone, keystone_b;
var rune1, rune2, rune3;

wave = Math.floor(Math.random()*5+1);
wave_b = Math.floor(Math.random()*5+1);

while(wave == wave_b){
    wave_b = Math.floor(Math.random()*5+1);
}



switch(wave){
    case 1:
        keystone = Math.floor(Math.random()*4+1);                            
        
        switch(keystone){
            
            case 1:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune11.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune12s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune13s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune14s.png"/></div>');
                document.write('</div>');   
            break;
            
            case 2:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune11s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune12.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune13s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune14s.png"/></div>');
                document.write('</div>');   
            break;

            case 3:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune11s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune12s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune13.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune14s.png"/></div>');
                document.write('</div>');   
            break;

            case 4:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune11s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune12s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune13s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune14.png"/></div>');
                document.write('</div>');   
            break;             
        }
            
        rune1 = Math.floor(Math.random()*3+1);
        document.write('<div id="r_a_cointainer">');
        switch(rune1){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune111.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune112s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune113s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune111s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune112.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune113s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune111s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune112s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune113.png"/></div>');
            break;
        }

        rune2 = Math.floor(Math.random()*3+1);
        switch(rune2){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune121.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune122s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune123s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune121s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune122.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune123s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune121s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune122s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune123.png"/></div>');
            break;
        }

        rune3 = Math.floor(Math.random()*3+1);
        switch(rune3){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune131.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune132s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune133s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune131s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune132.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune133s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune131s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune132s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune133.png"/></div>');
            break;
            
        }
        
        document.write('</div>');
    break;

    case 2:
        keystone = Math.floor(Math.random()*4+1);   
        switch(keystone){
            
            case 1:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune21.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune22s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune23s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune24s.png"/></div>');
                document.write('</div>');   
            break;
            
            case 2:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune21s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune22.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune23s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune24s.png"/></div>');
                document.write('</div>');   
            break;

            case 3:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune21s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune22s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune23.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune24s.png"/></div>');
                document.write('</div>');   
            break;

            case 4:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune21s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune22s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune23s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune24.png"/></div>');
                document.write('</div>');   
            break;
            
        }
            
        rune1 = Math.floor(Math.random()*3+1);
        document.write('<div id="r_a_cointainer">');
        switch(rune1){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune211.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune212s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune213s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune211s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune212.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune213s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune211s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune212s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune213.png"/></div>');
            break;
        }
        rune2 = Math.floor(Math.random()*3+1);
        switch(rune2){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune221.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune222s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune223s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune221s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune222.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune223s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune221s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune222s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune223.png"/></div>');
            break;
        }

        rune3 = Math.floor(Math.random()*4+1);
        switch(rune3){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune231.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune232s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune233s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune234s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune231s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune232.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune233s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune234s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune231s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune232s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune233.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune234s.png"/></div>');
            break;

            case 4:
                document.write('<div id="rune1"><img src="../../runes/rune231s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune232s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune233s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune234.png"/></div>');
            break;
        }
        document.write('</div>');
    break;

    case 3:
        keystone = Math.floor(Math.random()*3+1);
        switch(keystone){
            
            case 1:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune31.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune32s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune33s.png"/></div>');
                document.write('</div>');   
            break;
            
            case 2:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune31s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune32.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune33s.png"/></div>');
                document.write('</div>');   
            break;

            case 3:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune31s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune32s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune33.png"/></div>');
                document.write('</div>');   
            break;
                         
        }
            
        rune1 = Math.floor(Math.random()*3+1);
        document.write('<div id="r_a_cointainer">');
        switch(rune1){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune311.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune312s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune313s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune311s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune312.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune313s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune311s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune312s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune313.png"/></div>');
            break;
        }

        rune2 = Math.floor(Math.random()*3+1);
        switch(rune2){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune321.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune322s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune323s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune321s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune322.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune323s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune321s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune322s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune323.png"/></div>');
            break;
        }

        rune3 = Math.floor(Math.random()*3+1);
        switch(rune3){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune331.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune332s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune333s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune331s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune332.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune333s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune331s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune332s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune333.png"/></div>');
            break;
        }

        document.write('</div>');
    break;

    case 4:
        keystone = Math.floor(Math.random()*3+1);
        switch(keystone){
           
            case 1:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune41.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune42s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune43s.png"/></div>');
                document.write('</div>');   
            break;
            
            case 2:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune41s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune42.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune43s.png"/></div>');
                document.write('</div>');   
            break;

            case 3:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune41s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune42s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune43.png"/></div>');
                document.write('</div>');   
            break;  
                      
        }
            
        rune1 = Math.floor(Math.random()*3+1);
        document.write('<div id="r_a_cointainer">');
        switch(rune1){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune411.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune412s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune413s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune411s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune412.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune413s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune411s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune412s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune413.png"/></div>');
            break;
        }

        rune2 = Math.floor(Math.random()*3+1);
        switch(rune2){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune421.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune422s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune423s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune421s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune422.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune423s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune421s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune422s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune423.png"/></div>');
            break;
        }

        rune3 = Math.floor(Math.random()*3+1);
        switch(rune3){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune431.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune432s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune433s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune431s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune432.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune433s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune431s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune432s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune433.png"/></div>');
            break;
        }
        document.write('</div>');
    break;

    case 5:
        keystone = Math.floor(Math.random()*3+1);
        switch(keystone){
            
            case 1:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune51.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune52s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune53s.png"/></div>');
                document.write('</div>');   
            break;
            
            case 2:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune51s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune52.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune53s.png"/></div>');
                document.write('</div>');   
            break;

            case 3:
                document.write('<div id="k_cointainer">');
                document.write('<div id="keystone"><img src="../../runes/rune51s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune52s.png"/></div>');
                document.write('<div id="keystone"><img src="../../runes/rune53.png"/></div>');
                document.write('</div>');   
            break;
                     
        }
            
        rune1 = Math.floor(Math.random()*3+1);
        document.write('<div id="r_a_cointainer">');
        switch(rune1){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune511.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune512s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune513s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune511s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune512.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune513s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune511s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune512s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune513.png"/></div>');
            break;
        }

        rune2 = Math.floor(Math.random()*3+1);
        switch(rune2){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune521.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune522s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune523s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune521s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune522.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune523s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune521s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune522s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune523.png"/></div>');
            break;
        }

        rune3 = Math.floor(Math.random()*3+1);
        switch(rune3){
            case 1:
                document.write('<div id="rune1"><img src="../../runes/rune531.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune532s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune533s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="../../runes/rune531s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune532.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune533s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="../../runes/rune531s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune532s.png"/></div>');
                document.write('<div id="rune"><img src="../../runes/rune533.png"/></div>');
            break;
        }
        document.write('</div>');
    break;

}

/*switch(wave_b){
    case 1:
        keystone_b = Math.floor(Math.random()*3+1);
        switch(keystone_b){
        case 1:
            document.write('<div id="rune1"><img src="runes/rune111s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune112s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune113s.png"/></div>');
            
            rune2 = Math.floor(Math.random()*3+1);
            switch(rune2){
                case 1:
                    document.write('<div id="rune1"><img src="runes/rune121.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune122s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune123s.png"/></div>');
                break;
                
                case 2:
                    document.write('<div id="rune1"><img src="runes/rune121s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune122.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune123s.png"/></div>');
                break;

                case 3:
                    document.write('<div id="rune1"><img src="runes/rune121s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune122s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune123.png"/></div>');
                break;
            }

            rune3 = Math.floor(Math.random()*3+1);
            switch(rune3){
                case 1:
                    document.write('<div id="rune1"><img src="runes/rune131.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune132s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune133s.png"/></div>');
                break;

                case 2:
                    document.write('<div id="rune1"><img src="runes/rune131s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune132.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune133s.png"/></div>');
                break;

                case 3:
                    document.write('<div id="rune1"><img src="runes/rune131s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune132s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune133.png"/></div>');
                break;
            }
        break;

        case 2:
            rune1 = Math.floor(Math.random()*3+1);
            switch(rune1){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune111.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune112s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune113s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune111s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune112.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune113s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune111s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune112s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune113.png"/></div>');
            break;    
            }

            document.write('<div id="rune1"><img src="runes/rune121s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune122s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune123s.png"/></div>');

            rune3 = Math.floor(Math.random()*3+1);
            switch(rune3){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune131.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune132s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune133s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune131s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune132.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune133s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune131s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune132s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune133.png"/></div>');
            break;
            }

        break;
        

        case 3:
            rune1 = Math.floor(Math.random()*3+1);
            switch(rune1){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune111.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune112s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune113s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune111s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune112.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune113s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune111s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune112s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune113.png"/></div>');
            break;    
            }
            

            rune2 = Math.floor(Math.random()*3+1);
            switch(rune2){
            case 1:
                document.write('<div id="rune1"><img src="runes/rune121.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune122s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune123s.png"/></div>');
            break;
            
            case 2:
                document.write('<div id="rune1"><img src="runes/rune121s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune122.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune123s.png"/></div>');
            break;
            case 3:
                document.write('<div id="rune1"><img src="runes/rune121s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune122s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune123.png"/></div>');
            break;
            }

            document.write('<div id="rune1"><img src="runes/rune131s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune132s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune133s.png"/></div>');
        break;
        }
    break;
    case 2:
        keystone_b = Math.floor(Math.random()*3+1);
        switch(keystone_b){
        case 1:
            document.write('<div id="rune1"><img src="runes/rune211s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune212s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune213s.png"/></div>');
            
            rune2 = Math.floor(Math.random()*3+1);
            switch(rune2){
                case 1:
                    document.write('<div id="rune1"><img src="runes/rune221.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune222s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune223s.png"/></div>');
                break;
                
                case 2:
                    document.write('<div id="rune1"><img src="runes/rune221s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune222.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune223s.png"/></div>');
                break;

                case 3:
                    document.write('<div id="rune1"><img src="runes/rune221s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune222s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune223.png"/></div>');
                break;
            }

            rune3 = Math.floor(Math.random()*4+1);
            switch(rune3){
                case 1:
                    document.write('<div id="rune1"><img src="runes/rune231.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune232s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune233s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune234s.png"/></div>');
                break;

                case 2:
                    document.write('<div id="rune1"><img src="runes/rune231s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune232.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune233s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune234s.png"/></div>');
                break;

                case 3:
                    document.write('<div id="rune1"><img src="runes/rune231s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune232s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune233.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune234s.png"/></div>');
                break;
                case 4:
                    document.write('<div id="rune1"><img src="runes/rune231s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune232s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune233s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune234.png"/></div>');
                break;
            }
        break;

        case 2:
            rune1 = Math.floor(Math.random()*3+1);
            switch(rune1){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune211.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune212s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune213s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune211s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune212.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune213s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune211s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune212s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune213.png"/></div>');
            break;    
            }

            document.write('<div id="rune1"><img src="runes/rune221s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune222s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune223s.png"/></div>');

            rune3 = Math.floor(Math.random()*3+1);
            switch(rune3){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune231.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune232s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune233s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune234s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune231s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune232.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune233s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune234s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune231s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune232s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune233.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune234s.png"/></div>');
            break;

            case 4:
                document.write('<div id="rune1"><img src="runes/rune231s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune232s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune233s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune234.png"/></div>');
            break;
            }

        break;
        

        case 3:
            rune1 = Math.floor(Math.random()*3+1);
            switch(rune1){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune211.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune212s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune213s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune211s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune212.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune213s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune211s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune212s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune213.png"/></div>');
            break;    
            }
            

            rune2 = Math.floor(Math.random()*3+1);
            switch(rune2){
            case 1:
                document.write('<div id="rune1"><img src="runes/rune221.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune222s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune223s.png"/></div>');
            break;
            
            case 2:
                document.write('<div id="rune1"><img src="runes/rune221s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune222.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune223s.png"/></div>');
            break;
            case 3:
                document.write('<div id="rune1"><img src="runes/rune221s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune222s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune223.png"/></div>');
            break;
            }

            document.write('<div id="rune1"><img src="runes/rune231s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune232s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune233s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune234s.png"/></div>');
        break;
        }
    break;

    case 3:
        keystone_b = Math.floor(Math.random()*3+1);
        switch(keystone_b){
        case 1:
            document.write('<div id="rune1"><img src="runes/rune311s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune312s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune313s.png"/></div>');
            
            rune2 = Math.floor(Math.random()*3+1);
            switch(rune2){
                case 1:
                    document.write('<div id="rune1"><img src="runes/rune321.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune322s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune323s.png"/></div>');
                break;
                
                case 2:
                    document.write('<div id="rune1"><img src="runes/rune321s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune322.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune323s.png"/></div>');
                break;

                case 3:
                    document.write('<div id="rune1"><img src="runes/rune321s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune322s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune323.png"/></div>');
                break;
            }

            rune3 = Math.floor(Math.random()*3+1);
            switch(rune3){
                case 1:
                    document.write('<div id="rune1"><img src="runes/rune331.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune332s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune333s.png"/></div>');
                break;

                case 2:
                    document.write('<div id="rune1"><img src="runes/rune331s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune332.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune333s.png"/></div>');
                break;

                case 3:
                    document.write('<div id="rune1"><img src="runes/rune331s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune332s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune333.png"/></div>');
                break;
            }
        break;

        case 2:
            rune1 = Math.floor(Math.random()*3+1);
            switch(rune1){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune311.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune312s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune313s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune311s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune312.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune313s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune311s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune312s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune313.png"/></div>');
            break;    
            }

            document.write('<div id="rune1"><img src="runes/rune321s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune322s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune323s.png"/></div>');

            rune3 = Math.floor(Math.random()*3+1);
            switch(rune3){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune331.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune332s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune333s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune331s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune332.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune333s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune331s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune332s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune333.png"/></div>');
            break;
            }

        break;
        

        case 3:
            rune1 = Math.floor(Math.random()*3+1);
            switch(rune1){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune311.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune312s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune313s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune311s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune312.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune313s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune311s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune312s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune313.png"/></div>');
            break;    
            }
            

            rune2 = Math.floor(Math.random()*3+1);
            switch(rune2){
            case 1:
                document.write('<div id="rune1"><img src="runes/rune321.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune322s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune323s.png"/></div>');
            break;
            
            case 2:
                document.write('<div id="rune1"><img src="runes/rune321s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune322.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune323s.png"/></div>');
            break;
            case 3:
                document.write('<div id="rune1"><img src="runes/rune321s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune322s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune323.png"/></div>');
            break;
            }

            document.write('<div id="rune1"><img src="runes/rune331s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune332s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune333s.png"/></div>');
        break;
        }
    break;

    case 4:
        keystone_b = Math.floor(Math.random()*3+1);
        switch(keystone_b){
        case 1:
            document.write('<div id="rune1"><img src="runes/rune411s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune412s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune413s.png"/></div>');
            
            rune2 = Math.floor(Math.random()*3+1);
            switch(rune2){
                case 1:
                    document.write('<div id="rune1"><img src="runes/rune421.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune422s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune423s.png"/></div>');
                break;
                
                case 2:
                    document.write('<div id="rune1"><img src="runes/rune421s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune422.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune423s.png"/></div>');
                break;

                case 3:
                    document.write('<div id="rune1"><img src="runes/rune421s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune422s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune423.png"/></div>');
                break;
            }

            rune3 = Math.floor(Math.random()*3+1);
            switch(rune3){
                case 1:
                    document.write('<div id="rune1"><img src="runes/rune431.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune432s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune433s.png"/></div>');
                break;

                case 2:
                    document.write('<div id="rune1"><img src="runes/rune431s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune432.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune433s.png"/></div>');
                break;

                case 3:
                    document.write('<div id="rune1"><img src="runes/rune431s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune432s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune433.png"/></div>');
                break;
            }
        break;

        case 2:
            rune1 = Math.floor(Math.random()*3+1);
            switch(rune1){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune411.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune412s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune413s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune411s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune412.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune413s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune411s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune412s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune413.png"/></div>');
            break;    
            }

            document.write('<div id="rune1"><img src="runes/rune421s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune422s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune423s.png"/></div>');

            rune3 = Math.floor(Math.random()*3+1);
            switch(rune3){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune431.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune432s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune433s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune431s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune432.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune433s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune431s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune432s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune433.png"/></div>');
            break;
            }

        break;
        

        case 3:
            rune1 = Math.floor(Math.random()*3+1);
            switch(rune1){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune411.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune412s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune413s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune411s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune412.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune413s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune411s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune412s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune413.png"/></div>');
            break;    
            }
            

            rune2 = Math.floor(Math.random()*3+1);
            switch(rune2){
            case 1:
                document.write('<div id="rune1"><img src="runes/rune421.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune422s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune423s.png"/></div>');
            break;
            
            case 2:
                document.write('<div id="rune1"><img src="runes/rune421s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune422.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune423s.png"/></div>');
            break;
            case 3:
                document.write('<div id="rune1"><img src="runes/rune421s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune422s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune423.png"/></div>');
            break;
            }

            document.write('<div id="rune1"><img src="runes/rune431s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune432s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune433s.png"/></div>');
        break;
        }
    break;

    case 5:
        keystone_b = Math.floor(Math.random()*3+1);
        switch(keystone_b){
        case 1:
            document.write('<div id="rune1"><img src="runes/rune511s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune512s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune513s.png"/></div>');
            
            rune2 = Math.floor(Math.random()*3+1);
            switch(rune2){
                case 1:
                    document.write('<div id="rune1"><img src="runes/rune521.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune522s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune523s.png"/></div>');
                break;
                
                case 2:
                    document.write('<div id="rune1"><img src="runes/rune521s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune522.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune523s.png"/></div>');
                break;

                case 3:
                    document.write('<div id="rune1"><img src="runes/rune521s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune522s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune523.png"/></div>');
                break;
            }

            rune3 = Math.floor(Math.random()*3+1);
            switch(rune3){
                case 1:
                    document.write('<div id="rune1"><img src="runes/rune531.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune532s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune533s.png"/></div>');
                break;

                case 2:
                    document.write('<div id="rune1"><img src="runes/rune531s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune532.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune533s.png"/></div>');
                break;

                case 3:
                    document.write('<div id="rune1"><img src="runes/rune531s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune532s.png"/></div>');
                    document.write('<div id="rune"><img src="runes/rune533.png"/></div>');
                break;
            }
        break;

        case 2:
            rune1 = Math.floor(Math.random()*3+1);
            switch(rune1){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune511.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune512s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune513s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune511s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune512.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune513s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune511s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune512s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune513.png"/></div>');
            break;    
            }

            document.write('<div id="rune1"><img src="runes/rune521s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune522s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune523s.png"/></div>');

            rune3 = Math.floor(Math.random()*3+1);
            switch(rune3){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune531.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune532s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune533s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune531s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune532.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune533s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune531s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune532s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune533.png"/></div>');
            break;
            }

        break;
        

        case 3:
            rune1 = Math.floor(Math.random()*3+1);
            switch(rune1){
                case 1:
                document.write('<div id="rune1"><img src="runes/rune511.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune512s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune513s.png"/></div>');
            break;

            case 2:
                document.write('<div id="rune1"><img src="runes/rune511s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune512.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune513s.png"/></div>');
            break;

            case 3:
                document.write('<div id="rune1"><img src="runes/rune511s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune512s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune513.png"/></div>');
            break;    
            }
            

            rune2 = Math.floor(Math.random()*3+1);
            switch(rune2){
            case 1:
                document.write('<div id="rune1"><img src="runes/rune521.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune522s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune523s.png"/></div>');
            break;
            
            case 2:
                document.write('<div id="rune1"><img src="runes/rune521s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune522.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune523s.png"/></div>');
            break;
            case 3:
                document.write('<div id="rune1"><img src="runes/rune521s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune522s.png"/></div>');
                document.write('<div id="rune"><img src="runes/rune523.png"/></div>');
            break;
            }

            document.write('<div id="rune1"><img src="runes/rune531s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune532s.png"/></div>');
            document.write('<div id="rune"><img src="runes/rune533s.png"/></div>');
        break;
        }
    break;
}*/