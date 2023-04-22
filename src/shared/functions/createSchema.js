import validateSchema from "./validators";

/**
 * A port object
 * @typedef {Object} Port
 * @property {string} id - port id
 * @property {string} alignment - port position (left, right, top, bottom)
 */

/**
 * A node object
 * @typedef {Object} Node
 * @property {string} id - node id
 * @property {number[]} coordinates - coordinates in the canvas (2 numbers)
 * @property {Port[]} port - ports
 * @property {function} render - render component
 */

/**
 * A link object
 * @typedef {Object} Link
 * @property {string} input - port id of the input
 * @property {string} output - port id of the output
 * @property {string} label - link label
 */

/**
 * Takes a schema draft and ensure it is a valid schema
 * @param {Node[]} nodes
 * @param {Link[]} links
 */
const createSchema = (nodes, links) => {
  const next = { nodes, links };

  next.nodes ||= [];
  next.links ||= [];

  validateSchema(next);

  return next;
};

export default createSchema;
