import type { Prisma, Company } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: {
      data: {
        name: 'String481091',
        address1: 'String',
        address2: 'String',
        city: 'String',
        zipcode: 'String',
        country: 'String',
        updateAt: '2022-11-25T18:11:39.155Z',
        updatedBy: 1767098,
      },
    },
    two: {
      data: {
        name: 'String8218035',
        address1: 'String',
        address2: 'String',
        city: 'String',
        zipcode: 'String',
        country: 'String',
        updateAt: '2022-11-25T18:11:39.155Z',
        updatedBy: 3723433,
      },
    },
  },
})

export type StandardScenario = ScenarioData<Company, 'company'>
