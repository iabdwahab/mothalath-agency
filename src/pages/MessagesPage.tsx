import { useState } from "react";
import Login from "../components/login/Index";
import Messages from "../components/messages_page/Messages";

function MessagesPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("isAuthenticated")),
  );

  if (isAuthenticated) {
    return <Messages />;
  }

  return <Login setIsAuthenticated={setIsAuthenticated} />;
}

export default MessagesPage;
