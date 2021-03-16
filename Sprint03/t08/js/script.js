// import {LinkedList} from "./module.js"

function createLinkedList(arr) {
    let i = 0;
    let list = new LinkedList();
    while (arr[i]) {
        list.add(arr[i]);
        i++;
    }
    return list;
}

const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
