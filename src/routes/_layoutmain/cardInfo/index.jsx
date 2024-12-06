import { createFileRoute } from '@tanstack/react-router'
import { CardInfo} from '../../../pages/cardInfo/cardInfo'
export const Route = createFileRoute('/_layoutmain/cardInfo/')({
  component: () => <CardInfo />,
})
