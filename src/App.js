import Dashboard from "./components/Dashboard";
import Tabs from "./components/tabs";
import "./style.scss"

const items = [
  {
    id: "icon  Flight",
    label: "Flight",
    content: "The quick brown fox"
  },
  {
    id: "icon Hotel",
    label: "Hotel",
    content: "Jumps over the lazy dog"
  }
];

export default function App() {
  return (
    <>
      <Dashboard/>
    </>
  );
}
