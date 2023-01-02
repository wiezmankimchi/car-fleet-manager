import type { Prisma, Car } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CarCreateArgs>({
  car: {
    one: {
      data: {
        registrtion: 'String',
        regDate: '2022-12-31T03:35:55.318Z',
        carmake: {
          create: { name: 'String', make: { create: { name: 'String' } } },
        },
        driver: {
          create: {
            name: 'String',
            email: 'String',
            phone: 'String',
            dob: '2022-12-31T03:35:55.318Z',
          },
        },
      },
    },
    two: {
      data: {
        registrtion: 'String',
        regDate: '2022-12-31T03:35:55.318Z',
        carmake: {
          create: { name: 'String', make: { create: { name: 'String' } } },
        },
        driver: {
          create: {
            name: 'String',
            email: 'String',
            phone: 'String',
            dob: '2022-12-31T03:35:55.318Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Car, 'car'>
