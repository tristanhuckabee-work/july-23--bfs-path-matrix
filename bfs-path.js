function findNeighbors(node, matrix) {
  let neighbors = [];
  const [row, col] = node;
  let positions = [
    [row + 1, col], [row - 1, col], [row, col + 1], [row, col - 1]
  ];
  for (let [r, c] of positions) {
    if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[r].length) {
      neighbors.push([r, c]);
    }
  }
  // if (matrix[row-1])...
  return neighbors;
  // Up
  // Down
  // Left
  // Right
  // Your code here
}


function bfsPath(matrix, startNode, endValue) {
  // Your code here
  if (matrix[startNode[0]][startNode[1]] == endValue) return [startNode];

  const queue = [startNode];
  const visited = new Set();
  const res = [];

  visited.add(`${startNode}`)

  while (queue.length > 0) {
    let currNode = queue.shift();
    let [currRow, currCol] = currNode;
    res.push(currNode);

    let currNeighbors = findNeighbors(currNode, matrix);

    if (matrix[currRow][currCol] === endValue) return res;

    // queue.push(...currNeighbors);
    for (let neighbor of currNeighbors) {
      if (!visited.has(`${neighbor}`)) {
        visited.add(`${neighbor}`);
        queue.push(neighbor);
      }
    }
  }
  return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [ 
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// // internal node (left, right, down, up)
// // [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes 
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value 
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];