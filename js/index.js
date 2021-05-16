
var product_totall_amt = document.getElementById('product_totall_amt');
var totall_cart_amt = document.getElementById('totall_cart_amt');
var shipping_chrg = document.getElementById('shipping_chrg');
const increaseNumber = (incdec,itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);
    if(itemval.value >= 5){
        itemval.value = 5;
        alert('max number of order 5');
        itemval.style.backgroundColor ='red';
        itemval.style.color = '#fff';
    }else{
        
        itemval.value = parseInt(itemval.value)+1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML)+500;
        product_totall_amt.innerHTML = parseInt(product_totall_amt.innerHTML)+500;
        totall_cart_amt.innerHTML = parseInt(product_totall_amt.innerHTML)+ parseInt(shipping_chrg.innerHTML);
    }
}




const decreaseNumber = (incdec,itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);
    if(itemval.value <= 0){
        itemval.value = 0;
        alert('nagetive value not allowed');
    }else{
        itemval.style.backgroundColor ='#fff';
        itemval.style.color = '#333'
        itemval.value = parseInt(itemval.value)-1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML)-500;
        product_totall_amt.innerHTML = parseInt(product_totall_amt.innerHTML)-500;
        totall_cart_amt.innerHTML = parseInt(product_totall_amt.innerHTML)+ parseInt(shipping_chrg.innerHTML);
    }
    }
    

    var discount_code1 = document.getElementById('discount_code1');
    var error_trw = document.getElementById('error_trw');
    var info = document.getElementsByClassName('info1');
      
    const discount_code = () => {
        if(discount_code1.value === 'friend'){
            error_trw.innerHTML = "Thanks For using Cupon Code".fontcolor("green");
            
            totall_cart_amt.innerHTML = parseInt(product_totall_amt.innerHTML)+ parseInt(shipping_chrg.innerHTML)-100;

        }else{ 
            error_trw.innerHTML="This Code is Not Valid Try again".fontcolor("red");
            
        }
    }
   
        