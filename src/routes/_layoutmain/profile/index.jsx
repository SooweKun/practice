import { createFileRoute } from '@tanstack/react-router'
import { Aromat } from '../../../pages/aromat/aromat'
import { Profile } from '../../../pages/profile/profile'
export const Route = createFileRoute('/_layoutmain/profile/')({
  component: () => <Profile />,
})
