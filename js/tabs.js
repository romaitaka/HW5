var tabs = document.getElementById('tabs');
var content = document.querySelectorAll('.content');

function changeClass(el) {
    for (var i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', function (e) {
    var thisTab = event.target.dataset.tab;
    changeClass(event.target);
    for (var i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === thisTab) {
            content[i].classList.add('active');
        }
    }
})