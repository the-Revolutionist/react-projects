import "./App.css";

import { useEffect, useState } from "react";

import { Header } from "./components/Header/Header";
import { Main } from "./components/main/Main";
import { PunkList } from "./components/punk-gallery/PunkList";
import axios from "axios";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x47D390d5810669B73A8DAE0525cCFF404B2CC8Bf"
      );
      setPunkListData(openseaData.data.assets);
    };
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
