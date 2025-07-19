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
