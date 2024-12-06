import { createFileRoute } from '@tanstack/react-router'
import { Contact } from '../../../pages/contact/contact'
export const Route = createFileRoute('/_layoutmain/contact/')({
  component: () => <Contact />,
})
