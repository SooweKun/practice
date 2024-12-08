import { createFileRoute } from '@tanstack/react-router'
import { Admin } from '../../../pages/admin/admin'
export const Route = createFileRoute('/_layoutmain/admin/')({
  component: () => <Admin />,
})
