import { Addresses, IDProps } from "./addresses"

export type AccountProps = {
  id: string,
  signer?: true,
  address?: string | keyof IDProps
}

type InstructionProps = {
  accounts: AccountProps[]
}

export type Instruction = {
  admin_init: InstructionProps
}

export type Instructions = {
  addresses: Addresses,
  instructions: Instruction
}
