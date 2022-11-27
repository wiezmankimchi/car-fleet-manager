const MainTransactionSectionHeader = () => {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          Latest Transactions
        </h3>
        <span className="text-base font-normal text-gray-500">
          This is a list of latest transactions
        </span>
      </div>
      <div className="flex-shrink-0">
        <a
          href="/"
          className="rounded-lg p-2 text-sm font-medium text-cyan-600 hover:bg-gray-100"
        >
          View all
        </a>
      </div>
    </div>
  )
}

export default MainTransactionSectionHeader
