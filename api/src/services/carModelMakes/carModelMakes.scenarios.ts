import type { Prisma, CarModelMake } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CarModelMakeCreateArgs>({
  carModelMake: {
    one: { data: { name: 'String', make: { create: { name: 'String' } } } },
    two: { data: { name: 'String', make: { create: { name: 'String' } } } },
  },
})

export type StandardScenario = ScenarioData<CarModelMake, 'carModelMake'>
