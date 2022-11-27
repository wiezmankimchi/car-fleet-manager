import type { Prisma, Role } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RoleCreateArgs>({
  role: {
    one: {
      data: {
        name: 'String',
        updateAt: '2022-11-25T18:11:19.801Z',
        updatedBy: 1229148,
      },
    },
    two: {
      data: {
        name: 'String',
        updateAt: '2022-11-25T18:11:19.801Z',
        updatedBy: 5229294,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Role, 'role'>
