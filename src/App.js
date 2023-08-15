import Web from './Router/Web';
import ThemeProvider from './Providers/ThemeProvider';

const App = () => {
  return (
    <div
      style={{ minWidth: "100vh" }}
      className="app-resume-builder"
    >
      <ThemeProvider>
        <Web />
      </ThemeProvider>
    </div>
  );
};

export default App;
