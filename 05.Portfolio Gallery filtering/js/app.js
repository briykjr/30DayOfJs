const list = function() {

    const items = [...document.querySelectorAll(".item")];

    function loop(array, callback) {
        array.forEach(item => {
            callback(item);
        });
    }

    function diable(item) {
        item.classList.add('disable');
        item.addEventListener('animationend', _ => item.style.display = 'none');
    }

    function active(item) {
        item.classList.remove('disable');
        item.style.display = 'block';
    }

    function all() {
        loop(items, item => {
            active(item);
        });
    }
 
    function web() {
        all();
        loop(items.filter(item => item.dataset.id !== 'web'), item => {
            diable(item);
        });
    }

    function responsive(){
        all();
        loop(items.filter(item => item.dataset.id !== 'responsive'), item => {
            diable(item);
        });
    }

    function uiux(){
        all();
        loop(items.filter(item => item.dataset.id !== 'uiux'), item => {
            diable(item);
        });
    }
  
    return {
        all,
        responsive,
        web,
        uiux,
    }
}();

const filterBtn  = [...document.querySelectorAll("#filter-btns li")].forEach(li => {
    li.addEventListener('click', () => {
        eval(`list.${li.dataset.target}()`);
    });
});;
