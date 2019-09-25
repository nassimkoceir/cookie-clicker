var affichage=function(){
    document.getElementById("decompte").innerHTML ="Fin du décompte";
}

var temp=0;

var decrement = function(){
    // décompter de 30 à 0
    for(var i=30; i> -1; i--)
    {
        setTimeout((function(s)
        {
        return function(){
        decompte(s);
        }((i), temp);
        // 1000 pour 1 sec
        temp += 1000;
        }
    }
}

// on appelle fonction
decrement();
// message de fin
setTimeout(affichage, temp - 1000);
