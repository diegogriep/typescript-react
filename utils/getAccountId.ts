import { AccountProps } from "../types/instructions";

export const getAccountId = (accounts: AccountProps[]): string => {
  const filterId = accounts.filter(account => {
    if (!('address' in account)) {
      return account
    }
  })

  return filterId[0].id
}