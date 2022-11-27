import type { Prisma, UserRole } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserRoleCreateArgs>({
  userRole: {
    one: {
      data: {
        updateAt: '2022-11-25T18:14:11.975Z',
        updatedBy: 4337112,
        user: {
          create: {
            email: 'String7929273',
            firstName: 'String',
            lastName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        role: {
          create: {
            name: 'String',
            updateAt: '2022-11-25T18:14:11.975Z',
            updatedBy: 3752037,
          },
        },
      },
    },
    two: {
      data: {
        updateAt: '2022-11-25T18:14:11.975Z',
        updatedBy: 8189293,
        user: {
          create: {
            email: 'String1833477',
            firstName: 'String',
            lastName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        role: {
          create: {
            name: 'String',
            updateAt: '2022-11-25T18:14:11.975Z',
            updatedBy: 4788217,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserRole, 'userRole'>
