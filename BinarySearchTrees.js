class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value)
        if(this.root === null){
            this.root =  newNode;
            return this;
        } 
        let current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode
                    return this;
                    } 
                    current = current.left;
                } else {
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } 
                    current = current.right;
                }
            } 
    }
    find(value){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !false){
            if(value < current.value){
                current = current.left;
            } else if (value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    BFS(){
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(this.left)
            if(node.right) queue.push(this.right)
        }
        return data
    }
    DFSPreOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            data.push(node)
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current)
        return data

    }
}