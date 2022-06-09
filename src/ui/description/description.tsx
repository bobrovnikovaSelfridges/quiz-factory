
type Props = {
  description: string[] | string
  classname: string
  id?: string | number
  prefix?: string
}
export const Description = ({ description, prefix, classname }: Props): JSX.Element => {
  if (Array.isArray(description)) {
    return (
      <>
        {description.map(elem => (
          <div
            key={elem}
            className={classname}
            dangerouslySetInnerHTML={{ __html: (prefix ? prefix + elem : elem) }}
          />
        ))}
      </>
    )
  }
  return (
    <div
      className={classname}
      dangerouslySetInnerHTML={{ __html: (description) }}
    />
  )
}
