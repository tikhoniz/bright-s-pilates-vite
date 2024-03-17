declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classnames: IClassNames
  export = classnames
}

// declare module '*.png'
// declare module '*.jpg'
// declare module '*.jpeg'
// declare module '*.svg' {
//   import { type ReactElement, type SVGProps } from 'react'
//   const content: (props: SVGProps<SVGElement>) => ReactElement
//   export default content
// }

// declare const __IS_DEV__: boolean

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

// модифицированный type Record, в нем делаем поля необязательными
type OptionalRecord<K extends keyof unknown, T> = {
  [P in K]?: T
}

declare interface ErrorCustom {
  errorText?: string
  buttonText?: string
}
