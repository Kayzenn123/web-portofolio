const axios = require("axios");
const fs = require("fs");

async function run() {
  let html = "";

  try {
    html = fs.readFileSync("index.html", "utf8");
  } catch {
    html = "<html><body><h1>Starter</h1></body></html>";
  }

  const res = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "user",
          content:
            "Improve this website into futuristic SaaS UI. Return ONLY HTML:\n\n" +
            html,
        },
      ],
    },
    {
      headers: {
        Authorization: "Bearer " + process.env.OPENROUTER_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  const out = res.data.choices[0].message.content;

  fs.writeFileSync("index.html", out);
  console.log("DONE");
}

run();
