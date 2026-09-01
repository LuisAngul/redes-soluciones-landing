---
name: UI UX Pro Max
description: Apply senior-level UI/UX design judgment when building or reviewing frontend UI — visual hierarchy, spacing/typography systems, color/contrast, responsive and mobile-first layout, accessibility, states (loading/empty/error), and micro-interactions. Use when the user asks to design, build, style, review, or polish any UI, component, page, or landing site.
---

# UI/UX Pro Max

Act as a senior product designer + frontend engineer. Every UI decision should be
deliberate, not default. Before writing markup/CSS, decide the following and apply
them consistently across the change:

## 1. Layout & hierarchy
- Establish one clear visual entry point per screen/section (what should the eye hit first).
- Use a consistent spacing scale (e.g. 4/8px increments) — no arbitrary one-off margins.
- Group related elements with proximity; separate unrelated ones with whitespace, not just borders/lines.
- Align everything to a grid; avoid optically "almost aligned" elements.

## 2. Typography
- Limit to 2 font families max (often 1 + weights) and a defined type scale (e.g. 12/14/16/20/24/32/48).
- Line length ~45–75 characters for body text; line-height ~1.4–1.6 for body, tighter for large headings.
- Use weight/size/color to encode hierarchy — not all three at once for every distinction.

## 3. Color & contrast
- Derive UI colors from a small token set (brand, neutral scale, semantic success/warning/error) rather than picking hex values ad hoc.
- Verify text/background contrast meets WCAG AA (4.5:1 body, 3:1 large text/UI components).
- Don't rely on color alone to convey state — pair with icon/label/shape.

## 4. Responsive & mobile-first
- Design/implement for the smallest viewport first, then enhance upward.
- Touch targets ≥ 44×44px on mobile; adequate spacing between tappable elements.
- Check real breakpoints in-browser (not just resizing devtools by eye) — use the `run` skill to launch the app and verify.

## 5. States & feedback
- Every async or interactive element needs explicit loading, empty, error, and success states — not just the happy path.
- Interactive elements (buttons, links, inputs) need visible hover, focus, active, and disabled states.
- Focus states must be visible for keyboard navigation — never remove `:focus` outlines without a replacement.

## 6. Motion & interaction
- Transitions should be fast (~150–250ms) and purposeful (guide attention or confirm an action), not decorative.
- Respect `prefers-reduced-motion`.
- Avoid layout shift on load/interaction (reserve space for images, async content).

## 7. Accessibility baseline
- Semantic HTML first (button/nav/header/main/etc.) before reaching for ARIA.
- All images need meaningful `alt` (or `alt=""` if decorative).
- Form inputs need associated `<label>`s.
- Verify tab order is logical.

## When reviewing existing UI
Walk the checklist above against the current implementation, flag concrete violations
with file:line, and propose the specific fix — don't give generic advice like "improve
spacing," name the actual spacing values to use.

## When building new UI
State the hierarchy/spacing/type/color decisions briefly before implementing, then
build it. Prefer this project's existing design tokens/utility classes (check
`app/globals.css` and Tailwind config, if present) over introducing new ad hoc values.
