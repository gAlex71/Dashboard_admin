import React from "react";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./pages/global/Navbar";
import SidebarMenu from "./pages/global/SidebarMenu";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Calendar from "./pages/calendar/Calendar";
import Invoices from "./pages/invoices/Invoices";
import Contacts from "./pages/contacts/Contacts";
import Bar from "./pages/bar/Bar";
import Form from "./pages/form/Form";
import Line from "./pages/line/Line";
import Pie from "./pages/pie/Pie";
import Faq from "./pages/faq/Faq";
import Geography from "./pages/geography/Geography";

const App = () => {
  const [ theme, colorMode ] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <SidebarMenu />
          <main className="content">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/contacts" element={<Contacts/>} />
              {/* <Route path="/bar" element={<Bar/>} /> */}
              <Route path="/form" element={<Form/>} />
              {/* <Route path="/line" element={<Line/>} />
              <Route path="/pie" element={<Pie/>} />
              <Route path="/faq" element={<Faq/>} />
              <Route path="/geography" element={<Geography/>} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
