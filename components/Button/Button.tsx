import { Button } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons'

export default function ButtonLink({ text, href }) {
  return (
    <Button
      component="a"
      target={'_blank'}
      href={href}
      variant="outline"
      size="xs"
      leftIcon={<IconExternalLink size={14} />}
    >
      {text}
    </Button>
  )
}
