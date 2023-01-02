import type { Prisma, Driver } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DriverCreateArgs>({
  driver: {
    one: {
      data: {
        name: 'String',
        email: 'String',
        phone: 'String',
        dob: '2022-12-31T03:35:40.661Z',
      },
    },
    two: {
      data: {
        name: 'String',
        email: 'String',
        phone: 'String',
        dob: '2022-12-31T03:35:40.661Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Driver, 'driver'>
