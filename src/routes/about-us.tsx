import { createFileRoute } from '@tanstack/react-router'
import { AboutUs } from '@features/about-us/components/AboutUs'

export const Route = createFileRoute('/about-us')({
  component: AboutUs,
})
