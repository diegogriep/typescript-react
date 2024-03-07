import { Address } from '../types/addresses';
import { Instruction, Instructions } from "../types/instructions";

function instructions(obj: Instructions): Instruction {
  // first, identify if address key is present in accounts[]
  const { addresses, instructions: { admin_init: { accounts }} } = obj

  accounts.map(account => {
    if ('address' in account) {
      // verify if addresses[].address has a string value
      if (typeof addresses[account.address!] === 'string') {
        // if yes, replace the value
        account.address = addresses[account.address!]
      } else {
        account.address = addresses[addresses[account.address!].address]
      }
    }
  })

  return obj.instructions
}

instructions({
	addresses: {
		staking_program_id: "5XDdQrpNCD89LtrXDBk5qy4v1BW1zRCPyizTahpxDTcZ",
		locked_token_mint_id: "3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR",
		reward_token_mint_id: { address: "locked_token_mint_id" },
		system_program_id: "11111111111111111111111111111111",
	},
	instructions: {
		admin_init: {
			accounts: [
				{ id: "admin_id", signer: true },
				{ id: "program_id", address: "staking_program_id" },
				{ id: "locked_token_mint_id", address: "locked_token_mint_id" },
				{ id: "reward_token_mint_id", address: "reward_token_mint_id" },
				{ id: "system_program_id", address: "system_program_id" },
			],
		},
	}
})