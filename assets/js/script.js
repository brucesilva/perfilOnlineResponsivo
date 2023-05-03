document.addEventListener('DOMContentLoaded', ()=> {
    new TypeIt(".animated", {
        speed:300, 
        loop:true, 
    })
    .type('HTML', {delay:900})
    .delete(4)
    .type('CSS3', {delay:700})
    .delete(4)
    .type('Javascropt' , {delay:500})
    // esse pause é para dar a sensação que parei para apagar
    .pause(500)
    .delete(3)
    .type('ipt', {delay:500})
    .delete(10)
    .type('PHP', {delay: 500}).delete(3)
    .type('Bootstrap', {delay:500})
    
    .go()
})
 


 
 
 
 