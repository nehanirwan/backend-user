
const mailchimp = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "37935d93677d07cfbab0da8682bd73ee-us20",
  server: "us20",
});

exports.run = async () => {
  const response = await client.lists.createList({
    name: "name",
    permission_reminder: "permission_reminder",
    email_type_option: true,
    contact: {
      company: "company",
      address1: "address1",
      city: "city",
      country: "country",
    },
    campaign_defaults: {
      from_name: "from_name",
      from_email: "Beulah_Ryan@hotmail.com",
      subject: "subject",
      language: "language",
    },
  });
  console.log(response);
};

