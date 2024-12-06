import { createFileRoute } from '@tanstack/react-router'
import { Aromat } from '../../../pages/aromat/aromat'
export const Route = createFileRoute('/_layoutmain/aromat/')({
  component: () => <Aromat />,
})
