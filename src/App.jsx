
import { Portfolio } from './pages/home';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="App">
        <Portfolio />
      </div>
    </AnimatePresence>
  );
}

export default App;