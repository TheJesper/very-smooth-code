# Development Workflow Recipe

## Starting Work

1. Check `at.md` for current tasks
2. Pull latest changes: `git pull`
3. Install deps if needed: `npm install`
4. Start dev server: `npm run dev`

## Before Commits

1. Run linter: `npm run lint`
2. Run tests: `npm test`
3. Build check: `npm run build`
4. Review changes: `git diff`

## Commit Message Format

```
type: brief description

- Detail 1
- Detail 2
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Code Review Checklist

- [ ] No console.logs left
- [ ] No commented-out code
- [ ] Responsive on mobile
- [ ] Accessible (keyboard nav, aria labels)
- [ ] No hardcoded values that should be configurable

## Git Safety

Never run without thinking:
- `git restore .`
- `git reset --hard`
- `git clean -f`
- `git checkout -- .`

Always safe:
- `git status`
- `git diff`
- `git log`
