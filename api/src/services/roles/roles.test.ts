import type { Role } from '@prisma/client'

import { roles, role, createRole, updateRole, deleteRole } from './roles'
import type { StandardScenario } from './roles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('roles', () => {
  scenario('returns all roles', async (scenario: StandardScenario) => {
    const result = await roles()

    expect(result.length).toEqual(Object.keys(scenario.role).length)
  })

  scenario('returns a single role', async (scenario: StandardScenario) => {
    const result = await role({ id: scenario.role.one.id })

    expect(result).toEqual(scenario.role.one)
  })

  scenario('creates a role', async () => {
    const result = await createRole({
      input: {
        name: 'String',
        updateAt: '2022-11-25T18:11:19.778Z',
        updatedBy: 8664583,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.updateAt).toEqual(new Date('2022-11-25T18:11:19.778Z'))
    expect(result.updatedBy).toEqual(8664583)
  })

  scenario('updates a role', async (scenario: StandardScenario) => {
    const original = (await role({ id: scenario.role.one.id })) as Role
    const result = await updateRole({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a role', async (scenario: StandardScenario) => {
    const original = (await deleteRole({ id: scenario.role.one.id })) as Role
    const result = await role({ id: original.id })

    expect(result).toEqual(null)
  })
})