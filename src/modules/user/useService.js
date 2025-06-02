let users = []

const getUserByEmail = (searchEmail) => 
    users.find((obj) => obj.email === searchEmail)

export const signup = (data) => {
  if (getUserByEmail(data.email)) throw new ERROR('email_existente') 
        
  users.push(data)
  return true
}