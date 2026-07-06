# Loveworld Consular

Public website for **The Office of the Loveworld Consular**, Loveworld Incorporated's
global-first consular network (South Africa, Malaysia, and beyond).

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** + **shadcn/ui** (`base-maia` style, neutral base, hugeicons)
- **motion** for animation
- **pnpm**

## Getting started

```bash
pnpm dev      # dev server → http://localhost:3000
pnpm build    # production build
pnpm start    # serve the production build
pnpm lint     # lint
```

## Structure

- `app/`: routes, root layout, and global styles. `app/globals.css` holds the shadcn
  theme tokens (`:root` / `.dark`). Treat it as the source of truth for design tokens.
- `components/ui/`: shadcn components.
- `lib/utils.ts`: the `cn` class-merge helper.
