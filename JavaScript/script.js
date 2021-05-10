var form = document.getElementById('form1');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);

//Delete button event
itemList.addEventListener('click', removeItem);

//Search event
filter.addEventListener('keyup', filterItems);

//function to add item
function addItem(e) {
    e.preventDefault();

    //list text
    //Get input
    var newItem = document.getElementById('input1').value;
    //create new li
    var li = document.createElement('li');
    li.className = 'list-group-item';
    //Add text to li
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    //List button
    var remBtn = document.createElement('button');
    remBtn.className = 'remove';
    remBtn.appendChild(document.createTextNode('X'));
    console.log(remBtn);
    li.appendChild(remBtn);

}

//Function to remove Item
function removeItem(e) {
    if(e.target.classList.contains('remove')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    //Edit text event
    else{
        var editText = prompt('Edit item');
        var li = e.target;
        li.className = 'list-group-item';
        li.innerHTML = editText;
        console.log(li);
        
        var remBtn = document.createElement('button');
        remBtn.className = 'remove';
        remBtn.appendChild(document.createTextNode('X'));
        console.log(remBtn);
        li.appendChild(remBtn);
    }

}

//Function to filter items
function filterItems(e) {
    var text = e.target.value.toLowerCase();
    console.log(text);
    var items = itemList.getElementsByTagName('li');
    // converting to array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });


}