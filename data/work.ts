export const workCategories = ["ecosystem", "marketing", "events", "media"] as const;

export type WorkCategory = (typeof workCategories)[number];

export function isWorkCategory(value: string | undefined): value is WorkCategory {
  return workCategories.includes(value as WorkCategory);
}

