import type { userCompany } from '@prisma/client'

import {
  userCompanies,
  userCompany,
  createUserCompany,
  updateUserCompany,
  deleteUserCompany,
} from './userCompanies'
import type { StandardScenario } from './userCompanies.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userCompanies', () => {
  scenario('returns all userCompanies', async (scenario: StandardScenario) => {
    const result = await userCompanies()

    expect(result.length).toEqual(Object.keys(scenario.userCompany).length)
  })

  scenario(
    'returns a single userCompany',
    async (scenario: StandardScenario) => {
      const result = await userCompany({ id: scenario.userCompany.one.id })

      expect(result).toEqual(scenario.userCompany.one)
    }
  )

  scenario('creates a userCompany', async (scenario: StandardScenario) => {
    const result = await createUserCompany({
      input: {
        companyId: scenario.userCompany.two.companyId,
        updateAt: '2022-11-25T18:13:05.949Z',
        updatedBy: 947969,
      },
    })

    expect(result.companyId).toEqual(scenario.userCompany.two.companyId)
    expect(result.updateAt).toEqual(new Date('2022-11-25T18:13:05.949Z'))
    expect(result.updatedBy).toEqual(947969)
  })

  scenario('updates a userCompany', async (scenario: StandardScenario) => {
    const original = (await userCompany({
      id: scenario.userCompany.one.id,
    })) as userCompany
    const result = await updateUserCompany({
      id: original.id,
      input: { updateAt: '2022-11-26T18:13:05.949Z' },
    })

    expect(result.updateAt).toEqual(new Date('2022-11-26T18:13:05.949Z'))
  })

  scenario('deletes a userCompany', async (scenario: StandardScenario) => {
    const original = (await deleteUserCompany({
      id: scenario.userCompany.one.id,
    })) as userCompany
    const result = await userCompany({ id: original.id })

    expect(result).toEqual(null)
  })
})
