export default {
  sendEmail($axios, fromName, fromEmail, subject, message) {
    return $axios.post('api/v1/contact-us-email/', {
      from_name: fromName,
      from_email: fromEmail,
      subject,
      message,
    })
  },
}
