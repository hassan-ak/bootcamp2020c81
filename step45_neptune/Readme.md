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

1. Delete all data already on server

- `:> g.V().drop()`

2. Add new vertex `:> g.addV("Person")`
3. for viewing graph in visulizer `:> g.V()`
4. Add new vertex with a property `:> g.addV("Person").property("name","John Doe")`
5. Add new vertex with multiple properties `:> g.addV("Person").property("name","John Doe Key").property("id","101")`
6. Add new vertex with with specified id `:> g.addV("Person").property("name","John Doe ID").property(id,"102")`
7. Create edge between two vertexis

- `:> g.addE("FRIEND").from(__.V().has("name","John Doe")).to(__.V().has("name","John Doe Key"))`
- `:> g.addE("FRIEND").from(__.V().has("name","John Doe ID")).to(__.V().has("name","John Doe Key"))`

8. Create edge with properties between two vertexis

- `:> g.addE("FRIEND").property("type","best").from(__.V().has("name","John Doe Key")).to(__.V().has("name","John Doe"))`
- `:> g.addE("TEACHER").property("subject","AI").from(__.V().has("name","John Doe Key")).to(__.V().has("name","John Doe"))`
- `:> g.addE("FRIEND").property("type","best").from(__.V().has("name","John Doe ID")).to(__.V().has("name","John Doe"))`

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
19. We have set of terminal commands we use with naptune, those commands terminate the triversal
20. To check how many vertexes are on the other end of the incomming edge `:> g.V().in()`
21. To check how many edges are comming in a vertex `:> g.V().inE()`
22. To check how many vertexes are on the incomming end of the edges `:> g.V().out()`
23. To check how many edges are going out of a vertex `:> g.V().outE()`
24. `:> g.V().both()`
25. `:> g.V().bothE()`
26. Vertex with all properties `:> g.V().valueMap()`
27. Edges with all properties `:> g.E().valueMap()`
28. All Vertex with all details `:> g.V().elementMap()`
29. All edges with all details `:> g.E().elementMap()`
30. All out vertixes of a vertex`:> g.V().has("name","John Doe ID").out()`
31. All out vertixes to second level of a vertex`:> g.V().has("name","John Doe ID").out().out()`
32. Get all vertexes and save into some variable then filter bases on a property and display that property `:> g.V().as('a').properties("name").select('a').by('name')`
33. Get all vertexes and save into some variable then filter bases on a property and display that property with id `:> g.V().as('a').properties("name").as('b').select('a','b').by('name').by(id)`
34. Get a property of all the vertixes on the other end of all the edges of a vertex `:> g.V(id).out().values('name')`
35. Get a property of all the vertixes on the other end of all the edges of a vertex and then the in vertexes of that `:> g.V(id).out().in().values('name')`
36. `:> g.V(id).out().hasNext()`
