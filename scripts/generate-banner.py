"""Deterministic brand illustration, not experimental data. Requires Pillow/fonttools."""
from PIL import Image, ImageDraw, ImageFont
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from pathlib import Path
import math
root=Path(__file__).resolve().parents[1]
f=TTFont(root/'app/fonts/manrope.woff2');f=instantiateVariableFont(f,{'wght':550});f.flavor=None;f.save('/tmp/kush-manrope.ttf')
im=Image.new('RGB',(1584,396),'#284bea');d=ImageDraw.Draw(im)
for y in range(38,390,29):
 for x in range(15,540,29):
  w=math.exp(-((x-280)**2+(y-150)**2)/12000);u=x+40*w;v=y-24*w
  d.line((x,y,u,v),fill='#7898f5',width=1);d.ellipse((u-2,v-2,u+2,v+2),fill='#cbd7ff')
d.ellipse((265,112,337,184),outline='#efb17e',width=2)
font=lambda n:ImageFont.truetype('/tmp/kush-manrope.ttf',n)
d.text((605,63),'Kush Rishi',font=font(57),fill='white')
d.text((609,160),'ML systems. Evaluation.',font=font(34),fill='white')
d.text((609,207),'Spatial intelligence.',font=font(34),fill='white')
d.text((610,301),'kushrishi.com',font=font(23),fill='#d8e0ff')
im.save(root/'public/brand/linkedin-banner.png',optimize=True)
