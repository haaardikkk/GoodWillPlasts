import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { injectGTM } from './lib/advanced-seo'

injectGTM();

createRoot(document.getElementById("root")!).render(<App />);
