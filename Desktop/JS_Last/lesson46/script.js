const wrapper = document.querySelector('.wrapper');
// console.dir(wrapper);
for(let node of wrapper.childNodes){
    if(node.nodeName = "#text"){
    continue;
    } else {
        console.log(node);
    }

    }