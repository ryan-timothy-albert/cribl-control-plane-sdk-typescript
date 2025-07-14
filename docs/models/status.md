# Status

## Example Usage

```typescript
import { Status } from "cribl-control-plane/models";

let value: Status = "shutting down";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"healthy" | "shutting down" | "standby" | Unrecognized<string>
```