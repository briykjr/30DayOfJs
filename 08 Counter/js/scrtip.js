const counters = document.querySelectorAll('.counter');
const speed = 200;
counters.forEach( counter => {
    const updateCounter = () =>{
        const target = counter.getAttribute('data-target');
        const count = +counter.innerHTML ;
        const score = parseInt(target / speed) ;
        if (count < target){
            counter.innerHTML = count + score;
            setTimeout( updateCounter , 10);
        } else{
            counter.innerHTML = target;
        }
    }
    updateCounter();
    
})

// Define .counters which represent numbers will increased
// define speed and its optional
//  looping through each counter using foreach
//  set updatcounter function 
//get data-target attribute, initial value  , current value ( count )
