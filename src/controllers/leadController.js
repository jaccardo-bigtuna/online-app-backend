import { createConnection } from '../config/salesforce.js';

export const queryLead = async (req, res, next) => {
  try {
    const { query } = req.query;
    const conn = createConnection();
    conn.accessToken = req.headers.authorization.split(' ')[1];

    const result = await conn.query(query);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const updateLead = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const conn = createConnection();
    conn.accessToken = req.headers.authorization.split(' ')[1];

    const result = await conn.sobject('Lead').update({
      Id: id,
      ...updates
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const uploadFile = async (req, res, next) => {
  try {
    const { id } = req.params;
    const file = req.file;

    if (!file) {
      throw new Error('No file uploaded');
    }

    const conn = createConnection();
    conn.accessToken = req.headers.authorization.split(' ')[1];

    const result = await conn.sobject('ContentVersion').create({
      Title: file.originalname,
      PathOnClient: file.originalname,
      VersionData: file.buffer.toString('base64'),
      FirstPublishLocationId: id
    });

    res.json(result);
  } catch (error) {
    next(error);
  }
};