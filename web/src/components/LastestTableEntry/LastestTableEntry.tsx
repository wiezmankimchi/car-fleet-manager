const LastestTableEntry = ({
  avatar,
  avatarAlt,
  text,
  url,
  urlText,
  data,
}: {
  avatar: string
  avatarAlt: string
  text: string
  url: string
  urlText: string
  data: number
}) => {
  return (
    <>
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src={avatar}
              alt={avatarAlt}
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900">{text}</p>
            <p className="truncate text-sm text-gray-500">
              <a
                href={url}
                className="__cf_email__"
                data-cfemail="17727a767e7b57607e7973646372653974787a"
              >
                {urlText}
              </a>
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900">
            ${data}
          </div>
        </div>
      </li>
    </>
  )
}

export default LastestTableEntry
