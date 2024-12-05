import jsforce from 'jsforce';

export const sfConfig = {
  loginUrl: process.env.SALESFORCE_LOGIN_URL,
  clientId: process.env.SALESFORCE_CLIENT_ID,
  clientSecret: process.env.SALESFORCE_CLIENT_SECRET,
  username: process.env.SALESFORCE_USERNAME,
  password: process.env.SALESFORCE_PASSWORD
};

export const createConnection = () => {
  return new jsforce.Connection({
    loginUrl: sfConfig.loginUrl
  });
};