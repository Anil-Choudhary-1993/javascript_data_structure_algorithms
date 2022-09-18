class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    removeVertex(vertex1) {
        this.adjacencyList[vertex1].forEach((vertex2) =>
            this.removeEdge(vertex1, vertex2)
        );
        delete this.adjacencyList[vertex1];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (v) => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (v) => v !== vertex1
        );
    }

    depthFirstSearachRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(node) {
            if (!node) return;
            visited[node] = true;
            result.push(node);
            adjacencyList[node].forEach((v) => !visited[v] && dfs(v));
        })(start);

        return result;
    }

    depthFirstSearachIterative(start) {
        const result = [];
        const visited = {};
        const stack = [start];
        visited[start] = true;
        let node;
        while (stack.length) {
            node = stack.pop();
            result.push(node);
            this.adjacencyList[node].forEach((v) => {
                if (!visited[v]) {
                    visited[v] = true;
                    stack.push(v);
                }
            });
        }
        return result;
    }

    breadthFirstSearch(start) {
        const result = [];
        const visited = {};
        const queue = [start];
        visited[start] = true;
        let node;
        while (queue.length) {
            node = queue.shift();
            result.push(node);
            this.adjacencyList[node]
                .slice()
                .reverse()
                .forEach((v) => {
                    if (!visited[v]) {
                        visited[v] = true;
                        queue.push(v);
                    }
                });
        }
        return result;
    }
}

// const graph = new Graph();
// graph.addVertex("jammu")
// graph.addVertex("delhi")
// graph.addVertex("bangalore")
// graph.addEdge("jammu", "delhi")
// graph.addEdge("delhi", "bangalore")
// graph.removeVertex("jammu");
// graph.removeEdge("jammu", "delhi")

//               A
//            /      \
//           B        C
//          /          \
//         D   ------   E
//         \            /
//          \          /
//            \       /
//                F

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');
console.log(graph);

console.log(graph.depthFirstSearachRecursive('A'));

console.log(graph.depthFirstSearachIterative('A'));

console.log(graph.breadthFirstSearch('A'));
