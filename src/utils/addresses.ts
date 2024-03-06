import { Addresses } from "../types/addresses";

function addresses(obj: Addresses) {}

addresses({
  staking_program_id: "5XDdQrpNCD89LtrXDBk5qy4v1BW1zRCPyizTahpxDTcZ",
  system_program_id: "11111111111111111111111111111111",
  locked_token_mint_id: "3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR",
  reward_token_mint_id: { address: "locked_token_mint_id" }
})