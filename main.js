var coins=0;
var coinsPerSec=0;
var gen1=0;
var gen1cost=10;
var gen1units=0;
var gen1mult=1;
var gen1prod=0;

function getCoins(number){
    coins=coins+number;
    document.getElementById("coinAmount").innerHTML=coins.toFixed(2);
}

function getGen1(number){
    if (coins>=gen1cost) {
        gen1=gen1+1;
        if (gen1units+1==10) {
            gen1units=0;
            gen1mult=gen1mult*2;
            coins=coins-gen1cost;
            gen1cost=gen1cost*100;
            coinsPerSec=coinsPerSec-gen1prod+(0.1*gen1*gen1mult);

        }
        else {
            gen1units=gen1units+1;
            coins=coins-gen1cost;
            coinsPerSec=coinsPerSec+(0.1*gen1mult);
        }
        gen1prod=0.1*gen1*gen1mult;
        
        document.getElementById("gen1units").innerHTML=gen1units;
        document.getElementById("gen1mult").innerHTML=gen1mult;
        document.getElementById("gen1total").innerHTML=gen1;
        document.getElementById("gen1price").innerHTML=gen1cost;
        document.getElementById("coinAmount").innerHTML=coins.toFixed(2);
        document.getElementById("coinsPerSec").innerHTML=coinsPerSec.toFixed(2);
    }
}

window.setInterval(function(){
    getCoins(gen1prod/10);
}, 100);