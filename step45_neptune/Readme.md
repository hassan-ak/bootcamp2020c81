# Step45 - Learning Neptune, Graph Data Modeling, Gremlin, Graphs, AI, and Machine Learning

## Class Notes

- Install [Gremlin Server](https://dlcdn.apache.org/tinkerpop/3.5.1/apache-tinkerpop-gremlin-server-3.5.1-bin.zip)
  - `bin/gremlin-server.bat conf/gremlin-server-modern.yaml`
- Install [Gremlin Console](https://dlcdn.apache.org/tinkerpop/3.5.1/apache-tinkerpop-gremlin-console-3.5.1-bin.zip)
  - `bin/gremlin.bat`
- Connect console and server by using `:remote connect tinkerpop.server conf/remote.yaml` in gremlin console
- Get gremlin visulizer
  - Get gremlin vusilizer`git clone https://github.com/prabushitha/gremlin-visualizer.git`
  - `cd gremlin-visualizer`
  - As it is react based app install it `npm install`
  - Run the visulizer `npm start`

## Run Queries

1. Delete all data already on server `:> g.V().drop()`
2. Add new vertex `:> g.addV("Person")`
3. for viewing graph in visulizer `:> g.V()`
4. Add new vertex with a property `:> g.addV("Person").property("name","John Doe")`
5. Add new vertex with multiple properties `:> g.addV("Person").property("name","John Doe Key").property("id","101")`
6. Add new vertex with with specified id `:> g.addV("Person").property("name","John Doe ID").property(id,"102")`
7. Create edge between two vertexis `:> g.addE("FRIEND").from(__.V().has("name","John Doe")).to(__.V().has("name","John Doe Key"))`
8. Create edge with properties between two vertexis `:> g.addE("FRIEND").property("type","best").from(__.V().has("name","John Doe Key")).to(__.V().has("name","John Doe"))`
9. Get all vertexes and ids `:> g.V()`
10. Get all edges and ids `:> g.E()`
11. Get vertexes count `:> g.V().count()`
12. Get edges count `:> g.E().count()`
13. Get all vertexes with specific label `:> g.V()hasLabel("Person")`
14. Get all edges with specific label `:> g.E()hasLabel("FRIEND")`
15. Get all vertexes with specific property `:> g.V()has("name","John Doe")`
16. Get all edges with specific property `:> g.E()has("type","best")`
17. Get all vertexes with specific label and property `:> g.V()has("Person","name","John Doe")`
18. Get all edges with specific label and property `:> g.E()has("FRIEND","type","best")`
