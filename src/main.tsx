import ReactDOM from 'react-dom';
import { StepType, TourProvider } from '@reactour/tour';

import './index.css';
import 'tailwindcss/tailwind.css';

import App from './App';

const container = document.getElementById('root');

const steps: StepType[] = [
  {
    selector: '#test-selector',
    content: 'Test Content',
  },
];

ReactDOM.render(
  <TourProvider steps={steps}>
    <App />
  </TourProvider>,
  container
);
