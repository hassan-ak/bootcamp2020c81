# Gremlin with NodeJS

## Important Nots

- Operations can't be used

  - .hasNext()
  - .next(n)
  - .toSet()

- Differences

  - from() as from\_()
  - in as in()
  - with as with()

- Notes
  - Traversal.toList(): Returns a Promise with an Array as result value.
  - Traversal.next(): Returns a Promise with a { value, done } tuple as result value, according to the async iterator proposal.
  - Traversal.iterate(): Returns a Promise without a value.
