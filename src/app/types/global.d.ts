declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classnames: IClassNames
  export = classnames
}

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
