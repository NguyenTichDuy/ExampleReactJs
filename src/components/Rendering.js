import GuessLogging from "./Logging/Guess.js";
import UserLogging from "./Logging/User";

export default function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserLogging />;
  }
  return <GuessLogging />;
}
