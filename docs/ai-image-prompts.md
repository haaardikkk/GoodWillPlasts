# AI image & video prompts — GoodWill Plast

Use these to replace the low-resolution product photos and to make a 3D-style hero.
Generate the images in **ChatGPT** first, then make the hero video in **Google Flow** using
those images.

**Golden rule:** always attach the real product photo as a reference. The products must look
like what you actually sell: same shape, handles, caps, ribs and colour. If ChatGPT changes the
design, regenerate. Don't publish an image that misrepresents a product.

---

## Part 1 — ChatGPT images

### Step 0: paste this once at the start of the chat

```
You are a product photographer and 3D product-visualisation artist for GoodWill Plast, an
Indian manufacturer of HDPE drums, jerry cans and PET jars. For every image in this chat:

- Recreate the EXACT product in the reference photo I attach: same silhouette, proportions,
  handles, lid, cap, ribs, neck, mouth and colour. Do not redesign, add or remove features.
- Photorealistic studio render, ultra-sharp, high detail, realistic HDPE plastic: semi-matte,
  slight sheen, subtle moulding lines, crisp edges.
- Lighting: soft large key light from upper left, cool cyan rim light (#00BFFF) from behind
  right, gentle fill. Soft realistic contact shadow under the product.
- Camera: 3/4 view, slightly above eye level (about 15°), 85mm lens look, no distortion.
- No text, no logos, no labels, no watermarks, no hands, no props unless I ask.
- Keep lighting, camera angle and style identical across every image so they match as a set.
```

### Step 1: individual product cutouts (transparent background)

These are for the 3D layered hero, product cards and product pages. Generate **one per
message**, attaching the reference file listed. Use **square 1:1**.

Prompt template (swap in the product line from the table):

```
Using the attached reference photo, create a single [PRODUCT DESCRIPTION] as an isolated
product cutout on a fully TRANSPARENT background (PNG). Centered, the product fills about 80%
of the frame height, with a soft contact shadow directly beneath it. Square 1:1. Follow all the
style rules from earlier exactly.
```

| Save as | Attach reference | [PRODUCT DESCRIPTION] |
|---|---|---|
| `open-mouth-drum.png` | `src/assets/Products/open_top/open_mouth_drum.png` | blue 50L HDPE open mouth drum with clamp ring lid and two side handles |
| `rocket-drum.png` | `src/assets/Products/Rocket Drum/rocket_yellow.png` | yellow 50L HDPE narrow-mouth rocket drum |
| `taper-drum.png` | `src/assets/Products/Taper_drum/blue_water_taper.png` | blue 50L HDPE tapered drum with lid |
| `double-layered-drum.png` | `src/assets/Products/Double_layer/double_mouth_red.png` | red 50L HDPE double-layered drum with threaded cap |
| `glossy-open-mouth-drum.png` | `src/assets/Products/open_top_glossy/glossy_orange.png` | orange 35L high-gloss HDPE open mouth drum with a mirror-like glossy finish |
| `mauser-jerry-can.png` | `src/assets/Products/mauser jerry/mauser_jerry_blue.png` | blue 35L HDPE Mauser-style jerry can with narrow neck and screw cap |
| `jerry-can.png` | `src/assets/Products/Jerry_can/white_jerry_can.png` | white 20L HDPE jerry can with integrated handle and pouring spout |
| `edible-oil-can.png` | `src/assets/Products/edible/narrow_mouth_yellow.png` | yellow 5L HDPE narrow-mouth edible oil can with integrated handle |
| `deluxe-can.png` | `src/assets/Products/delux_can/delux_can_white.png` | white 35L HDPE deluxe can with dispensing spout |
| `sauce-can.png` | `src/assets/Products/sauce_can/phenyl_green.png` | green 5L HDPE sauce / phenyl can with dispensing spout |
| `pet-jar-and-preform.png` | `src/assets/Products/jar_preform/jar_and_preforms.png` | group of crystal-clear transparent PET jars with caps in several sizes next to PET preforms, realistic clear plastic with refraction |


#### Ready-to-paste product prompts

