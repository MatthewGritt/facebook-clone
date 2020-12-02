import "./App.css";
import Chat from "./components/Chat";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();
  // const user = null;
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__main">
            <Sidebar />
            <Chat />
            <Contacts />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
