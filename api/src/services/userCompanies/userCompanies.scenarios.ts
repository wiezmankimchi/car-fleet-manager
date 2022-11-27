import type { Prisma, userCompany } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.userCompanyCreateArgs>({
  userCompany: {
    one: {
      data: {
        updateAt: '2022-11-25T18:13:05.998Z',
        updatedBy: 8779657,
        company: {
          create: {
            name: 'String75811',
            address1: 'String',
            address2: 'String',
            city: 'String',
            zipcode: 'String',
            country: 'String',
            updateAt: '2022-11-25T18:13:05.998Z',
            updatedBy: 7027328,
          },
        },
      },
    },
    two: {
      data: {
        updateAt: '2022-11-25T18:13:05.998Z',
        updatedBy: 4858164,
        company: {
          create: {
            name: 'String9006880',
            address1: 'String',
            address2: 'String',
            city: 'String',
            zipcode: 'String',
            country: 'String',
            updateAt: '2022-11-25T18:13:05.998Z',
            updatedBy: 63964,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<userCompany, 'userCompany'>
