const axios = require("axios");
const fs = require("fs");

async function run() {
  let html = "";

  try {
    html = fs.readFileSync("index.html", "utf8");
  } catch {
    html = "<html><body><h1>Starter</h1></body></html>";
  }

  const masterPrompt = `You are a Senior Frontend Architect and Design System Engineer inside an autonomous UI optimization engine.

Your mission is NOT to redesign, but to systematically upgrade the existing interface into a consistent, production-grade design system like Stripe, Apple, and modern SaaS platforms.

================================================
CORE OBJECTIVE
================================================
Transform the existing UI into a cohesive design system-driven interface with consistent spacing, typography, colors, components, and interaction patterns.

You must preserve ALL functionality and structure.

================================================
ABSOLUTE RULES (NON-NEGOTIABLE)
================================================
- DO NOT remove any existing elements, buttons, or features
- DO NOT break JavaScript functionality
- DO NOT rewrite layout from scratch
- DO NOT introduce new pages or restructure app flow
- ONLY enhance design, styling, and visual system consistency
- Preserve all IDs, classes, and DOM structure

================================================
DESIGN SYSTEM ENGINE (MANDATORY)
================================================
You MUST enforce a consistent design system:

Spacing System:
- 4px base grid system
- Use only: 4, 8, 12, 16, 24, 32, 48 spacing units

Typography System:
- Font: modern sans-serif (system UI style)
- Clear hierarchy:
  - H1: bold, large, minimal
  - H2: section headers
  - Body: readable, medium weight
- Consistent line-height for readability

Color System:
- Background: deep dark neutral (#0b0f17 / #0f172a style)
- Surface: slightly elevated dark cards
- Primary: cyan / blue gradient
- Accent: purple / teal gradient
- Success: green
- Danger: red
- Text: white + muted gray hierarchy

Border Radius System:
- Small: 8px
- Medium: 12px
- Large: 20px

Shadow System:
- Only soft, layered shadows
- No hard or aggressive shadows
- Subtle elevation only

================================================
UI STYLE DIRECTION
================================================
- Premium SaaS dashboard style
- Apple-level minimalism + Stripe-level clarity
- Futuristic but clean (NOT flashy cyberpunk overload)
- Glassmorphism only when subtle and necessary
- Strong visual hierarchy
- Clean spacing and alignment

================================================
COMPONENT STANDARDS
================================================
Upgrade existing components ONLY:

Buttons:
- Rounded, soft padding
- Subtle hover transition
- Slight glow on active state

Cards:
- Consistent padding
- Soft border
- Clear separation

Inputs:
- Clean minimal borders
- Focus state highlight only

Navigation:
- Clear active states
- No clutter
- Proper spacing alignment

================================================
INTERACTION RULES
================================================
- Hover effects must be subtle (scale 1.02 max)
- Transitions must be smooth (0.2–0.3s)
- No heavy animations
- No GSAP or external animation libraries

================================================
RESPONSIVE RULES
================================================
- Mobile-first layout
- Must adapt cleanly to small screens
- Buttons must be touch-friendly
- No overflow or broken layout allowed

================================================
UX GOALS
================================================
- Improve clarity and readability
- Make UI feel like real production SaaS product
- Ensure intuitive visual hierarchy
- Reduce visual noise
- Improve spacing consistency

================================================
CRITICAL OUTPUT RULE
================================================
Return ONLY a complete working HTML file.

- Must start with: <!DOCTYPE html>
- No explanations
- No markdown
- No backticks
- No extra text

================================================
INPUT WEBSITE TO IMPROVE
================================================
${html}`;

  const res = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "baidu/cobuddy:free",
      messages: [
        {
          role: "user",
          content: masterPrompt
        }
      ]
    },
    {
      headers: {
        Authorization: "Bearer " + process.env.OPENROUTER_API_KEY,
        "Content-Type": "application/json"
      },
      timeout: 60000
    }
  );

  const out = res.data.choices[0].message.content;

  fs.writeFileSync("index.html", out);
  console.log("DONE");
}

run();
