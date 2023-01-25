import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';

import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';

import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Bar from './scenes/bar';
import Form from './scenes/form';
import Line from './scenes/line';
import Pie from './scenes/pie';
import FAQ from './scenes/faq';
import Geography from './scenes/geography';
import Calendar from './scenes/calendar';
import Login from './scenes/login';
import Signup from './scenes/signup';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Dashboard />} />
                </Route>
                <Route element={<PublicRoute />}>
                  <Route path="/login" element={<Login />} />
                </Route>
                <Route element={<PublicRoute />}>
                  <Route path="/signup" element={<Signup />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/team" element={<Team />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/contacts" element={<Contacts />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/invoices" element={<Invoices />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/form" element={<Form />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/bar" element={<Bar />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/pie" element={<Pie />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/line" element={<Line />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/faq" element={<FAQ />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/geo" element={<Geography />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/calendar" element={<Calendar />} />
                </Route>
              </Routes>
            </main>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
