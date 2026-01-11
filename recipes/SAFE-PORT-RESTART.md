# Safe Port Restart Recipe

## Problem
Dev servers get stuck on ports, but killing all Node processes kills Claude agents too.

## NEVER DO THIS
```bash
# CATASTROPHIC - kills all Claude sessions:
taskkill /F /IM node.exe
pkill node
killall node
```

## Safe Approach

### 1. Find the specific process
```bash
# Find what's using port 3000
netstat -ano | findstr :3000

# Or on Linux/Mac
lsof -i :3000
```

### 2. Kill only that specific PID
```bash
# Windows
taskkill //F //PID 12345

# Linux/Mac
kill -9 12345
```

### 3. Alternative: Use different port
```bash
# Next.js
npm run dev -- -p 3001

# Vite
npm run dev -- --port 3001
```

## Port Conflict Prevention

1. Always check if port is in use before starting
2. Use random/configured ports in development
3. Keep a list of assigned ports per project
4. Consider using port 0 (auto-assign) for tests

## VSC Assigned Port
This project uses port **9570** for development.
