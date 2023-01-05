import type { Prisma, Driver } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.DriverCreateArgs>({
  driver: {
    one: {
      data: {
        name: 'String',
        email: 'String',
        phone: 'String',
        dob: '2023-01-04T06:54:29.766Z',
        registrationNumber: 'String',
        registrationEndDate: '2023-01-04T06:54:29.766Z',
        registrationImageURL: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        email: 'String',
        phone: 'String',
        dob: '2023-01-04T06:54:29.766Z',
        registrationNumber: 'String',
        registrationEndDate: '2023-01-04T06:54:29.766Z',
        registrationImageURL: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Driver, 'driver'>
