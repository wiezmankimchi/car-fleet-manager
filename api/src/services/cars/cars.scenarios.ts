import type { Prisma, car } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.carCreateArgs>({
  car: {
    one: {
      data: {
        registrtion: 'String',
        regDate: '2022-11-25T18:12:47.274Z',
        updateAt: '2022-11-25T18:12:47.274Z',
        updatedBy: 2937999,
        carmake: {
          create: {
            name: 'String',
            updateAt: '2022-11-25T18:12:47.274Z',
            updatedBy: 6771953,
            make: {
              create: {
                name: 'String',
                updateAt: '2022-11-25T18:12:47.274Z',
                updatedBy: 8607279,
              },
            },
          },
        },
        driver: {
          create: {
            name: 'String',
            email: 'String',
            phone: 'String',
            dob: '2022-11-25T18:12:47.274Z',
            updateAt: '2022-11-25T18:12:47.274Z',
            updatedBy: 5051614,
            company: {
              create: {
                name: 'String8176324',
                address1: 'String',
                address2: 'String',
                city: 'String',
                zipcode: 'String',
                country: 'String',
                updateAt: '2022-11-25T18:12:47.274Z',
                updatedBy: 3523977,
              },
            },
          },
        },
        company: {
          create: {
            name: 'String8096093',
            address1: 'String',
            address2: 'String',
            city: 'String',
            zipcode: 'String',
            country: 'String',
            updateAt: '2022-11-25T18:12:47.274Z',
            updatedBy: 564605,
          },
        },
      },
    },
    two: {
      data: {
        registrtion: 'String',
        regDate: '2022-11-25T18:12:47.274Z',
        updateAt: '2022-11-25T18:12:47.274Z',
        updatedBy: 9790329,
        carmake: {
          create: {
            name: 'String',
            updateAt: '2022-11-25T18:12:47.274Z',
            updatedBy: 71269,
            make: {
              create: {
                name: 'String',
                updateAt: '2022-11-25T18:12:47.274Z',
                updatedBy: 6914295,
              },
            },
          },
        },
        driver: {
          create: {
            name: 'String',
            email: 'String',
            phone: 'String',
            dob: '2022-11-25T18:12:47.274Z',
            updateAt: '2022-11-25T18:12:47.274Z',
            updatedBy: 408179,
            company: {
              create: {
                name: 'String5357393',
                address1: 'String',
                address2: 'String',
                city: 'String',
                zipcode: 'String',
                country: 'String',
                updateAt: '2022-11-25T18:12:47.274Z',
                updatedBy: 6143532,
              },
            },
          },
        },
        company: {
          create: {
            name: 'String3052876',
            address1: 'String',
            address2: 'String',
            city: 'String',
            zipcode: 'String',
            country: 'String',
            updateAt: '2022-11-25T18:12:47.274Z',
            updatedBy: 2943030,
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<car, 'car'>
