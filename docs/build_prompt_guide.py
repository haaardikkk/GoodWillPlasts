"""Builds an HTML page (with copy buttons) and a PDF from a prompt-guide Markdown file.

    python -I docs/build_prompt_guide.py                              # ai-image-prompts.md
    python -I docs/build_prompt_guide.py flow-drum-video-prompts.md
"""
import html
import re
import subprocess
import sys
from pathlib import Path

import markdown

DOCS = Path(__file__).resolve().parent
SRC = DOCS / (sys.argv[1] if len(sys.argv) > 1 else "ai-image-prompts.md")
OUT_HTML = SRC.with_suffix(".html")
OUT_PDF = SRC.with_suffix(".pdf")
BROWSERS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
]

TEXT = SRC.read_text(encoding="utf-8")
TITLE = re.search(r"^# (.+)$", TEXT, re.M).group(1)
body = markdown.markdown(TEXT, extensions=["fenced_code", "tables"])

# Wrap every code block in a card with a copy button. Short single-line blocks (file names,
# shell paths) get a compact style.
counter = 0


def wrap(m: re.Match) -> str:
    global counter
    counter += 1
    code = m.group(1)
    text = html.unescape(code)
    label = "Prompt" if len(text) > 160 else "Text"
    return (
        f'<div class="prompt"><div class="prompt-bar"><span>{label}</span>'
        f'<button type="button" class="copy" data-target="p{counter}">Copy</button></div>'
        f'<pre id="p{counter}"><code>{code}</code></pre></div>'
    )


body = re.sub(r"<pre><code(?: class=\"[^\"]*\")?>(.*?)</code></pre>", wrap, body, flags=re.S)
body = body.replace("<table>", '<div class="table-wrap"><table>').replace("</table>", "</table></div>")

page = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>GoodWill Plast – {html.escape(TITLE)}</title>
<style>
  :root {{
    --bg: #0b1220; --card: #121b2e; --border: #23304a; --text: #e8eef7; --muted: #93a1b8;
    --accent: #00bfff; --code: #0e1626;
  }}
  * {{ box-sizing: border-box; }}
  body {{ margin: 0; background: var(--bg); color: var(--text);
    font: 15px/1.65 "Segoe UI", system-ui, -apple-system, sans-serif; }}
  header {{ padding: 48px 20px 36px; border-bottom: 1px solid var(--border);
    background: radial-gradient(ellipse 70% 120% at 80% 0%, rgba(0,191,255,.18), transparent 70%); }}
  header .inner, main {{ max-width: 860px; margin: 0 auto; }}
  header p.kicker {{ margin: 0; color: var(--accent); font-size: 12px; font-weight: 700;
    letter-spacing: .18em; text-transform: uppercase; }}
  header h1 {{ margin: 10px 0 8px; font-size: 34px; line-height: 1.15; }}
  header p.sub {{ margin: 0; color: var(--muted); }}
  main {{ padding: 8px 20px 80px; }}
  main > h1:first-child {{ display: none; }}
  h2 {{ margin: 48px 0 12px; font-size: 24px; padding-top: 24px; border-top: 1px solid var(--border); }}
  h3 {{ margin: 32px 0 10px; font-size: 18px; color: #fff; }}
  p, li {{ color: #cfd8e6; }}
  strong {{ color: #fff; }}
  a {{ color: var(--accent); }}
  hr {{ border: 0; }}
  code {{ font-family: Consolas, "Cascadia Mono", monospace; font-size: 13px; background: var(--code);
    border: 1px solid var(--border); border-radius: 5px; padding: 1px 5px; color: #bfe9ff; }}
  blockquote {{ margin: 16px 0; padding: 12px 16px; border-left: 3px solid var(--accent);
    background: rgba(0,191,255,.07); border-radius: 0 8px 8px 0; }}
  blockquote p {{ margin: 0; }}
  .prompt {{ margin: 14px 0 18px; border: 1px solid var(--border); border-radius: 12px;
    background: var(--code); overflow: hidden; break-inside: avoid; }}
  .prompt-bar {{ display: flex; align-items: center; justify-content: space-between;
    padding: 8px 10px 8px 14px; border-bottom: 1px solid var(--border); background: var(--card);
    font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); }}
  .copy {{ border: 1px solid var(--border); background: #1a2640; color: var(--text); border-radius: 8px;
    padding: 6px 14px; font: 600 13px "Segoe UI", sans-serif; cursor: pointer; transition: .15s; }}
  .copy:hover {{ border-color: var(--accent); color: var(--accent); }}
  .copy.done {{ background: var(--accent); border-color: var(--accent); color: #04121c; }}
  .prompt pre {{ margin: 0; padding: 14px 16px; white-space: pre-wrap; word-break: break-word; }}
  .prompt pre code {{ border: 0; background: none; padding: 0; color: #dbe7f5; font-size: 13.5px; line-height: 1.6; }}
  .table-wrap {{ overflow-x: auto; border: 1px solid var(--border); border-radius: 12px; margin: 14px 0; }}
  table {{ border-collapse: collapse; width: 100%; font-size: 13.5px; }}
  th, td {{ text-align: left; padding: 10px 12px; border-bottom: 1px solid var(--border); vertical-align: top; }}
  th {{ background: var(--card); color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; }}
  tr:last-child td {{ border-bottom: 0; }}
  td code {{ white-space: nowrap; }}
  @media print {{
    :root {{ --bg: #fff; --card: #f2f5f9; --border: #d5dde8; --text: #0b1220; --muted: #4b5b73; --code: #f7f9fc; }}
    body {{ font-size: 11pt; }}
    header {{ background: none; padding: 0 0 16px; }}
    p, li, strong, h3 {{ color: #111 !important; }}
    code, .prompt pre code {{ color: #0b1220 !important; }}
    .copy {{ display: none; }}
    h2 {{ break-before: auto; }}
    @page {{ margin: 16mm 14mm; }}
  }}
</style>
</head>
<body>
<header><div class="inner">
  <p class="kicker">GoodWill Plast</p>
  <h1>{html.escape(TITLE)}</h1>
  <p class="sub">Click <strong>Copy</strong> on any prompt.</p>
</div></header>
<main>
{body}
</main>
<script>
  document.querySelectorAll('.copy').forEach((btn) => {{
    btn.addEventListener('click', async () => {{
      const text = document.getElementById(btn.dataset.target).innerText.trim();
      try {{ await navigator.clipboard.writeText(text); }}
      catch {{
        const ta = Object.assign(document.createElement('textarea'), {{ value: text }});
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      }}
      btn.textContent = 'Copied ✓'; btn.classList.add('done');
      setTimeout(() => {{ btn.textContent = 'Copy'; btn.classList.remove('done'); }}, 1600);
    }});
  }});
</script>
</body>
</html>
"""
OUT_HTML.write_text(page, encoding="utf-8")
print(f"wrote {OUT_HTML.name} ({counter} copyable blocks)")

browser = next((b for b in BROWSERS if Path(b).exists()), None)
if browser:
    subprocess.run(
        [browser, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
         f"--print-to-pdf={OUT_PDF}", OUT_HTML.as_uri()],
        check=True, capture_output=True, timeout=120,
    )
    print(f"wrote {OUT_PDF.name}")
else:
    print("no Chrome/Edge found; skipped PDF")
