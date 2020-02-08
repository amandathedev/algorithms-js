const uniqueEmails = emails => {
  let reformatted = new Set();

  for (let i = 0; i < emails.length; i++) {
    let [localName, domain] = emails[i].split("@");
    let splitName = localName.split("");
    domain = "@".concat(domain);
    let newName = "";

    for (let j = 0; j < splitName.length; j++) {
      if (splitName[j] !== ".") {
        if (splitName[j] === "+") {
          break;
        } else {
          newName += splitName[j];
        }
      }
    }
    newName = newName.concat(domain);
    reformatted.add(newName);
  }
  return reformatted.size;
};

uniqueEmails([
  "amanda.t@gmail.com",
  "amandat@gmail.com",
  "hello+bye@yahoo.com",
  "hello@yahoo.com",
  "hello@gmail.com",
  "he.llo@gmail.com"
]);

// wow
var numUniqueEmails = function(emails) {
  return new Set(
    emails.map(email => {
      const [local, domain] = email.split("@");
      return (
        local
          .split("+")
          .shift()
          .split(".")
          .join("") +
        "@" +
        domain
      );
    })
  ).size;
};
