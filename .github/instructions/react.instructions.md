llms-txt-version: 0.1.0

project-name: portfolio
project-type: frontend
framework: react
language: typescript
module-system: esm
state-management: vanilla state
styling: tailwindcss
build-tool: vite
package-manager: bun
linter: eslint
formatter: prettier

# Project Structure

directory-structure:

- src/
  - components/
  - data/
  - hooks/
  - models/
  - App.tsx
  - main.tsx
- public/
  - fonts/
- vite.config.ts
- tsconfig.json

coding-conventions:

- Functional components with hooks only
- PascalCase for components, camelCase for functions
- File-based modularization with folder grouping
- Tailwind utility-first for all styling
- ESLint + Prettier enforced on commit
- Under no circumstances should React be imported completely. Always import React elements destructured, for example: `import { useState, useEffect } from 'react';`
- Do not add "What is" or "How it works" type comments, that should be deducible from the component/function name and how it works, from the names of its internal variables. Only add comments about "Why" something is being done.
- Do not add any comments in the code unless specifically requested by the user.

# React Concepts

## Components

- [https://react.dev/learn/your-first-component](https://react.dev/learn/your-first-component)
- [https://react.dev/learn/passing-props-to-a-component](https://react.dev/learn/passing-props-to-a-component)
- [https://react.dev/learn/rendering-lists](https://react.dev/learn/rendering-lists)
- [https://react.dev/learn/responding-to-events](https://react.dev/learn/responding-to-events)
- [https://react.dev/learn/sharing-state-between-components](https://react.dev/learn/sharing-state-between-components)
- [https://react.dev/learn/lifecycle-of-reactive-effects](https://react.dev/learn/lifecycle-of-reactive-effects)

## Hooks

- [https://react.dev/learn/reusing-logic-with-custom-hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [https://react.dev/reference/react/useState](https://react.dev/reference/react/useState)
- [https://react.dev/reference/react/useEffect](https://react.dev/reference/react/useEffect)
- [https://react.dev/reference/react/useContext](https://react.dev/reference/react/useContext)
- [https://react.dev/reference/react/useMemo](https://react.dev/reference/react/useMemo)
- [https://react.dev/reference/react/useRef](https://react.dev/reference/react/useRef)

## State Management

- [https://react.dev/learn/sharing-state-between-components](https://react.dev/learn/sharing-state-between-components)
- [https://react.dev/learn/scaling-up-with-reducer-and-context](https://react.dev/learn/scaling-up-with-reducer-and-context)

## Styling

- [https://tailwindcss.com/docs/utility-first](https://tailwindcss.com/docs/utility-first)
- [https://tailwindcss.com/docs/responsive-design](https://tailwindcss.com/docs/responsive-design)
- [https://tailwindcss.com/docs/pseudo-class-variants](https://tailwindcss.com/docs/pseudo-class-variants)
- [https://tailwindcss.com/docs/customizing-colors](https://tailwindcss.com/docs/customizing-colors)

## Routing

- [https://reactrouter.com/en/main/start/tutorial](https://reactrouter.com/en/main/start/tutorial)
- [https://reactrouter.com/en/main/components/link](https://reactrouter.com/en/main/components/link)
- [https://reactrouter.com/en/main/components/outlet](https://reactrouter.com/en/main/components/outlet)
- [https://reactrouter.com/en/main/hooks/use-navigate](https://reactrouter.com/en/main/hooks/use-navigate)

## Build Tools

- [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
- [https://vitejs.dev/config/](https://vitejs.dev/config/)

## ESLint & Prettier

- [https://eslint.org/docs/latest/use/configure/](https://eslint.org/docs/latest/use/configure/)
- [https://prettier.io/docs/en/configuration.html](https://prettier.io/docs/en/configuration.html)

## Typescript

- [https://www.typescriptlang.org/docs/handbook/react.html](https://www.typescriptlang.org/docs/handbook/react.html)
- [https://www.typescriptlang.org/tsconfig](https://www.typescriptlang.org/tsconfig)
- [https://www.typescriptlang.org/docs/handbook/utility-types.html](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## Deployment

- [https://vercel.com/docs](https://vercel.com/docs)
- [https://netlify.com/docs](https://netlify.com/docs)

## Performance

- [https://react.dev/learn/optimizing-performance](https://react.dev/learn/optimizing-performance)
- [https://react.dev/learn/prefetching-code-and-data](https://react.dev/learn/prefetching-code-and-data)
- [https://react.dev/learn/code-splitting](https://react.dev/learn/code-splitting)

## Accessibility

- [https://react.dev/learn/accessibility](https://react.dev/learn/accessibility)
- [https://developer.mozilla.org/en-US/docs/Web/Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## Security

- [https://react.dev/learn/security](https://react.dev/learn/security)

## Testing

- [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)
- [https://testing-library.com/docs/user-event/intro/](https://testing-library.com/docs/user-event/intro/)
- [https://vitest.dev/guide/](https://vitest.dev/guide/)

## Image Optimization

- [https://imagekit.io/docs/react/](https://imagekit.io/docs/react/)
- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#best_practices](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#best_practices)

## Deployment Targets

- [https://vercel.com](https://vercel.com)
- [https://netlify.com](https://netlify.com)
- [https://github.com/features/actions](https://github.com/features/actions)

## UI/UX Design

- [https://www.uidesign.tips/ui-tips/visual-hierarchy](https://www.uidesign.tips/ui-tips/visual-hierarchy) - opacity, bold fonts, scaling, arrangement, grouping
- [https://www.uidesign.tips/ui-tips/align-unever-items](https://www.uidesign.tips/ui-tips/align-unever-items) - consistent width for uneven elements
- [https://www.uidesign.tips/ui-tips/border-radius-consistency](https://www.uidesign.tips/ui-tips/border-radius-consistency) - outer radius equals twice inner
- [https://www.uidesign.tips/ui-tips/make-cards-look-clickable-vol-2](https://www.uidesign.tips/ui-tips/make-cards-look-clickable-vol-2) - actionable buttons indicate card clickability
- [https://www.uidesign.tips/ui-tips/engaging-links](https://www.uidesign.tips/ui-tips/engaging-links) - buttons work better than links
- [https://www.uidesign.tips/ui-tips/responsive-tooltips](https://www.uidesign.tips/ui-tips/responsive-tooltips) - clickable help icons for mobile
- [https://www.uidesign.tips/ui-tips/empty-state](https://www.uidesign.tips/ui-tips/empty-state) - meaningful content for empty states
- [https://www.uidesign.tips/ui-tips/don-t-let-user-guess](https://www.uidesign.tips/ui-tips/don-t-let-user-guess) - clear user guidance and expectations
- [https://www.uidesign.tips/ui-tips/de-emphasize-dangerous-actions](https://www.uidesign.tips/ui-tips/de-emphasize-dangerous-actions) - secondary styling for destructive actions
- [https://www.uidesign.tips/ui-tips/support-icons-with-text](https://www.uidesign.tips/ui-tips/support-icons-with-text) - combine icons with descriptive text
- [https://www.uidesign.tips/ui-tips/social-login](https://www.uidesign.tips/ui-tips/social-login) - social first, email below, privacy options
- [https://www.uidesign.tips/ui-tips/better-menus](https://www.uidesign.tips/ui-tips/better-menus) - icons next to actions for visual identification
- [https://www.uidesign.tips/ui-tips/gutenburg-principle](https://www.uidesign.tips/ui-tips/gutenburg-principle) - z-pattern layout for cta placement
- [https://www.uidesign.tips/ui-tips/quick-ui-fixes](https://www.uidesign.tips/ui-tips/quick-ui-fixes) - clear button copies instead of generic
- [https://www.uidesign.tips/ui-tips/hero-section-cta-1](https://www.uidesign.tips/ui-tips/hero-section-cta-1) - always have cta above fold
- [https://www.uidesign.tips/ui-tips/how-to-design-the-perfect-header](https://www.uidesign.tips/ui-tips/how-to-design-the-perfect-header) - font weight, scale system, contrast, alignment
- [https://www.uidesign.tips/ui-tips/how-to-validate-deletion](https://www.uidesign.tips/ui-tips/how-to-validate-deletion) - never allow deletion without validation
- [https://www.uidesign.tips/ui-tips/avatar-background-1](https://www.uidesign.tips/ui-tips/avatar-background-1) - subtle border and background for transparency
- [https://www.uidesign.tips/ui-tips/avatar-background-2](https://www.uidesign.tips/ui-tips/avatar-background-2) - subtle border matches background color
- [https://www.uidesign.tips/ui-tips/brand-colors](https://www.uidesign.tips/ui-tips/brand-colors) - highlight important elements only, use tints
- [https://www.uidesign.tips/ui-tips/distinguish-selected-items](https://www.uidesign.tips/ui-tips/distinguish-selected-items) - background color changes for selection
- [https://www.uidesign.tips/ui-tips/hero-section-consistency](https://www.uidesign.tips/ui-tips/hero-section-consistency) - consistent buttons, single primary cta
- [https://www.uidesign.tips/ui-tips/hero-section-cta-2](https://www.uidesign.tips/ui-tips/hero-section-cta-2) - leverage visuals to direct attention
- [https://www.uidesign.tips/ui-tips/hero-section-prompt-scroll](https://www.uidesign.tips/ui-tips/hero-section-prompt-scroll) - show glimpse of next section
- [https://www.uidesign.tips/ui-tips/highlight-popular-plan](https://www.uidesign.tips/ui-tips/highlight-popular-plan) - color, size, elevation for best offers
- [https://www.uidesign.tips/ui-tips/line-width](https://www.uidesign.tips/ui-tips/line-width) - limit lines between 500px-700px for readability
- [https://www.uidesign.tips/ui-tips/make-inputs-self-explanatory](https://www.uidesign.tips/ui-tips/make-inputs-self-explanatory) - placeholder guidance, predefined values for inputs
- [https://www.uidesign.tips/ui-tips/number-input-1](https://www.uidesign.tips/ui-tips/number-input-1) - number picker for integers, buttons for quantity
- [https://www.uidesign.tips/ui-tips/quick-ui-fixes-1](https://www.uidesign.tips/ui-tips/quick-ui-fixes-1) - prominent cta, readable text, distinguishable elements
- [https://www.uidesign.tips/ui-tips/right-chart-type](https://www.uidesign.tips/ui-tips/right-chart-type) - bar charts for limited options
- [https://www.uidesign.tips/ui-tips/round-card-padding](https://www.uidesign.tips/ui-tips/round-card-padding) - double padding for non-round edges
- [https://www.uidesign.tips/ui-tips/use-labels-cleverly](https://www.uidesign.tips/ui-tips/use-labels-cleverly) - visual representation of selected values
- [https://www.uidesign.tips/ui-tips/use-labels-cleverly-2](https://www.uidesign.tips/ui-tips/use-labels-cleverly-2) - color picker labels for accessibility
- [https://www.uidesign.tips/ui-tips/users-hate-surprises](https://www.uidesign.tips/ui-tips/users-hate-surprises) - clear copy to avoid misunderstandings
- [https://www.uidesign.tips/ui-tips/users-hate-surprises-1](https://www.uidesign.tips/ui-tips/users-hate-surprises-1) - keyboard shortcuts next to action buttons
- [https://www.uidesign.tips/ui-tips/ux-vs-conversions](https://www.uidesign.tips/ui-tips/ux-vs-conversions) - prioritize user experience over conversions
- [https://www.uidesign.tips/ui-tips/visually-seperate-elements-1](https://www.uidesign.tips/ui-tips/visually-seperate-elements-1) - whitespace over dividers for clean ui
