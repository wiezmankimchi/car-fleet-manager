import React from 'react'

const MAX_STRING_LENGTH = 150

export const truncate = (value: string | number) => {
  let output = value?.toString() ?? ''

  if (output.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }

  return output
}

export const jsonTruncate = (obj: unknown) => {
  return truncate(JSON.stringify(obj, null, 2))
}

export const timeTag = (dateTime?: string) => {
  let output: string | JSX.Element = ''

  if (dateTime) {
    output = (
      <time dateTime={dateTime} title={dateTime}>
        {new Date(dateTime).toUTCString()}
      </time>
    )
  }

  return output
}

export const checkboxInputTag = (checked: boolean) => {
  return <input type="checkbox" checked={checked} disabled />
}

export const numberCommaFormatter = (value: number) => {
  return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const numberPercentFormatter = (value: number) => {
  if (value <= 1) {
    const percent = value * 100
    return percent.toString() + '%'
  }
  return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '%'
}
