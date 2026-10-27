# Google Flow: open mouth drum manufacturing video

Six 8-second clips that show a blue HDPE open mouth drum being made, ending on the finished
drum with the GoodWill Plast logo. Stitch them in order to get one ~48-second film. Clip 6
also works on its own as a short looping hero video.

## Settings for every clip

- Mode: **Text to Video** (clips 1–5), **Frames to Video** (clip 6, see below)
- Aspect ratio: **16:9**, length: **8 seconds**, best-quality model
- To keep clips flowing into each other: after a clip is done, use **Extend** (or take its last
  frame as the start frame of the next clip) and paste the next prompt.

## Step 0: make the logo drum image first (ChatGPT, 1 minute)

Video models often garble logos. So make one still image with the logo correct, then animate
it in clip 6.

In ChatGPT, attach `src/assets/logo(1).png` (your logo) and
`src/assets/Products/open_top/open_mouth_drum.png` (the drum), then paste:

```
Create a photorealistic product photo of the exact blue HDPE open mouth drum in the second
image, with the logo from the first image printed cleanly on the front of the drum, centered,
in white, following the curve of the drum. Keep the drum's shape, lid, clamp ring and handles
exactly the same. Dark industrial studio background with soft cyan rim light, slight
reflection on the floor. Camera at eye level, 3/4 view. Landscape 16:9. No other text.
```

Check the logo is spelled and shaped correctly. Save it as `drum-with-logo.png`.

---

## Clip 1: raw material

```
Cinematic macro shot inside a modern plastics factory. Thousands of glossy blue HDPE plastic
granules pour in a steady stream from a steel chute into a stainless steel hopper, bouncing
and catching the light. Shallow depth of field, slow motion, warm overhead factory lights
with cool blue accents, clean and professional. Slow camera push-in. Realistic, no people,
no text.
```

## Clip 2: melting and extrusion

```
Cinematic close-up of an industrial extrusion blow moulding machine. A thick tube of molten
blue HDPE plastic slowly extrudes downward from a heated steel die head, glowing slightly,
soft and glossy, hanging between two open steel mould halves. Gentle heat haze. Slow
sideways camera move. Clean modern factory, realistic industrial lighting, no people,
no text.
```

## Clip 3: blow moulding

```
Cinematic shot of two large polished steel mould halves closing around the molten blue
plastic tube with a firm mechanical motion. A puff of air, then the mould holds still as the
plastic is inflated inside. Machine indicator lights blink. Camera slowly orbits the machine.
Realistic modern blow moulding machine, clean factory, no people, no text.
```

## Clip 4: the drum comes out

```
Cinematic shot of the steel blow mould opening to reveal a freshly formed blue HDPE open
mouth drum, smooth and glossy, slightly steaming as it cools. A robotic arm lifts the drum
out and places it on a conveyor belt. Smooth slow camera tracking. Realistic modern factory,
soft cool lighting, no people, no text.
```

## Clip 5: finishing and quality check

```
Cinematic shot of blue HDPE open mouth drums moving along a conveyor in a clean modern
factory. A worker in a navy uniform and gloves fits a lid and a metal clamp ring onto a drum,
then checks it with a careful look. Rows of identical blue drums in the background. Slow
dolly shot, shallow depth of field, realistic, no text.
```

## Clip 6: final product with logo (Frames to Video)

- Start frame: `drum-with-logo.png`
- End frame: `drum-with-logo.png` (same image, so the clip loops cleanly)

```
Slow, smooth cinematic camera orbit around the blue HDPE open mouth drum standing on a dark
reflective floor in a dark studio. A soft cyan rim light sweeps across the drum, highlighting
its curves and the white logo on the front. Subtle floating dust in the light. The drum and
the logo stay perfectly still and sharp: no warping, no morphing, no changes to the logo.
Premium product launch style, steady and elegant.
```

---

## Avoid list (add to the end of any prompt that comes out wrong)

```
Avoid: warped or melting objects, extra limbs, distorted hands, garbled text or logos,
changing drum shape, flickering, shaky camera, cartoon look, watermarks.
```

## Stitching and export

1. In Flow's scene builder, put the clips in order 1 → 6.
2. Export **1080p MP4**.
3. Send me the MP4 and I'll put it on the website: compressed so it stays sharp and light,
   with no sound (autoplaying videos must be muted), looping smoothly, and with a poster image
   while it loads. If the full film is too long for the hero, I'll use clip 6 alone as the loop.
