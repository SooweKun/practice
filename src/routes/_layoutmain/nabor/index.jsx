import { createFileRoute } from '@tanstack/react-router'
import { Nabor } from '../../../pages/nabor/nabor'
export const Route = createFileRoute('/_layoutmain/nabor/')({
  component: () => <Nabor />,
})
