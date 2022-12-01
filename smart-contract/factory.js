import web3 from "./web3";
import CampaignFactory from "./build/contracts/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xa34F7edd6b03B721801dF5d72038B31B540F3c07"
);

export default instance;
