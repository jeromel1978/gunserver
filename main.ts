import gun from "gun";
const Gun = gun();

const PlayerNode = "KXM823:Player";
const PlayersNode = Gun.get(PlayerNode);
PlayersNode.map().on((Value: any, Key: string) => {
  console.log(`Gun:${PlayerNode}:On`, "Key", Key, "Value", Value);
});
