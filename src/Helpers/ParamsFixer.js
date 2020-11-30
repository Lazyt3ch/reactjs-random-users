const paramsFixer = (params) => {
  const validParamsAsOneString = `
    gender
    name
    location
    email
    login
    registered
    dob
    phone
    cell
    id
    picture
    nat
  `;

  const validParams = validParamsAsOneString.trim().split(/[\s+]/);
  const paramsToUse = params.filter( param => validParams.includes(param) );
  return paramsToUse;
};

export default paramsFixer;