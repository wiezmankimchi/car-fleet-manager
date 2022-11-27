import type { Prisma, driver } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.driverCreateArgs>({
  driver: {
    one: {
      data: {
        name: 'String',
        email: 'String',
        phone: 'String',
        dob: '2022-11-25T18:12:31.393Z',
        updateAt: '2022-11-25T18:12:31.393Z',
        updatedBy: 4111277,
        company: {
          create: {
            name: 'String4178861',
            address1: 'String',
            address2: 'String',
            city: 'String',
            zipcode: 'String',
            country: 'String',
            updateAt: '2022-11-25T18:12:31.393Z',
            updatedBy: 8292305,
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        email: 'String',
        phone: 'String',
        dob: '2022-11-25T18:12:31.393Z',
        updateAt: '2022-11-25T18:12:31.393Z',
        updatedBy: 786883,
        company: {
          create: {
            name: 'String5777292',
            address1: 'String',
            address2: 'String',
            city: 'String',
            zipcode: 'String',
            country: 'String',
            updateAt: '2022-11-25T18:12:31.393Z',
            updatedBy: 4519910,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<driver, 'driver'>
