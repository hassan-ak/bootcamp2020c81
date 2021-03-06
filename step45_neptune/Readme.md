# Step45 - Learning Neptune, Graph Data Modeling, Gremlin, Graphs, AI, and Machine Learning

## Reading Material

- [TinkerPop Documentation](https://tinkerpop.apache.org/docs/current/reference/)
- [Getting Started](https://tinkerpop.apache.org/docs/3.5.1/tutorials/getting-started/)
- [Gremlin Console](https://tinkerpop.apache.org/docs/3.5.1/reference/#gremlin-console)

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

- Delete all data already on server
  - `:> g.V().drop()`
- Add new vertex
  - `:> g.addV("Person")`
- for viewing graph in visulizer
  - `:> g.V()`
- Add new vertex with a property
  - `:> g.addV("Person").property("name","John Doe")`
- Add new vertex with multiple properties
  - `:> g.addV("Person").property("name","John Doe Key").property("id","101")`
- Add new vertex with with specified id
  - `:> g.addV("Person").property("name","John Doe ID").property(id,"102")`
- Create edge between two vertexis
  - `:> g.addE("FRIEND").from(__.V().has("name","John Doe")).to(__.V().has("name","John Doe Key"))`
  - `:> g.addE("FRIEND").from(__.V().has("name","John Doe ID")).to(__.V().has("name","John Doe Key"))`
- Create edge with properties between two vertexis
  - `:> g.addE("FRIEND").property("type","best").from(__.V().has("name","John Doe Key")).to(__.V().has("name","John Doe"))`
  - `:> g.addE("TEACHER").property("subject","AI").from(__.V().has("name","John Doe Key")).to(__.V().has("name","John Doe"))`
  - `:> g.addE("FRIEND").property("type","best").from(__.V().has("name","John Doe ID")).to(__.V().has("name","John Doe"))`
- Get all vertexes and ids
  - `:> g.V()`
- Get all edges and ids
  - `:> g.E()`
- Get vertexes count
  - `:> g.V().count()`
- Get edges count
  - `:> g.E().count()`
- Get all vertexes with specific label
  - `:> g.V()hasLabel("Person")`
- Get all edges with specific label
  - `:> g.E()hasLabel("FRIEND")`
- Get all vertexes with specific property
  - `:> g.V()has("name","John Doe")`
- Get all edges with specific property
  - `:> g.E()has("type","best")`
- Get all vertexes with specific label and property
  - `:> g.V()has("Person","name","John Doe")`
- Get all edges with specific label and property
  - `:> g.E()has("FRIEND","type","best")`
- To check how many vertexes are on the other end of the incomming edge
  - `:> g.V().in()`
- To check how many edges are comming in a vertex
  - `:> g.V().inE()`
- To check how many vertexes are on the incomming end of the edges
  - `:> g.V().out()`
- To check how many edges are going out of a vertex
  - `:> g.V().outE()`
- Vertex with all properties
  - `:> g.V().valueMap()`
- Edges with all properties
  - `:> g.E().valueMap()`
- All Vertex with all details
  - `:> g.V().elementMap()`
- All edges with all details
  - `:> g.E().elementMap()`
- All out vertixes of a vertex
  - `:> g.V().has("name","John Doe ID").out()`
- All out vertixes to second level of a vertex
  - `:> g.V().has("name","John Doe ID").out().out()`
- Get all vertexes and save into some variable then filter bases on a property and display that property
  - `:> g.V().as('a').properties("name").select('a').by('name')`
- Get all vertexes and save into some variable then filter bases on a property and display that property with id
  - `:> g.V().as('a').properties("name").as('b').select('a','b').by('name').by(id)`
- Get a property of all the vertixes on the other end of all the edges of a vertex
  - `:> g.V(id).out().values('name')`
- Get a property of all the vertixes on the other end of all the edges of a vertex and then the in vertexes of that
  - `:> g.V(id).out().in().values('name')`
- Some other queries
  - `:> g.V().both()`
  - `:> g.V().bothE()`
  - `:> g.V(id).out().hasNext()`
- We have set of terminal commands we use with naptune, those commands terminate the triversal
