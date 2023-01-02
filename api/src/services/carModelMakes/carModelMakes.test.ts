import type { CarModelMake } from '@prisma/client'

import {
  carModelMakes,
  carModelMake,
  createCarModelMake,
  updateCarModelMake,
  deleteCarModelMake,
} from './carModelMakes'
import type { StandardScenario } from './carModelMakes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('carModelMakes', () => {
  scenario('returns all carModelMakes', async (scenario: StandardScenario) => {
    const result = await carModelMakes()

    expect(result.length).toEqual(Object.keys(scenario.carModelMake).length)
  })

  scenario(
    'returns a single carModelMake',
    async (scenario: StandardScenario) => {
      const result = await carModelMake({ id: scenario.carModelMake.one.id })

      expect(result).toEqual(scenario.carModelMake.one)
    }
  )

  scenario('creates a carModelMake', async (scenario: StandardScenario) => {
    const result = await createCarModelMake({
      input: { name: 'String', carMakeId: scenario.carModelMake.two.carMakeId },
    })

    expect(result.name).toEqual('String')
    expect(result.carMakeId).toEqual(scenario.carModelMake.two.carMakeId)
  })

  scenario('updates a carModelMake', async (scenario: StandardScenario) => {
    const original = (await carModelMake({
      id: scenario.carModelMake.one.id,
    })) as CarModelMake
    const result = await updateCarModelMake({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a carModelMake', async (scenario: StandardScenario) => {
    const original = (await deleteCarModelMake({
      id: scenario.carModelMake.one.id,
    })) as CarModelMake
    const result = await carModelMake({ id: original.id })

    expect(result).toEqual(null)
  })
})
