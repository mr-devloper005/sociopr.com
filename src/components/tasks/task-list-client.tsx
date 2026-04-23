"use client";

import { useMemo } from "react";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildPostUrl } from "@/lib/task-data";
import { normalizeCategory, isValidCategory } from "@/lib/categories";
import type { TaskKey } from "@/lib/site-config";
import type { SitePost } from "@/lib/site-connector";
import { getLocalPostsForTask } from "@/lib/local-posts";

type Props = {
  task: TaskKey;
  initialPosts: SitePost[];
  category?: string;
  query?: string;
  dateRange?: string;
};

function withinPublishedRange(publishedAt: string | undefined, range?: string) {
  if (!range || range === "all") return true;
  const d = publishedAt ? new Date(publishedAt) : null;
  if (!d || Number.isNaN(d.getTime())) return true;
  const now = Date.now();
  const diff = now - d.getTime();
  if (range === "7d") return diff <= 7 * 86400000;
  if (range === "30d") return diff <= 30 * 86400000;
  return true;
}

export function TaskListClient({ task, initialPosts, category, query, dateRange }: Props) {
  const localPosts = getLocalPostsForTask(task);

  const merged = useMemo(() => {
    const bySlug = new Set<string>();
    const combined: Array<SitePost & { localOnly?: boolean; task?: TaskKey }> = [];

    localPosts.forEach((post) => {
      if (post.slug) {
        bySlug.add(post.slug);
      }
      combined.push(post);
    });

    initialPosts.forEach((post) => {
      if (post.slug && bySlug.has(post.slug)) return;
      combined.push(post);
    });

    const normalizedCategory = category ? normalizeCategory(category) : "all";
    if (normalizedCategory === "all") {
      return combined.filter((post) => {
        const content = post.content && typeof post.content === "object" ? post.content : {};
        const value = typeof (content as any).category === "string" ? (content as any).category : "";
        return !value || isValidCategory(value);
      });
    }

    return combined.filter((post) => {
      const content = post.content && typeof post.content === "object" ? post.content : {};
      const value =
        typeof (content as any).category === "string"
          ? normalizeCategory((content as any).category)
          : "";
      return value === normalizedCategory;
    });
  }, [category, initialPosts, localPosts]);

  const filtered = useMemo(() => {
    let rows = merged;
    const q = query?.trim().toLowerCase();
    if (q) {
      rows = rows.filter((post) => {
        const hay = `${post.title || ""} ${post.summary || ""}`.toLowerCase();
        return hay.includes(q);
      });
    }
    if (dateRange && dateRange !== "all") {
      rows = rows.filter((post) => withinPublishedRange(post.publishedAt, dateRange));
    }
    return rows;
  }, [merged, query, dateRange]);

  if (!filtered.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-muted/20 p-10 text-center text-muted-foreground">
        {merged.length
          ? "No releases match these filters. Try clearing search or widening the date window."
          : "No posts yet for this section."}
      </div>
    );
  }

  const gridClass =
    task === "mediaDistribution"
      ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className={gridClass}>
      {filtered.map((post) => {
        const localOnly = (post as any).localOnly;
        const href = localOnly
          ? `/local/${task}/${post.slug}`
          : buildPostUrl(task, post.slug);
        return <TaskPostCard key={post.id} post={post} href={href} taskKey={task} />;
      })}
    </div>
  );
}
