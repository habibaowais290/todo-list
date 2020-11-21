

var work = document.getElementById('work');


function add() {
    var li = document.createElement('li');
    var items = document.getElementById('items');
    var textLi = document.createTextNode(items.value);
    li.appendChild(textLi);
    work.appendChild(li);



    btn_del = document.createElement('button');
    textDel = document.createTextNode('Delete');
    btn_del.appendChild(textDel);
    li.appendChild(btn_del);
    btn_del.setAttribute("class", "del");
    btn_del.setAttribute("onclick", "deleteLi(this)");


    btn_Edit = document.createElement('button');
    textEdit = document.createTextNode('Edit');
    btn_Edit.appendChild(textEdit);
    li.appendChild(btn_Edit);
    btn_Edit.setAttribute("class", "edit");
    btn_Edit.setAttribute("onclick", "editItem(this)");

    items.value = "";

}

function deleteLi(e) {
    e.parentNode.remove();
}


function delAll() {
    work.innerHTML = "";
}

function editItem(e) {
    var editValue = prompt("Enter your Edit value", "Edit Value");

    e.parentNode.firstChild.nodeValue = editValue

}