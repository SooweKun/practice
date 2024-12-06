import { createFileRoute } from '@tanstack/react-router'
import { Parfume } from '/src/pages/parfum/parfume.jsx'
export const Route = createFileRoute('/_layoutmain/parfum/')({
  component: () => <Parfume />,
})
