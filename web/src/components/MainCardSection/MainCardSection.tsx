import {
  numberCommaFormatter,
  numberPercentFormatter,
} from 'src/lib/formatters'

const downarrow = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const uparrow = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const MainCardSection = ({
  cardvalue = 10000,
  cardtext = 'card text',
  cardpercent = 48,
  cardup = true,
}: {
  cardvalue: number
  cardtext: string
  cardpercent: number
  cardup: boolean
}) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow sm:p-6 xl:p-8 ">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
            {numberCommaFormatter(cardvalue)}
          </span>
          <h3 className="text-base font-normal text-gray-500">{cardtext}</h3>
        </div>
        <div
          className={`${cardup ? 'text-green-500' : 'text-red-500'}
             ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold  `}
        >
          {numberPercentFormatter(cardpercent)}
          {cardup ? uparrow() : downarrow()}
        </div>
      </div>
    </div>
  )
}

export default MainCardSection
