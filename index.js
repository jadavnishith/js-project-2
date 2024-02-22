// ------ Question 1-------
var array = [[9,6,1],
             [10,15,25],
             [7,5,30]];
    for(var i=0; i<array.length; i++){
        for(var j=0; j<array.length; j++){
            if((array[i][j]%3==0) && (array[i][j]%5==0)){
                console.log(array[i][j]);
            }
        }
    }    
    
// ------ Question 2-------
var array = [[1,2,3],
             [4,5,6],
             [7,8,9]];
    
    var sum2=0;
    var sum3=0;         
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            if(i==j){
                sum2+=array[i][j];
            }
            if(i+j==2){
                sum2+=array[i][j];
            }
            if(i==0 || j==0 || i==2 || j==2){
                sum3+=array[i][j];
            }
        }
        
    }  
    if(sum3 > sum2){
        console.log(sum3-sum2);
    }else{
        console.log(sum2-sum3);
    }          