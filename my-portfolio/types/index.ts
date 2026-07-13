// types/index.ts
export interface Achievement {
  id: string;
  title: string;
  category: "FEATURED" | "SYSTEM_LOG" | "RESEARCH";
  date: string;
  desc: string;
}
