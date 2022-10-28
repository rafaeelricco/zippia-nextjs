/* eslint-disable @next/next/no-img-element */
import { Card, Text, Badge, Group } from '@mantine/core'
import ButtonLink from '../Button/Button'

export function CardMantine({
  src,
  alt,
  posted,
  companyName,
  snippet,
  href,
  jobTitle,
  level,
  salary
}) {
  return (
    <Card withBorder radius="lg" mt={16} mb={16} p={'lg'}>
      <Group position="apart">
        <img
          src={src}
          alt={alt}
          style={{
            width: '54px',
            height: '54px',
            objectFit: 'contain',
            borderRadius: '10%'
          }}
        />
        <Badge>{posted}</Badge>
      </Group>

      <Text size="lg" weight={500} mt="xs">
        {jobTitle}
      </Text>
      <Text size="sm" weight={500}>
        {companyName}
      </Text>
      <Text size="sm" color={'dimmed'} mt={'xs'}>
        {snippet}
      </Text>
      <Text size="md" color={'dark'} mt={'sm'} mb={'sm'} weight={'bolder'}>
        {salary}
      </Text>

      <Group position="apart" spacing={7} mt={5}>
        <Badge>{level}</Badge>
        <ButtonLink href={href} text={'Open in new tab'} />
      </Group>
    </Card>
  )
}
