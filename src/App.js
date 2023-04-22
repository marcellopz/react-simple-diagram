import DiagramBox from "./Diagram/DiagramBox";
import createSchema from "./shared/functions/createSchema";

const nodes = [
  {
    id: "node-1",
    content: {
      title: "John the user",
      icon: "https://img.icons8.com/ios-glyphs/256/futurama-nibbler.png",
    },
    coordinates: [100, 200],
  },
  {
    id: "node-2",
    content: {
      title: "DevelopmentGroup",
      icon: "https://img.icons8.com/ios-glyphs/256/futurama-hermes-conrad.png",
    },
    coordinates: [400, 200],
  },
  {
    id: "node-3",
    content: {
      title: "DevelopmentGroup2",
      icon: (
        <img
          src="https://img.icons8.com/ios-glyphs/256/futurama-fry.png"
          alt="icon"
        />
      ),
    },
    coordinates: [700, 80],
  },
  {
    id: "node-4",
    content: {
      title: "DevelopmentGroup3",
      icon: "https://img.icons8.com/ios-glyphs/256/futurama-professor-farnsworth.png",
    },
    coordinates: [800, 300],
  },
];

const links = [
  { input: "node-1", output: "node-2" },
  { input: "node-2", output: "node-3" },
  { input: "node-2", output: "node-4", label: "labelzada" },
];

const schema = createSchema(nodes, links);

function App() {
  return <DiagramBox schema={schema} />;
}

export default App;