Attach the reference file, paste the prompt, save the result with the name shown.

**1. open-mouth-drum.png**: attach `src/assets/Products/open_top/open_mouth_drum.png`

```
Using the attached reference photo, create a single blue 50L HDPE open mouth drum with clamp ring lid and two side handles as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**2. rocket-drum.png**: attach `src/assets/Products/Rocket Drum/rocket_yellow.png`

```
Using the attached reference photo, create a single yellow 50L HDPE narrow-mouth rocket drum as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**3. taper-drum.png**: attach `src/assets/Products/Taper_drum/blue_water_taper.png`

```
Using the attached reference photo, create a single blue 50L HDPE tapered drum with lid as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**4. double-layered-drum.png**: attach `src/assets/Products/Double_layer/double_mouth_red.png`

```
Using the attached reference photo, create a single red 50L HDPE double-layered drum with threaded cap as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**5. glossy-open-mouth-drum.png**: attach `src/assets/Products/open_top_glossy/glossy_orange.png`

```
Using the attached reference photo, create a single orange 35L high-gloss HDPE open mouth drum with a mirror-like glossy finish as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**6. mauser-jerry-can.png**: attach `src/assets/Products/mauser jerry/mauser_jerry_blue.png`

```
Using the attached reference photo, create a single blue 35L HDPE Mauser-style jerry can with narrow neck and screw cap as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**7. jerry-can.png**: attach `src/assets/Products/Jerry_can/white_jerry_can.png`

```
Using the attached reference photo, create a single white 20L HDPE jerry can with integrated handle and pouring spout as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**8. edible-oil-can.png**: attach `src/assets/Products/edible/narrow_mouth_yellow.png`

```
Using the attached reference photo, create a single yellow 5L HDPE narrow-mouth edible oil can with integrated handle as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**9. deluxe-can.png**: attach `src/assets/Products/delux_can/delux_can_white.png`

```
Using the attached reference photo, create a single white 35L HDPE deluxe can with dispensing spout as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**10. sauce-can.png**: attach `src/assets/Products/sauce_can/phenyl_green.png`

```
Using the attached reference photo, create a single green 5L HDPE sauce / phenyl can with dispensing spout as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**11. pet-jar-and-preform.png**: attach `src/assets/Products/jar_preform/jar_and_preforms.png`

```
Using the attached reference photo, create a single group of crystal-clear transparent PET jars with caps in several sizes next to PET preforms, realistic clear plastic with refraction as an isolated product cutout on a
fully TRANSPARENT background (PNG). Centered, the product fills about 80% of the frame height,
with a soft contact shadow directly beneath it. Square 1:1. Follow all the style rules from
earlier exactly.
```

**Want every colour as well?** Reply after each product with this (change the colour), and save
as e.g. `open-mouth-drum-green.png`:

```
Same image, same angle, lighting and background, but the product in GREEN. Keep the design identical.
```

### Step 2: hero 3D composition (desktop, 16:9)

Attach **all** the cutouts from Step 1 (or at least: open mouth drum, rocket drum, mauser jerry
can, jerry can, edible oil can, PET jar).

```
Create a premium 3D product hero scene for an industrial packaging manufacturer, using the
EXACT products from the attached images without changing their design.

Composition: an elegant, asymmetric arrangement on three or four floating matte dark-navy
geometric plinths at different heights (cylinders and rounded blocks), forming a gentle
staircase from left to right. The blue open mouth drum is the hero on the tallest plinth at the
right; the yellow rocket drum and the blue Mauser jerry can stand slightly behind it; the white
jerry can and the yellow edible oil can sit in front on lower plinths; the clear PET jars sit
at the front edge catching the light. Products are spaced so each one is clearly readable,
with depth and overlap.

Environment: deep navy-black studio (#0B1220) fading to near black, a subtle cyan (#00BFFF)
glow behind the arrangement, a faint reflective floor with soft reflections, very light
atmospheric haze for depth. Cinematic, minimal, premium, like an Apple product launch but
industrial.

Leave the LEFT 45% of the frame as clean dark negative space for a headline.
Landscape 16:9 (1536x1024). Photorealistic, ultra-sharp, no text, no logos, no watermark.
```

