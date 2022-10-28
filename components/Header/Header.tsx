/* eslint-disable @next/next/no-img-element */
import { Header, Group, Box } from '@mantine/core'
import Link from 'next/link'

export function Head() {
  return (
    <Box>
      <Header height={64} px="md">
        <Group position="center" sx={{ height: '100%' }}>
          <Link href={'/'}>
            <img
              src="/icons/zippia-logo.png"
              alt="Zippia-logo"
              style={{
                width: '132px',
                margin: '1rem'
              }}
            />
          </Link>
        </Group>
      </Header>
    </Box>
  )
}
