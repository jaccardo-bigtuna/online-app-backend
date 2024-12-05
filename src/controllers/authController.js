import { createConnection, sfConfig } from '../config/salesforce.js';

export const getAccessToken = async (req, res, next) => {
  try {
    const conn = createConnection();
    
    const userInfo = await conn.login(sfConfig.username, sfConfig.password);
    
    res.json({
      accessToken: conn.accessToken,
      instanceUrl: conn.instanceUrl
    });
  } catch (error) {
    next(error);
  }
};