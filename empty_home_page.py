import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Empty view-home section
home_start = html.find('id="view-home"')
if home_start != -1:
    h_sec_start = html.rfind('<section', 0, home_start)
    h_sec_end = html.find('</section>', home_start) + len('</section>')
    
    empty_home = '<section class="app-view" id="view-home"></section>'
    html = html[:h_sec_start] + empty_home + html[h_sec_end:]
    print("Emptied view-home section in index.html!")

# 2. Make view-browse the active-view in index.html markup
html = html.replace('id="view-browse"', 'id="view-browse" class="app-view active-view"')
html = html.replace('class="app-view active-view" id="view-browse"', 'class="app-view active-view" id="view-browse"')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated index.html markup with active view-browse!")
