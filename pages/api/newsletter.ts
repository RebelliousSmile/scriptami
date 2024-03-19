// const fs = require('fs')
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

    // const date = new Date().toISOString();
    // saves the email in brevo database
    const SibApiV3Sdk = require('sib-api-v3-sdk');
    let defaultClient = SibApiV3Sdk.ApiClient.instance;

    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    let apiInstance = new SibApiV3Sdk.ContactsApi();

    let createContact = new SibApiV3Sdk.CreateContact();

    createContact.email = req.body.email;
    createContact.listIds = [7]

    apiInstance.createContact(createContact).then(function(data: any) {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }, function(error: any) {
      console.error(error);
    });

    // redirect to the thank you page
    res.redirect(303, '/thank-you')
    
  } else {
    // Handle any other HTTP method
  }
}