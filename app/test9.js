export default function countNodes(root) {

    // counter for how many nodes are there
    var count = 0; 
    var node;

    // queue with nodes still to be checked
    // initialise with the root node
    var queue = [root];

    // loop for as long as there is someting in the queue
    while(queue.length > 0) {

        // remove one node from the queue
        node = queue.shift();

        if (node.left == null && node.right == null) {
            count += 1;
        } else if (node.left != null && node.right != null) {
            count += 1;
            queue.push(node.right);
            queue.push(node.left);
        } else if (node.left == null) {
            count += 1;
            queue.push(node.right);
        } else if (node.right == null) {
            count += 1;
            queue.push(node.left);
        }

    }

    return count;
    
}
