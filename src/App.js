import Theme from './styles/theme';

import { Header, HandB, Projects, Technologies, Timeline, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Theme>
      <div style={{maxWidth: '1280px', width: '100%', margin: 'auto'}}>
        <Header />
        <HandB />
        <Projects />
        <Technologies />
        <Timeline />
        <Footer/>
      </div>
      </Theme>
    </div>
  );
}

export default App;


 