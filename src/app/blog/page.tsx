import { TaskListPage } from '@/components/tasks/task-list-page'
import { buildTaskMetadata } from '@/lib/seo'

export const revalidate = 3
export const generateMetadata = () => buildTaskMetadata('article')

export default function BlogPage({ searchParams }: { searchParams?: { category?: string } }) {
  return <TaskListPage task="article" category={searchParams?.category} />
}
