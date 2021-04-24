//show variants
function show_toggle(id) {
    document.getElementById("myDropdown" + id).classList.toggle("show")
}

//writes selected variant
function set_value(name, id) {
    document.getElementById('change_this' + id).innerHTML = name;
    document.getElementById('change_this' + id).value = name;
}

//count of words with opts +1
let count = 3;

//adds word with opts
function add_opt() {
    let toAdd = ['span', 'div', 'p', 'div']
    let ids = ['add', count, 'dropdown' + count, 'change_this' + count, 'myDropdown' + count]
    let classes = ['', 'dropdown', '', 'dropdown-content']
    if (valid()) {
        for (let i = 0; i < toAdd.length; i++) {
            let elem = document.createElement(toAdd[i])
            elem.id = ids[i + 1]
            elem.className = classes[i]
            if (i == 0) {
                elem.setAttribute('onclick', 'show_toggle(this.id)')
            } else if (i == 2) {
                elem.innerHTML = '_ _ _ _'
            } else if (i == 3) {
                document.getElementById('dropdown' + count).appendChild(elem)
                continue
            }
            document.getElementById(ids[i]).appendChild(elem)
        }
        count++
        count_for_del++
    }
}


function clear_text() {
    let elem = document.getElementById('add')
    elem.innerHTML = ''
}

function add_text() {
    let elem = document.createElement('p')
    elem.innerHTML = document.getElementById('text_to_change').value + ' '
    document.getElementById('text_to_change').value = ''
    document.getElementById('add').appendChild(elem)

}

function add_from_nl() {
    if (document.getElementById('text_to_change').value != '') {
        let elem = document.createElement('br')
        document.getElementById('add').appendChild(elem)
        add_text()
    }
}

let var_count = 3

//add input field for variants
function add_more() {
    let elem = document.createElement('input')
    elem.placeholder = 'Option' + var_count
    elem.id = 'inp' + var_count
    var_count++
    document.getElementById('opts').appendChild(elem)
}

//creates word with opts and adds them
function done_opt() {
    add_opt()
    for (let i = 1; i < var_count; i++) {
        let value = document.getElementById('inp' + i).value
        if (value == '') {
            continue
        } else {
            let elem = document.createElement('a')
            elem.innerHTML = value
            elem.id = count - 1
            elem.name = value
            elem.setAttribute('onclick', 'set_value(this.name,this.id)')
            document.getElementById('myDropdown' + (count - 1)).appendChild(elem)
            document.getElementById('inp' + i).value = ''
        }
    }
}
let count_for_del = 3
//delete last word with opts
function del_opt() {
    if (count_for_del >= 2) {
        let elem = document.getElementById(count_for_del - 1)
        count_for_del--
        count--
        elem.remove()
    } else {
        alert('no item to delete')
    }
    console.clear()
}

//checks if last word has min 2 opts for adding new one
function valid() {
    if (document.getElementById('myDropdown' + (count - 1)) === null) {
        return true
    } else if (document.getElementById('myDropdown' + (count - 1)).children.length < 2) {
        return false
    }
    return true
}

function show_backdoor() {
    let elem = document.getElementById('area')
    let elem2 = document.getElementById('option-div')
    if (elem.style.display === 'block') {
        elem.style.display = 'none'
        elem2.style.display = 'none'
    } else {
        elem.style.display = 'block'
        elem2.style.display = 'block'

    }
}


//answers to base64
function base64() {
    //let value=document.getElementById('c')
    let answers = []
    for (let i = 1; i < count; i++) {
        if (document.getElementById('change_this' + i) !== null) {
            let elem = document.getElementById('change_this' + i).value
            if (elem === undefined) {
                alert('Field  is Empty')
                return 0
            } else {
                answers.push(elem)
            }
        } else {
            continue
        }

    }
    btoa(answers) == '' ? alert('Empty') : alert(btoa(answers))
}
