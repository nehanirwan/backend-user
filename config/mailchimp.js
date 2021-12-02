const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "0fb820f32b7f6f6f061eca72dc5e7173-us20",
  server: "us20",
});
exports.getlist = async () => {
    const response = await mailchimp.lists.getAllLists();
    console.log(response);
  };
  
  

exports.postlist = async () => {
    const response = await mailchimp.lists.createList({
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
        from_email: "neha.nirwan11@gmail.com",
        subject: "subject",
        language: "language",
      },
    });
    console.log(response);
  };
  
 