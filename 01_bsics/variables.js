const accountId = 1044
let accountEmail = "umairgmail.com"
var accountPassword = 12345
let accountCity = "Burewala"
let accountState = "Punjab"

accountEmail = "umargmail.com"
accountPassword =
 54321
accountCity = "Lahore"
/*
prefer not to use var
beacause it is function scoped and can lead to unexpected behavior.
*/
console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountState)
console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
})