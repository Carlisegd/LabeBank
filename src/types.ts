//represents the account to the user.
export type Account ={
  name: string,
  CPF: string, 
  dateOfBirth: Date | string,
  balance: number,
  statement: Transaction[]
}


//user transactions.
export type Transaction ={
  description: string,
  value: number,  
  date: Date | string
}