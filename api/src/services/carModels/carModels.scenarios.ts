import type { Prisma, CarModel } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CarModelCreateArgs>({
  carModel: {
    one: {
      data: {
        name: 'String',
        updateAt: '2022-11-25T18:11:55.847Z',
        updatedBy: 3710140,
      },
    },
    two: {
      data: {
        name: 'String',
        updateAt: '2022-11-25T18:11:55.847Z',
        updatedBy: 6087441,
      },
    },
  },
})

export type StandardScenario = ScenarioData<CarModel, 'carModel'>