Save as `hero-3d-desktop.png`.

### Step 3: hero 3D composition (mobile, portrait)

```
Same scene, same products, same lighting and style as the previous image, recomposed for a
phone screen: portrait 2:3 (1024x1536). Products arranged in a tighter stacked pyramid in the
LOWER 60% of the frame; the TOP 40% is clean dark negative space for a headline.
```

Save as `hero-3d-mobile.png`.

### Step 4: end frame for the video (camera moved)

```
Recreate the exact same desktop hero scene (same products, plinths, lighting and colours), but
as if the camera has slowly orbited about 20 degrees to the right and pushed in slightly. The
products, their positions and their design must stay identical; only the camera viewpoint
changes. Landscape 16:9 (1536x1024), no text.
```

Save as `hero-3d-desktop-end.png`.

### Step 5 (optional): featured close-ups

For the three featured products (open mouth drum, Mauser jerry can, edible oil can):

```
Using the attached product, create a dramatic close-up beauty shot: the product on a single
dark navy plinth, low camera angle, strong cyan rim light outlining the silhouette, soft
reflections on a dark glossy floor, deep navy background. Square 1:1. Product design unchanged,
no text.
```

Save as `featured-open-mouth-drum.png`, `featured-mauser-jerry-can.png`,
`featured-edible-oil-can.png`.

---

## Part 2 — Google Flow (hero video)

Do this after Part 1. In Flow, start a new project and pick **Frames to Video**.

- **Start frame:** `hero-3d-desktop.png`
- **End frame:** `hero-3d-desktop-end.png`
- **Aspect ratio:** 16:9 · **Length:** 8 seconds · best-quality model

**Prompt:**

```
Slow, smooth cinematic camera orbit around a premium arrangement of industrial plastic
packaging products (HDPE drums, jerry cans, cans and clear PET jars) standing on floating dark
navy plinths in a dark studio. The camera glides gently to the right and pushes in slightly,
revealing depth between the products. A soft cyan rim light sweeps slowly across the plastic
surfaces, creating moving highlights and reflections on the glossy floor. Very subtle drifting
haze and tiny dust particles in the light. The products stay completely still and keep their
exact shape, colour and design: no morphing, no melting, no new objects, no people, no text.
Calm, elegant, premium, steady motion, like a high-end product launch film.
```

**Negative / avoid** (paste in the negative prompt field if you have one, or add to the end):

```
warping, morphing products, changing shapes, extra objects, text, logos, watermark, people,
hands, fast camera moves, shaky camera, flicker, cartoon look
```

### Making it loop seamlessly

Generate a second 8-second clip with **start frame = `hero-3d-desktop-end.png`** and
**end frame = `hero-3d-desktop.png`**, using the same prompt but "glides gently back to the
left". Join clip 1 + clip 2 in Flow's scene builder and the video loops cleanly.

### Mobile version (optional)

Repeat with `hero-3d-mobile.png` as the start frame, aspect ratio **9:16**, and the same
prompt with "slow upward crane movement" instead of "orbit to the right".

Export at **1080p MP4**.

---

## Where to put the files

Put everything in `src/assets/generated/` with the filenames above, for example:

```
src/assets/generated/
  hero-3d-desktop.png
  hero-3d-mobile.png
  hero-3d-desktop-end.png
  hero-loop.mp4            (Flow video, desktop)
  hero-loop-mobile.mp4     (optional)
  open-mouth-drum.png
  rocket-drum.png
  ... (one per product, plus any colour variants)
```

Then ask Claude to wire them in. The plan:

- **Hero:** the desktop/mobile 3D still loads instantly as the poster (and is the LCP image).
  The Flow loop fades in on top once the page has loaded (skipped on Save-Data and
  reduced-motion). The transparent cutouts float as separate layers with mouse-tilt and scroll
  parallax for a real 3D feel.
- **Product cards & pages:** the new cutouts replace the current low-resolution photos,
  converted to WebP with responsive sizes so they stay sharp on retina screens without slowing
  the site.
