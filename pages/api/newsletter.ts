const fs = require('fs')
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // get the POST variable called 'email'
    const email = req.body.email   
  
    // saves the email as a a new line in the file 'subscribers.txt' in the 'data' folder, with the date of subscription
    const date = new Date().toISOString();
    fs.appendFileSync('data/subscribers.txt', `${email}:${date}\n`)

    // redirect to the thank you page
    res.redirect(303, '/thank-you')
    
  } else {
    // Handle any other HTTP method
  }
}