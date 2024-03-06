export type IDProps = {
  staking_program_id: string
  system_program_id: string
  locked_token_mint_id: string
}

export type Address = {
  address: keyof IDProps
}

export type Addresses = Record<string, string | Address>
