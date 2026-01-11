# Very Smooth Code

Developer tools hub with coding helpers, styling tools, snippets, cheatsheets, and curated resources.

## Quick Start

```bash
npm install
npm run dev
```

Dev server runs on http://localhost:9570

## Project Structure

```
/app/                # Next.js app router
  /tools/            # Mini tools (CSS, JSON, etc.)
  /snippets/         # Code snippets
  /cheatsheets/      # Quick references
  /blog/             # Articles
/components/         # Shared components
/lib/                # Utilities
/docs/               # Documentation & research
/recipes/            # Development recipes
```

## Documentation

- [Project Brief](./PROJECT-BRIEF.md) - Vision and goals
- [Initial Research](./docs/init-research/initial-research.md) - Strategic analysis, SEO, monetization
- [Agent Instructions](./.claude/CLAUDE.md) - For AI agents

## Key Decisions

See `/docs/init-research/` for comprehensive analysis on:
- Domain/trademark considerations
- SEO architecture (subdirectories vs subdomains)
- High-traffic tool categories
- Monetization strategies
- Design patterns

## Stack

- Next.js 14+ with App Router
- Tailwind CSS
- Solarized theme
- TypeScript

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (port 9570) |
| `npm run build` | Production build |
| `npm run lint` | Run linter |
| `npm run menu` | Interactive menu |

## License

Proprietary - Conzeon AB
