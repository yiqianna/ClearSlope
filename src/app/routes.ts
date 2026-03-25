import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NavigationPage from './pages/NavigationPage';
import EventsPage from './pages/EventsPage';
import TransportPage from './pages/TransportPage';
import HelpPage from './pages/HelpPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'navigation', Component: NavigationPage },
      { path: 'events', Component: EventsPage },
      { path: 'transport', Component: TransportPage },
      { path: 'help', Component: HelpPage },
    ],
  },
]);
