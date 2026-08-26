export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { mobile, otp } = req.body;

  if (!mobile || !otp) {
    return res.status(400).json({ message: 'Missing mobile number or OTP' });
  }

  // Use the secure environment variable without REACT_APP_ prefix
  const FAST2SMS_API_KEY = process.env.FAST2SMS_API_KEY;

  const url = `https://www.fast2sms.com/dev/bulkV2?authorization=${FAST2SMS_API_KEY}&route=otp&variables_values=${otp}&numbers=${mobile}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Return Fast2SMS response to the frontend
    res.status(200).json(data);
  } catch (error) {
    console.error("Vercel API Error:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
