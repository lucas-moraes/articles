---
name: apple-design
description: Apple-inspired design system for web interfaces — SF Pro typography, black/light-gray section rhythm, single Apple Blue accent (#0071e3), glass navigation, pill CTAs
compatibility: opencode
---

## Visual Theme

Apple's design is reductive: vast black (#000000) and light gray (#f5f5f7) sections alternate for cinematic pacing. Typography anchors everything — SF Pro Display for headlines (20px+), SF Pro Text for body (below 20px).

### Key Characteristics
- SF Pro Display/Text with optical sizing — automatically adapts to size context
- Binary light/dark section rhythm: black (#000000) alternating with light gray (#f5f5f7)
- Single accent color: Apple Blue (#0071e3) reserved exclusively for interactive elements
- Product-as-hero photography on solid color fields
- Tight headline line-heights (1.07-1.14)
- Full-width section layout with centered content
- Pill-shaped CTAs (980px radius)
- Generous whitespace between sections

## Color Palette

### Primary
- Pure Black (#000000): Hero backgrounds
- Light Gray (#f5f5f7): Alternate section backgrounds
- Near Black (#1d1d1f): Primary text on light backgrounds

### Interactive
- Apple Blue (#0071e3): CTAs, focus rings — ONLY chromatic accent
- Link Blue (#0066cc): Inline links on light backgrounds
- Bright Blue (#2997ff): Links on dark backgrounds

### Text
- White (#ffffff): Text on dark backgrounds
- Near Black (#1d1d1f): Primary text on light backgrounds
- Black 80% (rgba(0,0,0,0.8)): Secondary text

### Surface & Dark Variants
- Dark Surface 1 (#272729): Card backgrounds in dark sections
- Dark Surface 2 (#262628): Subtle surface variation
- Dark Surface 3 (#28282a): Elevated cards
- Dark Surface 4 (#2a2a2d): Highest elevation
- Dark Surface 5 (#242426): Deepest dark surface

### Shadows
- Card Shadow: rgba(0,0,0,0.22) 3px 5px 30px 0px — soft, diffused, wide blur

## Typography Rules

### Font Family
- Display: `SF Pro Display` (fallbacks: SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif)
- Body: `SF Pro Text` (fallbacks: SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif)
- SF Pro Display at 20px+; SF Pro Text optimized for 19px and below

### Type Scale

| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Display Hero | 56px | 600 | 1.07 | -0.28px |
| Section Heading | 40px | 600 | 1.10 | normal |
| Tile Heading | 28px | 400 | 1.14 | 0.196px |
| Card Title | 21px | 700 | 1.19 | 0.231px |
| Body | 17px | 400 | 1.47 | -0.374px |
| Body Emphasis | 17px | 600 | 1.24 | -0.374px |
| Button Large | 18px | 300 | 1.00 | normal |
| Button | 17px | 400 | 2.41 | normal |
| Link | 14px | 400 | 1.43 | -0.224px |
| Caption | 14px | 400 | 1.29 | -0.224px |
| Micro | 12px | 400 | 1.33 | -0.12px |
| Nano | 10px | 400 | 1.47 | -0.08px |

### Principles
- Negative tracking at ALL sizes (not just headlines)
- Weight range: 300 (light) to 700 (bold), most text at 400 or 600
- Extreme line-height range: headlines 1.07, body 1.47

## Components

### Buttons

**Primary Blue CTA**
- Background: #0071e3, Text: #ffffff
- Padding: 8px 15px, Radius: 8px
- Font: SF Pro Text, 17px, weight 400
- Focus: 2px solid #0071e3 outline

**Primary Dark**
- Background: #1d1d1f, Text: #ffffff
- Padding: 8px 15px, Radius: 8px

**Pill Link (Learn More / Shop)**
- Background: transparent
- Text: #0066cc (light bg) or #2997ff (dark bg)
- Border: 1px solid currentColor
- Radius: 980px (full pill)
- Hover: underline

**Filter Button**
- Background: #fafafc
- Text: rgba(0,0,0,0.8)
- Padding: 0px 14px, Radius: 11px

**Media Control**
- Background: rgba(210,210,215,0.64)
- Radius: 50% (circular)
- Active: scale(0.9)

### Cards
- Background: #f5f5f7 (light) or #272729-#2a2a2d (dark)
- Border: none
- Radius: 5px-8px
- Shadow: rgba(0,0,0,0.22) 3px 5px 30px 0px

### Navigation
- Background: rgba(0,0,0,0.8) with backdrop-filter: saturate(180%) blur(20px)
- Height: 48px
- Text: #ffffff at 12px
- Glass effect floats above scrolling content

### Product Hero Module
- Full-viewport-width section with solid background
- Product name: SF Pro Display, 56px, weight 600
- Two pill CTAs: "Learn more" (outline) + "Buy" (filled blue)

### Product Grid Tile
- Square card on contrasting background
- Product image 60-70% of tile
- "Learn more" and "Shop" link pair at bottom

## Layout

### Spacing
- Base unit: 8px
- Scale: 2, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 17, 20, 24px

### Grid
- Max content width: ~980px
- Hero: full-viewport-width with centered content
- Product grids: 2-3 columns within centered container
- Full viewport height sections with alternating color blocks

### Border Radius Scale
- Micro (5px): Small containers
- Standard (8px): Buttons, cards
- Comfortable (11px): Search inputs
- Large (12px): Feature panels
- Full Pill (980px): CTA links
- Circle (50%): Media controls

## Depth

| Level | Treatment |
|-------|-----------|
| Flat | No shadow, solid background |
| Navigation Glass | backdrop-filter: saturate(180%) blur(20px) on rgba(0,0,0,0.8) |
| Subtle Lift | rgba(0,0,0,0.22) 3px 5px 30px 0px |
| Media Control | rgba(210,210,215,0.64) + scale transforms |
| Focus | 2px solid #0071e3 outline |

## Do's and Don'ts

### Do
- Use SF Pro Display at 20px+, SF Pro Text below
- Apply negative letter-spacing at ALL text sizes
- Use Apple Blue (#0071e3) ONLY for interactive elements
- Alternate black and #f5f5f7 section backgrounds
- Use 980px pill radius for CTA links
- Use translucent glass for navigation
- Compress headline line-heights to 1.07-1.14

### Don't
- Introduce additional accent colors
- Use heavy shadows or multiple shadow layers
- Use borders on cards or containers
- Apply wide letter-spacing to SF Pro
- Use weight 800 or 900 (max is 700)
- Add textures, patterns, or gradients
- Make navigation opaque
- Center-align body text (only headlines center)
- Use rounded corners larger than 12px (except 980px pills)

## Responsive Breakpoints

| Name | Width |
|------|-------|
| Small Mobile | <360px |
| Mobile | 360-480px |
| Mobile Large | 480-640px |
| Tablet Small | 640-834px |
| Tablet | 834-1024px |
| Desktop Small | 1024-1070px |
| Desktop | 1070-1440px |
| Large Desktop | >1440px |

### Touch Targets
- Primary CTAs: ~44px touch height
- Navigation links: 48px height
- Media controls: 44x44px minimum

## Quick Reference

### Colors
- Primary CTA: #0071e3
- Light background: #f5f5f7
- Dark background: #000000
- Heading text (light): #1d1d1f
- Heading text (dark): #ffffff
- Body text (light): rgba(0,0,0,0.8)
- Link (light bg): #0066cc
- Link (dark bg): #2997ff
- Card shadow: rgba(0,0,0,0.22) 3px 5px 30px 0px

### Example Prompts

**Hero section on black:**
"Create a hero section on black background. Headline at 56px SF Pro Display weight 600, line-height 1.07, letter-spacing -0.28px, white. Subtitle at 21px SF Pro Display weight 400, line-height 1.19, white. Two pill CTAs: 'Learn more' (transparent bg, white text, 1px solid white border, 980px radius) and 'Buy' (#0071e3 bg, white text, 8px radius)."

**Product card:**
"Design a product card: #f5f5f7 background, 8px border-radius, no border. Product image top 60% on solid background. Title at 28px SF Pro Display weight 400, letter-spacing 0.196px, line-height 1.14. Description at 14px SF Pro Text weight 400, rgba(0,0,0,0.8). 'Learn more' and 'Shop' links in #0066cc."

**Apple navigation:**
"Build sticky navigation: 48px height, background rgba(0,0,0,0.8) with backdrop-filter: saturate(180%) blur(20px). Links at 12px SF Pro Text weight 400, white. Apple logo left, links centered, icons right."

**Learn more link:**
"Create a 'Learn more' link: text #0066cc on light bg or #2997ff on dark bg, 14px SF Pro Text, underline on hover, right-arrow chevron after text, 980px border-radius for pill shape."

## Iteration Guide
1. Every interactive element gets Apple Blue (#0071e3) — no other accent colors
2. Section backgrounds alternate: black for immersive, #f5f5f7 for informational
3. Typography optical sizing: SF Pro Display at 20px+, SF Pro Text below
4. Negative letter-spacing at all sizes
5. Navigation glass effect is non-negotiable
6. Products always on solid color fields
7. Shadow is rare: 3px 5px 30px 0.22 opacity or nothing
8. Pill CTAs use 980px radius
