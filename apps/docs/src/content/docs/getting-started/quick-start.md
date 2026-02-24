---
title: Quick Start
description: "Get up and running with Minions Bundle: Knowledge in minutes"
---

## TypeScript

```typescript
import { createClient } from '@mxn2020/minions-bundles-knowledge-core';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_bundles_knowledge import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
minions-bundles-knowledge info
```
