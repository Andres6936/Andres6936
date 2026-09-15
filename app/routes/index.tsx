import type { Route } from "./+types/index";
import Home from "@/pages/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eng. Joan A. Buriticá" },
    { name: "description", content: "System Engineer with Master's Degree" },
  ];
}

export default function Page() {
  return <Home />;
}
