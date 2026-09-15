import fs from "node:fs";
import path from "node:path";

export function resolveBasename(): string {
  if (fs.existsSync(path.resolve(process.cwd(), "public/CNAME"))) return "/";
  if (process.env.GITHUB_ACTIONS)
    return `/${process.env.GITHUB_REPOSITORY_NAME}/`;
  return "/";
}
