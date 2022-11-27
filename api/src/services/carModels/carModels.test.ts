import type { CarModel } from '@prisma/client'

import {
  carModels,
  carModel,
  createCarModel,
  updateCarModel,
  deleteCarModel,
} from './carModels'
import type { StandardScenario } from './carModels.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('carModels', () => {
  scenario('returns all carModels', async (scenario: StandardScenario) => {
    const result = await carModels()

    expect(result.length).toEqual(Object.keys(scenario.carModel).length)
  })

  scenario('returns a single carModel', async (scenario: StandardScenario) => {
    const result = await carModel({ id: scenario.carModel.one.id })

    expect(result).toEqual(scenario.carModel.one)
  })

  scenario('creates a carModel', async () => {
    const result = await createCarModel({
      input: {
        name: 'String',
        updateAt: '2022-11-25T18:11:55.820Z',
        updatedBy: 7656494,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.updateAt).toEqual(new Date('2022-11-25T18:11:55.820Z'))
    expect(result.updatedBy).toEqual(7656494)
  })

  scenario('updates a carModel', async (scenario: StandardScenario) => {
    const original = (await carModel({
      id: scenario.carModel.one.id,
    })) as CarModel
    const result = await updateCarModel({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a carModel', async (scenario: StandardScenario) => {
    const original = (await deleteCarModel({
      id: scenario.carModel.one.id,
    })) as CarModel
    const result = await carModel({ id: original.id })

    expect(result).toEqual(null)
  })
})
