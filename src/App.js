import logo from "./logo.svg";
import "./App.css";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider } from "./contexts/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
