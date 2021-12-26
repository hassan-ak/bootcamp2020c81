const Germlin = require('gremlin');

const connection = new Germlin.driver.DriverRemoteConnection(
  'ws://localhost:8182/gremlin'
);

const graph = new Germlin.structure.Graph();
const g = graph.traversal().withRemote(connection);

const getAll = async () => {
  try {
    const names = await g.V().toList();
    console.log(names);
  } catch (error) {
    console.log('Error = ', error);
  }
};

getAll();
