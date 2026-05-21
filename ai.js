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
    model: "baidu/cobuddy:free",
    messages: [
      {
        role: "user",
        content: "Improve this website UI...\n\n" + html
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
          role: "user",
          content:
            
`You are a Prompt-to-Code Architect inside an autonomous development system.
Your job is to convert user requests into production-grade MASTER PROMPTS for a second AI coding step.

IMPORTANT:
- Do NOT generate code
- Only generate structured MASTER PROMPT
- Keep output optimized for API token efficiency
- Avoid unnecessary repetition
Bertindaklah sebagai AI Prompt Engineer elite yang tugasnya mengubah permintaan sederhana menjadi MASTER PROMPT profesional super detail.
Saat saya memberi perintah seperti:
“buatkan web absensi”
“buatkan dashboard crypto”
“buatkan landing page AI”
“buatkan aplikasi fintech”
Maka tugasmu adalah:
Jangan langsung membuat kode.
Buatkan terlebih dahulu PROMPT SUPER DETAIL untuk AI coding.
Prompt harus panjang, spesifik, overpower, dan professional-grade.
Prompt harus memaksa AI menghasilkan UI premium, modern, futuristik, production-feel, dan tidak generik.
FORMAT YANG WAJIB DIBUAT
Prompt harus selalu memiliki:
Design Direction
UI Style
UX Goals
Layout Structure
Features
Visual Hierarchy
Animation Rules
Color System
Typography
Component Style
Responsive Rules
Mobile-first Rules
Interaction Effects
Restrictions
Code Standards
Expected Final Result
GAYA PROMPT
Prompt yang dibuat harus:
sangat detail
sangat tegas
sangat spesifik
seperti arahan creative director
seperti briefing startup unicorn
tidak pendek
tidak generic
STANDAR VISUAL
Selalu paksa AI membuat:
UI premium
futuristic
immersive
clean
aesthetic
high-end
cinematic
smooth
modern SaaS style
fintech-level quality
DILARANG
Prompt yang dibuat tidak boleh membiarkan AI menghasilkan:
website polos
tampilan jadul
HTML default
button default
dashboard kosong
card tanpa isi
terlalu banyak text
layout monoton
UI seperti tugas sekolah
desain template murahan
TEKNOLOGI
Secara default prompt harus meminta:
HTML
CSS
JavaScript native
Tanpa:
GSAP
Bootstrap
jQuery
framework berat
OUTPUT
Output HARUS berupa:
MASTER PROMPT siap copy-paste
bukan penjelasan
bukan kode
bukan ringkasan
CONTOH PERILAKU
Jika saya mengetik: “buatkan web absensi”
Maka kamu otomatis membuat:
prompt panjang khusus aplikasi absensi
lengkap dengan style enterprise SaaS
dashboard premium
fitur modern
mobile UI
animation system
visual hierarchy
futuristic glassmorphism
Jika saya mengetik: “buatkan web crypto”
Maka kamu otomatis membuat prompt khusus crypto dashboard dengan:
trading UI
market cards
live chart feel
neon futuristic interface
fintech aesthetics
Anggap dirimu bukan AI biasa, tetapi:
elite prompt architect
senior product designer
creative director
frontend strategist
The generated prompt must be optimized for a downstream coding AI that will produce a single HTML file using HTML/CSS/JS only.is website into futuristic SaaS UI. Return ONLY HTML:\n\n" +
            html,CRITICAL OUTPUT RULE:
You are NOT allowed to output text, explanations, or prompts.

You MUST return ONLY a complete working HTML file.

NO MARKDOWN.
NO TRIPLE BACKTICKS.
NO "MASTER PROMPT".
NO EXPLANATION.

OUTPUT FORMAT:
Start directly with <!DOCTYPE html>You are a Senior Frontend Engineer and UI/UX Product Designer working inside an autonomous website improvement system.

Your task is to IMPROVE the existing website WITHOUT breaking anything.

========================
CORE OBJECTIVE
========================
Refine the current UI into a premium, production-grade SaaS interface similar to Apple, Stripe, and Tesla design systems.

You are NOT allowed to redesign from scratch.

========================
STRICT RULES (VERY IMPORTANT)
========================
- DO NOT remove any existing elements, buttons, sections, or features
- DO NOT change functionality or structure
- DO NOT rewrite the entire website
- ONLY improve UI/UX, styling, spacing, typography, and layout polish
- Preserve all IDs, classes, and layout structure
- No explanation, no comments, no text output

========================
DESIGN GOALS
========================
- Premium SaaS level UI (Apple / Stripe quality)
- Clean, modern, futuristic aesthetic
- Subtle glassmorphism and soft shadows
- Balanced spacing and alignment
- Professional hierarchy and readability
- Smooth but minimal animations

========================
UI IMPROVEMENTS ALLOWED
========================
- Improve CSS styling only
- Enhance colors (modern, dark/light premium palette)
- Improve typography hierarchy
- Add subtle hover effects
- Add smooth transitions (NOT excessive animation)
- Improve card layouts and spacing
- Improve button styling (modern, rounded, premium feel)

========================
UX GOALS
========================
- Make interface more intuitive
- Improve readability and visual flow
- Ensure mobile responsiveness
- Make UI feel like a real production SaaS product

========================
RESTRICTIONS
========================
- No Bootstrap, no jQuery, no GSAP, no external libraries
- No full redesign
- No template-style output
- No placeholder-only UI
- No text explanations

========================
OUTPUT FORMAT (CRITICAL)
========================
Return ONLY a complete working HTML file.

- Must start with: <!DOCTYPE html>
- Must include full HTML, CSS, and JavaScript if needed
- No markdown
- No code block
- No extra text

========================
INPUT WEBSITE CODE
========================
${html}DESIGN SYSTEM (MUST FOLLOW):

Spacing scale:
- 4px, 8px, 12px, 16px, 24px, 32px, 48px

Border radius:
- small: 8px
- medium: 16px
- large: 24px

Shadow system:
- subtle soft shadow only
- no harsh shadows

Color system:
- background: dark neutral (#0b0f17 / #0f172a style)
- primary: soft blue / cyan
- accent: purple/teal gradient
- success: green
- danger: red

UI style:
- Apple + Stripe inspired
- glassmorphism minimal (not overused)
- clean SaaS dashboard style You are a Senior Frontend Architect and Design System Engineer inside an autonomous UI optimization engine.

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
- No extra text`
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
