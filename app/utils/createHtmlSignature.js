const createHtmlSignature = (body) => {
  return `
    <div>
      <p>${body.message}</p>
        <br/>
        <span>${body.name}<span/>
        <span>${body.email}<span/>
    </div>`;
};

export default createHtmlSignature;
