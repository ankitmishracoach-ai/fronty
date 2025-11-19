import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import InboxPage from './pages/InboxPage';
import AIPage from './pages/AIPage';
import PricingPage from './pages/PricingPage';
import TicketsPage from './pages/TicketsPage';
import AutomationPage from './pages/AutomationPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ChannelsPage from './pages/ChannelsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-white">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features/inbox" element={<InboxPage />} />
            <Route path="/features/ai" element={<AIPage />} />
            <Route path="/features/tickets" element={<TicketsPage />} />
            <Route path="/features/automation" element={<AutomationPage />} />
            <Route path="/features/analytics" element={<AnalyticsPage />} />
            <Route path="/features/channels" element={<ChannelsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
