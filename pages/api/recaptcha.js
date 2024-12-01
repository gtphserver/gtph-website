import axios from "axios";

export default async function handler(req, res) {
  const { token } = req.body;

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );

    if (response.data.success) {
      res.status(200).json({ message: "Verification successful" });
    } else {
      res.status(400).json({ message: "Verification failed", errors: response.data["error-codes"] });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
