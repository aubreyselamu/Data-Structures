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
        let newTail = current;

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
        let newNode = new Node(val)
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

    get(idx){
        if(idx < 0 || index >= this.length) return null;
        let count = 0;
        let current = this.head;

        while (count !== index){
            current = current.next;
            count ++;
        }
        return count;
    }

    set(idx,val){
        let foundNode = this.get(idx);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(idx,val){
        if (idx < 0 || idx > this.length) return false;
        if(idx === this.length){
            this.push(val);
            return true;
        } 
        if(idx === 0){
            this.unshift(val);
            return true;
        } 

        let newNode = new Node(val);
        let previous = this.get(idx -1);
        let temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length ++;
        return true;
        
    }

    remove(idx){
        if(idx < 0 || idx > this.length) return undefined;
        if(idx === this.length -1) return this.pop()
        if(idx === 0) return this.shift()


        let previousNode = this.get(idx-1)
        removed = previousNode.next
        previousNode.next = removed.next;
        this.length --;
        return removed;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let previous = null;
        for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = previous
            previous = node;
            node = next;
        }
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