// import { ChatEngine } from 'react-chat-engine';

// import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
// import './App.css';
// import ChatList from "./components/ChatList"
// import MsgCont from "./components/messageApp/msgCont";
// import ChatList from ".components/messagApp/ChatList"
// import Home from "./";
import{Routes, Route} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatList/id" element={<Home />} />
    </Routes>
    </div>
  )
}
// const projectID = '1b7801d6-8a66-4be4-a442-89219d833dfc';

// const App = () => {
//   if (!localStorage.getItem('username')) return <LoginForm />;

//   return (
//     <ChatEngine
//       height="100vh"
//       projectID={projectID}
//       userName={localStorage.getItem('username')}
//       userSecret={localStorage.getItem('password')}
//       renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//       onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
//     />
//   );
// };

// // infinite scroll, logout, more customizations...

export default App;