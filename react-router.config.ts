import type { Config } from "@react-router/dev/config";

export default {
  basename: process.env.GITHUB_ACTIONS
    ? `/${process.env.GITHUB_REPOSITORY_NAME}/`
    : "/",
  ssr: false,
  prerender: true,
} satisfies Config;
