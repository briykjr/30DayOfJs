const list = function() {

    const items = [...document.querySelectorAll(".item")];

    function active(item) {
        item.classList.remove('disable');
        item.style.display = 'block';
    }

    function diable(item) {
        item.classList.add('disable');
        item.addEventListener("animationend", _ => {
            if (item.classList.contains('disable')) item.style.display = 'none';
        }, {once: true});
    }

    function show(target) {
        items.forEach(item => {
            if (target == item.dataset.id) {
                active(item)
            } else if (target == 'all') {
                active(item);
            } else {
                diable(item);
            }
        });
    }

    function all() {
        show('all');
    }
 
    function web() {
        show('web');
    }

    function responsive(){
        show('responsive');
    }

    function uiux(){
        show('uiux');
    }
  
    return {
        all,
        web,
        responsive,
        uiux,
    }
}();

[...document.querySelectorAll("#filter-btns li")].forEach(li => {
    li.addEventListener('click', () => eval(`list.${li.dataset.target}()`));
});
