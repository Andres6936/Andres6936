import type { Config } from "@react-router/dev/config";
import { resolveBasename } from "./scripts/resolver";

export default {
  basename: resolveBasename(),
  ssr: false,
  prerender: true,
} satisfies Config;
