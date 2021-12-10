// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        length --;
        if(length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        length --;
        if(length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        newNode = new Node(val)
        if(!this.head){
            this.head  = null;
            this.tail = this.head;
        } else {
            //pointing the new node at the head, giving us the connect
            newNode.next = this.head; 
            //updating head
            this.head = newNode;
        }
        length ++;
        return this;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList() 
list.push("HELLO")
list.push("GOODBYE")