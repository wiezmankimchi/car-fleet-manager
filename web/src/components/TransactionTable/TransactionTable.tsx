const TransactionTable = () => {
  return (
    <div className="mt-8 flex flex-col">
      <div className="overflow-x-auto rounded-lg">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden shadow sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Transaction
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Date & Time
                  </th>
                  <th
                    scope="col"
                    className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900">
                    Payment from{' '}
                    <span className="font-semibold">Bonnie Green</span>
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500">
                    Apr 23 ,2021
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900">
                    $2300
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="rounded-left whitespace-nowrap rounded-lg p-4 text-sm font-normal text-gray-900">
                    Payment refund to{' '}
                    <span className="font-semibold">#00910</span>
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500">
                    Apr 23 ,2021
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900">
                    -$670
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900">
                    Payment failed from{' '}
                    <span className="font-semibold">#087651</span>
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500">
                    Apr 18 ,2021
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900">
                    $234
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="rounded-left whitespace-nowrap rounded-lg p-4 text-sm font-normal text-gray-900">
                    Payment from{' '}
                    <span className="font-semibold">Lana Byrd</span>
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500">
                    Apr 15 ,2021
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900">
                    $5000
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900">
                    Payment from{' '}
                    <span className="font-semibold">Jese Leos</span>
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500">
                    Apr 15 ,2021
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900">
                    $2300
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="rounded-left whitespace-nowrap rounded-lg p-4 text-sm font-normal text-gray-900">
                    Payment from{' '}
                    <span className="font-semibold">THEMESBERG LLC</span>
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500">
                    Apr 11 ,2021
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900">
                    $560
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900">
                    Payment from{' '}
                    <span className="font-semibold">Lana Lysle</span>
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500">
                    Apr 6 ,2021
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900">
                    $1437
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionTable
