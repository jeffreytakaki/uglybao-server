import { squareClient } from '../square';

// This Appwrite function will be executed every time your function is triggered
export default async ({ req, res, log, error }) => {

  try {
    const result = await squareClient.catalog.list();

    return res.json({
      success: true,
      data: result.data
    })
  } catch (err) {
    if (err instanceof Error) {
      return res.json({
        success: false,
        error: err.message
      })
    } else {
      return res.json({
        success: false,
        error: 'An unknown error occurred'
      });
    }
  }

};
