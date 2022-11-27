import type { Prisma, CarModelMake } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CarModelMakeCreateArgs>({
  carModelMake: {
    one: {
      data: {
        name: 'String',
        updateAt: '2022-11-25T18:12:13.580Z',
        updatedBy: 1572622,
        make: {
          create: {
            name: 'String',
            updateAt: '2022-11-25T18:12:13.580Z',
            updatedBy: 5977735,
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updateAt: '2022-11-25T18:12:13.580Z',
        updatedBy: 538591,
        make: {
          create: {
            name: 'String',
            updateAt: '2022-11-25T18:12:13.581Z',
            updatedBy: 2302762,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<CarModelMake, 'carModelMake'>
