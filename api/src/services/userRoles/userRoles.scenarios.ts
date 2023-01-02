import type { Prisma, UserRole } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserRoleCreateArgs>({
  userRole: {
    one: {
      data: {
        user: {
          create: {
            email: 'String9554100',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        role: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        user: {
          create: {
            email: 'String7357776',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        role: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserRole, 'userRole'>
