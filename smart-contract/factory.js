import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xB0537c06789Da70D77c29a52443a10CE5884575B"
);

export default instance;
