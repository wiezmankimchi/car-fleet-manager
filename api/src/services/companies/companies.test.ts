import type { Company } from '@prisma/client'

import {
  companies,
  company,
  createCompany,
  updateCompany,
  deleteCompany,
} from './companies'
import type { StandardScenario } from './companies.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('companies', () => {
  scenario('returns all companies', async (scenario: StandardScenario) => {
    const result = await companies()

    expect(result.length).toEqual(Object.keys(scenario.company).length)
  })

  scenario('returns a single company', async (scenario: StandardScenario) => {
    const result = await company({ id: scenario.company.one.id })

    expect(result).toEqual(scenario.company.one)
  })

  scenario('creates a company', async () => {
    const result = await createCompany({
      input: {
        name: 'String2341182',
        address1: 'String',
        address2: 'String',
        city: 'String',
        zipcode: 'String',
        country: 'String',
        updateAt: '2022-11-25T18:11:39.130Z',
        updatedBy: 918249,
      },
    })

    expect(result.name).toEqual('String2341182')
    expect(result.address1).toEqual('String')
    expect(result.address2).toEqual('String')
    expect(result.city).toEqual('String')
    expect(result.zipcode).toEqual('String')
    expect(result.country).toEqual('String')
    expect(result.updateAt).toEqual(new Date('2022-11-25T18:11:39.130Z'))
    expect(result.updatedBy).toEqual(918249)
  })

  scenario('updates a company', async (scenario: StandardScenario) => {
    const original = (await company({ id: scenario.company.one.id })) as Company
    const result = await updateCompany({
      id: original.id,
      input: { name: 'String79857192' },
    })

    expect(result.name).toEqual('String79857192')
  })

  scenario('deletes a company', async (scenario: StandardScenario) => {
    const original = (await deleteCompany({
      id: scenario.company.one.id,
    })) as Company
    const result = await company({ id: original.id })

    expect(result).toEqual(null)
  })
})
