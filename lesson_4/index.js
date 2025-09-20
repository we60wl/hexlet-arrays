const userNames = ['petya', 'vasya', 'evgeny']

for (let i = 0; i < userNames.length; i += 1) {
  console.log(userNames[i]);
}

// Обратный порядок

for (let i = 0; i < userNames.length; i += 1) {
  const index = (userNames.length - 1) - i
  console.log(userNames[index]);
}

for (let i = userNames.length - 1; i >= 0; i -= 1) {
  console.log(userNames[i]);
}

// Изменение

const emails = ['VASYA@gmAil.com', 'iGoR@yandex.RU', 'netiD@hot.CoM']

console.log(emails);

for (let i = 0; i < emails.length; i += 1) {
  const email = emails[i]

  const normalizedEmail = email.toLowerCase()
  emails[i] = normalizedEmail
}

console.log(emails);