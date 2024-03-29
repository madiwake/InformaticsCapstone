import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import ONLINERESOURCES from './data/onlineResources.json';
import SEATTLERESOURCES from './data/seattleResources.json';
import UWRESOURCES from './data/uwResources.json';
import FAQQUESTIONS from './data/faqQuestions.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import './css/navigation.css';
import './css/footer.css';
import './css/resourcePageStyling.css';
import './css/faqPageStyling.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App 
      onlineResources={ONLINERESOURCES} 
      seattleResources={SEATTLERESOURCES} 
      uwResources={UWRESOURCES} 
      faqQuestions={FAQQUESTIONS}
    />
  </BrowserRouter>
);

