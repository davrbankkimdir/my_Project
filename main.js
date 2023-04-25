// execute script after page load
window.onload = function digital_fn() {

    // toggle button
    let toggle = document.querySelector("#nav .toggle-button ");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click',function(event){
        collapse.classList.toggle("active")

    });

    // mansonary js
    let Element = document.querySelector("#site-main .recent-work-area .images-flex");
    let msnry = new Masonry( Element, {
      itemSelector: '.flex-item',
      columnWidth: 200,
      fitWidth:true
    });
};
// rellax js code
let rellax = new Rellax(".rellax",{
  center:true,
})
