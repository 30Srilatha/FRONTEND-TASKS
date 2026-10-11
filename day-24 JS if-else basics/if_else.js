// positive negative
function positive(){
    let n=parseInt(document.getElementById("n1").value)
if(n>0){
   result="positive"
    
}else{
    result="negative"
}
document.getElementById("positive").value=result;

}

// smallest number
function small(){
    let n1=parseInt(document.getElementById("n2").value)
    let n2=parseInt(document.getElementById("n3").value)
    if(n1<n2){
        res=n1+" is smallest"
    }
    else{
        res=n2+" is smallest"
    }
    document.getElementById("small").value=res
}

// divisible by 5
function divisible(){
     let m=parseInt(document.getElementById("n4").value)
     if(m%5===0){
        result=m+" is divisible by 5"
     }
     else{
        result=m+" is not divisible by 5"
     }
     document.getElementById("by").value=result
    }

// even or not
function even(){
     let num=parseInt(document.getElementById("n5").value)
     if(num%2==0){
        result=num+" is even"
     }
     else{
        result=num+" is not even"
     }
     document.getElementById("even").value=result
 }
//  discount

function discount(){
    let bill=parseInt(document.getElementById("n6").value)
    if(bill>5000){
        discount=bill*(20/100)
        result=bill-discount
    }
    else{
        result=bill+" (no discount added)"
    }
    document.getElementById("dis").value=result
}

