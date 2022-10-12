
//  window.onload = loadCoupon();

function loadCoupon(){
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('main').style.opacity='0.6';
    
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('main').style.opacity = '1';
}
