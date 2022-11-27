import type { UserRole } from '@prisma/client'

import {
  userRoles,
  userRole,
  createUserRole,
  updateUserRole,
  deleteUserRole,
} from './userRoles'
import type { StandardScenario } from './userRoles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userRoles', () => {
  scenario('returns all userRoles', async (scenario: StandardScenario) => {
    const result = await userRoles()

    expect(result.length).toEqual(Object.keys(scenario.userRole).length)
  })

  scenario('returns a single userRole', async (scenario: StandardScenario) => {
    const result = await userRole({ id: scenario.userRole.one.id })

    expect(result).toEqual(scenario.userRole.one)
  })

  scenario('creates a userRole', async (scenario: StandardScenario) => {
    const result = await createUserRole({
      input: {
        userId: scenario.userRole.two.userId,
        roleId: scenario.userRole.two.roleId,
        updateAt: '2022-11-25T18:14:11.946Z',
        updatedBy: 9542350,
      },
    })

    expect(result.userId).toEqual(scenario.userRole.two.userId)
    expect(result.roleId).toEqual(scenario.userRole.two.roleId)
    expect(result.updateAt).toEqual(new Date('2022-11-25T18:14:11.946Z'))
    expect(result.updatedBy).toEqual(9542350)
  })

  scenario('updates a userRole', async (scenario: StandardScenario) => {
    const original = (await userRole({
      id: scenario.userRole.one.id,
    })) as UserRole
    const result = await updateUserRole({
      id: original.id,
      input: { updateAt: '2022-11-26T18:14:11.946Z' },
    })

    expect(result.updateAt).toEqual(new Date('2022-11-26T18:14:11.946Z'))
  })

  scenario('deletes a userRole', async (scenario: StandardScenario) => {
    const original = (await deleteUserRole({
      id: scenario.userRole.one.id,
    })) as UserRole
    const result = await userRole({ id: original.id })

    expect(result).toEqual(null)
  })
})
