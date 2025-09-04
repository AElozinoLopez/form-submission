const form = document.querySelector("form");

function sendEmail() {
  Email.send({
    SecureToken: "3a05f5bd-2d4c-4c83-9f94-452fedd0b171",

    To: "info@107globalventures.com",
    From: document.getElementById("email").value,
    Subject: "New contact form message",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone no: " +
      document.getElementById("phone").value +
      "<br> message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent successfully!"));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
