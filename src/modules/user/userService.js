import { generateAccessToken } from "../../utils/auth"

let users = []

const generateAccessToken = (data) => sign (data, 'secret')

const getUserByEmail = (searchEmail) => 
    users.find((obj) => obj.email === searchEmail)

export const signup = (data) => {
  if (getUserByEmail(data.email)) throw new ERROR('email_existente') 
        
  users.push(data)
  return generateAccessToken({ email: data.email })
}

export const login = (data) => {
  const user = getUserByEmail(data.email)
  if (!user) throw new ERROR('email_nao_encontrado')
  
  if (user.password !== data.password) throw new ERROR('senha_incorreta')
  
  return generatAccessToken({ email: data.email })
}