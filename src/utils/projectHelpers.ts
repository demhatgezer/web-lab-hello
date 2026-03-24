import type { Category, Project, SortField, SortOrder } from "../types/project";

export function filterBySearch(projects: Project[], search: string): Project[] {
  const query = search.trim().toLowerCase();

  if (!query) return projects;

  return projects.filter((project) => {
    const inTitle = project.title.toLowerCase().includes(query);
    const inDescription = project.description.toLowerCase().includes(query);
    const inTech = project.tech.some((item) =>
      item.toLowerCase().includes(query)
    );

    return inTitle || inDescription || inTech;
  });
}

export function filterByCategory(
  projects: Project[],
  category: Category | "all"
): Project[] {
  if (category === "all") return projects;

  return projects.filter((project) => project.category === category);
}

export function sortProjects(
  projects: Project[],
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  const sorted = [...projects].sort((a, b) => {
    if (sortField === "year") {
      return a.year - b.year;
    }

    return a.title.localeCompare(b.title, "tr");
  });

  return sortOrder === "desc" ? sorted.reverse() : sorted;
}

export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let result = filterBySearch(projects, search);
  result = filterByCategory(result, category);
  result = sortProjects(result, sortField, sortOrder);
  return result;
}