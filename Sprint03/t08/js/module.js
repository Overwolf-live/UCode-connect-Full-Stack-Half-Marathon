// "use strict"
class Node {
    constructor(data, next = null) {
        this.data = data,
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    add(value) {
        let node = new Node(value);
        let current;

        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            while (current.next)
                current = current.next;
            current.next = node;
        }
        this.size++;
    }
    remove(value) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.data === value) {
                if (prev == null)
                    this.head = current.next;
                else
                    prev.next = current.next;
                this.size--;
            }
            prev = current;
            current = current.next;
        }
    }
    contains(value) {
        let current = this.head;

        while (current != null) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    [Symbol.iterator] = function* () {
        for (let current = this.head; current !== null; current = current.next) {
            yield current.data;
        }
    }

    // // }
    clear() {
        let current = this.head;

        while (current != null) {
            if (current.data) {
                this.head = current.next;
                this.size--;
            }
            current = current.next;
        }
    }
    count() {
        return this.size;
    }
    log() {
        let current;
        let str = "";
        if (this.head != null) {
            current = this.head;
            while(current) {
                str += current.data;
                if (current.next)
                    str += ", ";
                current = current.next;
            }
        }
        console.log(str);
    }
}

// export {LinkedList};
