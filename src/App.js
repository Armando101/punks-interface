import { useEffect } from "react";
import { Route } from "react-router-dom";
import Web3 from "web3";
import Home from "./views/home";

function App() {
  useEffect(() => {
    if (window.ethereum) {
      // window.ethereum
      //   .request({ method: "eth_requestAccounts" })
      //   .then(console.log);
      const web3 = new Web3(window.ethereum);
      web3.eth.requestAccounts().then(console.log);
    }
  }, []);

  return (
    <>
      <Route path="/" element={<Home />} />
    </>
  );
}

export default App;
