$(function() {
    
    var finished = [];
    function catFinished(cat){
        
        finished[cat]=true;
        
        var allFinished = true;
        for(var i =0;i<6;i++)
            allFinished = allFinished && finished[i];
        
        if(allFinished)
            resetCats();
    }
    
    function resetCats(){
        for(var i=0;i<6;i++){
            $("#kissa"+(i+1)).css({left:0});
            finished[i]=false;
            console.log("kiikikii");
        }
    }
    
        
    function startCats(){
        var kisu1 = Math.random() * 10000 + 5000;
        var viive1 = Math.random() * 1000 +1;
        $('#kissa1').delay( viive1 ).animate({left: "+=1500px"}, kisu1,function(){catFinished(0);});

        var kisu2 = Math.random() * 10000 + 5000;
        var viive2 = Math.random() * 1000 +1;
        $('#kissa2').delay( viive2 ).animate({left: "+=1500px"}, kisu2,function(){catFinished(1);});

        var kisu3 = Math.random() * 10000 + 5000;
        var viive3 = Math.random() * 1000 +1;
        $('#kissa3').delay( viive3 ).animate({left: "+=1500px"}, kisu3,function(){catFinished(2);});

        var kisu4 = Math.random() * 10000 + 5000;
        var viive4 = Math.random() * 1000 +1;
        $('#kissa4').delay( viive4 ).animate({left: "+=1500px"}, kisu4,function(){catFinished(3);});

        var kisu5 = Math.random() * 10000 + 5000;
        var viive5 = Math.random() * 1000 +1;
        $('#kissa5').delay( viive5 ).animate({left: "+=1500px"}, kisu5,function(){catFinished(4);});
        
        var kisu6 = Math.random() * 10000 + 5000;
        var viive6 = Math.random() * 1000 +1;
        $('#kissa6').delay( viive6 ).animate({left: "+=1500px"}, kisu6,function(){catFinished(5);});
        
    }
        
    $('button').click(startCats);
            
    
});