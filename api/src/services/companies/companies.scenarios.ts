import type { Prisma, Company } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: {
      data: {
        name: 'String6525286',
        city: 'String',
        zipcode: 'String',
        country: 'String',
      },
    },
    two: {
      data: {
        name: 'String2262088',
        city: 'String',
        zipcode: 'String',
        country: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Company, 'company'>
