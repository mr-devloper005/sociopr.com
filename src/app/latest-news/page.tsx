import { permanentRedirect } from 'next/navigation'

/** Canonical listing lives at `/blog`; this URL stays bookmark-friendly. */
export default function LatestNewsPage() {
  permanentRedirect('/blog')
}
