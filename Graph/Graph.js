class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    removeVertex(vertex1) {     
        this.adjacencyList[vertex1].forEach(vertex2 => this.removeEdge(vertex1, vertex2))
        delete this.adjacencyList[vertex1];
    }

    addEdge(vertex1, vertex2) {    
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

}


const graph = new Graph();
graph.addVertex("jammu")
graph.addVertex("delhi")
graph.addVertex("bangalore")


graph.addEdge("jammu", "delhi")
graph.addEdge("delhi", "bangalore")

// graph.removeVertex("jammu");

// graph.removeEdge("jammu", "delhi")