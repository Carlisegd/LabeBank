import { Account } from "./types";

//Save the accounts
export const accounts: Account[] = [
  { name: "Carlise Debona",
    CPF: "123.456.789-12",
    dateOfBirth: "14/11/1989",
    balance: 10000,
    statement: [
    {
      description: "Claro-NET",
      value: 540,  
      date: "10/04/2022"
    }
  ]
  },

  { name: " Gustavo Debona",
    CPF: "012.345.678-32",
    dateOfBirth: "13/11/1989",
    balance: 5000,
    statement: [
    {
      description: "Cartão de Crédito",
      value: 340,  
      date: "10/04/2022"
    }
  ]
  }
]