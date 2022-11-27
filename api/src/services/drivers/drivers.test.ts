import type { driver } from '@prisma/client'

import {
  drivers,
  driver,
  createDriver,
  updateDriver,
  deleteDriver,
} from './drivers'
import type { StandardScenario } from './drivers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('drivers', () => {
  scenario('returns all drivers', async (scenario: StandardScenario) => {
    const result = await drivers()

    expect(result.length).toEqual(Object.keys(scenario.driver).length)
  })

  scenario('returns a single driver', async (scenario: StandardScenario) => {
    const result = await driver({ id: scenario.driver.one.id })

    expect(result).toEqual(scenario.driver.one)
  })

  scenario('creates a driver', async (scenario: StandardScenario) => {
    const result = await createDriver({
      input: {
        name: 'String',
        email: 'String',
        phone: 'String',
        dob: '2022-11-25T18:12:31.348Z',
        companyId: scenario.driver.two.companyId,
        updateAt: '2022-11-25T18:12:31.348Z',
        updatedBy: 3606879,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.phone).toEqual('String')
    expect(result.dob).toEqual(new Date('2022-11-25T18:12:31.348Z'))
    expect(result.companyId).toEqual(scenario.driver.two.companyId)
    expect(result.updateAt).toEqual(new Date('2022-11-25T18:12:31.348Z'))
    expect(result.updatedBy).toEqual(3606879)
  })

  scenario('updates a driver', async (scenario: StandardScenario) => {
    const original = (await driver({ id: scenario.driver.one.id })) as driver
    const result = await updateDriver({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a driver', async (scenario: StandardScenario) => {
    const original = (await deleteDriver({
      id: scenario.driver.one.id,
    })) as driver
    const result = await driver({ id: original.id })

    expect(result).toEqual(null)
  })
})
