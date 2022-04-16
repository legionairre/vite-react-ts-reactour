import { Header } from 'components/Header';
import { Button } from 'components/Button';
import { useTour } from '@reactour/tour';

function App() {
  const { setIsOpen } = useTour();
  return (
    <div className="App">
      <Header title="Test selector" />
      <Button onClick={() => setIsOpen(true)}>Start Tour</Button>
    </div>
  );
}

export default App;
