let box = document.querySelector('.box');

let button = document.querySelector('.button');





    function add_class(element, class_name){
        element.classList.add(class_name);
    }

    button.addEventListener("click", function() {
        add_class(box, 'box_change');
    });
}













