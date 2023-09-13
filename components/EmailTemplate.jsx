const EmailTemplate = ({ body }) => {
  return (
    <div>
      <h1>Portfolio Contact Form Submission from {body.email}</h1>
      <p>{body.message}</p>
    </div>
  );
};

export default EmailTemplate;
