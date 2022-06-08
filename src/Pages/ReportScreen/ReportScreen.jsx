import React from "react";
import { useState } from "react";
import { Categories } from "../../Data/Categories";
import ReportManager from "../../Utility/ReportManager";
import { logUserWallets } from "../../Data/Wallets";
import ListComp from "../../Components/List/ListComp";
import ReportFilter from "../../Components/Filter/ReportFilter";
import "./ReportScreen.css";

const ReportScreen = () => {
  const [processType, setProcessType] = useState("");
  const [firstDate, setFirstDate] = useState("");
  const [secondDate, setSecondDate] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [message, setMessage] = useState("");
  const [showList, setShowList] = useState([]);

  const reportHandler = () => {
    const repList = ReportManager(
      processType,
      selectedWallet,
      firstDate,
      secondDate,
      selectedCategory
    );
    setMessage(repList.pop());
    setShowList(repList);
  };

  const processList = [
    { id: "in", title: "Giriş" },
    { id: "out", title: "Çıkış" },
  ];

  return (
    <div>
      <ReportFilter
        setProcessType={setProcessType}
        processList={processList}
        setSelectedWallet={setSelectedWallet}
        walletList={logUserWallets}
        setFirstDate={setFirstDate}
        setSecondDate={setSecondDate}
        setSelectedCategory={setSelectedCategory}
        categoryList={Categories}
        reportHandler={reportHandler}
      ></ReportFilter>
      <div className="msg">
        <h2>{message}</h2>
      </div>
      <ListComp items={showList}></ListComp>
    </div>
  );
};

export default ReportScreen;
