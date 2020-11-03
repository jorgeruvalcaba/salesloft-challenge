function getFrecuencyChars(people) {
  if (!people) return;

  let frequency = {};

  for (const [, person] of Object.entries(people)) {
    const splittedEmail = person.email_address.split("");

    splittedEmail.forEach((char) => {
      if (!frequency[char]) {
        frequency[char] = 1;
      } else {
        frequency[char] += 1;
      }
    });
  }

  return Object.entries(frequency)
    .sort(([, v1], [, v2]) => v2 - v1)
    .map(([key, value]) => ({ key: key, value: value }));
}

function getDuplicatedEmails(people) {
  if (!people) return;
  let largeEmail, smallEmail;

  for (let i = 0; i < Object.keys(people).length - 1; i++) {
    for (let j = 0; j < Object.keys(people).length - 1; j++) {
      const email1 = people[i].email_address;
      const email2 = people[j].email_address;

      if (email1 > email2) {
        largeEmail = email1;
        smallEmail = email2;
      } else {
        largeEmail = email2;
        smallEmail = email1;
      }

      if (largeEmail.includes(smallEmail)) {
        people[i].isDuplicated = true;
        people[j].isDuplicated = true;
      }
    }
  }
  return people;
}

export { getFrecuencyChars, getDuplicatedEmails };
