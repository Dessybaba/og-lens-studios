"""
Generates on-brand SVG placeholder images so the project runs immediately
with zero external image dependencies. Replace these with real photography
before launch — see SETUP.md, section "Replace placeholder portfolio images".
"""
import os

OUT = os.path.join(os.path.dirname(__file__), "..", "public", "images")

TEMPLATE = """<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1a1a18"/>
      <stop offset="1" stop-color="#0d0d0c"/>
    </linearGradient>
  </defs>
  <rect width="{w}" height="{h}" fill="url(#g)"/>
  <rect x="24" y="24" width="{iw}" height="{ih}" fill="none" stroke="#B08D46" stroke-width="1" opacity="0.55"/>
  <text x="50%" y="47%" text-anchor="middle" fill="#F3F1EB" font-family="Georgia, 'Times New Roman', serif" font-size="{fs}" letter-spacing="4">{label}</text>
  <text x="50%" y="54%" text-anchor="middle" fill="#B08D46" font-family="Helvetica, Arial, sans-serif" font-size="{fs2}" letter-spacing="6">{sub}</text>
</svg>"""

def write(path, w, h, label, sub):
    fs = max(18, w // 22)
    fs2 = max(10, w // 55)
    svg = TEMPLATE.format(w=w, h=h, iw=w - 48, ih=h - 48, label=label, sub=sub, fs=fs, fs2=fs2)
    full = os.path.join(OUT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w") as f:
        f.write(svg)

categories = ["wedding", "portrait", "lifestyle", "family", "editorial"]
for cat in categories:
    for i in range(1, 5):
        portrait = i % 2 == 0
        w, h = (1200, 1500) if portrait else (1600, 1067)
        write(f"portfolio/{cat}-{i:02d}.svg", w, h, cat.upper(), f"OG LENS STUDIOS — {i:02d}")

write("hero/hero-01.svg", 1920, 1080, "OG LENS STUDIOS", "BEAUTY UNVEILED THROUGH THE LENS")
write("about/about-portrait.svg", 1200, 1500, "THE STUDIO", "LAGOS, NIGERIA")
write("about/about-detail.svg", 1600, 1067, "BEHIND THE LENS", "OG LENS STUDIOS")
write("og-image.svg", 1200, 630, "OG LENS STUDIOS", "BEAUTY UNVEILED THROUGH THE LENS")

print("Placeholder images generated.")
