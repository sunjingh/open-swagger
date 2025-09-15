import { ParsedInterface } from '..'

const genInterface = ({
  formatName,
  props,
  code,
  description,
}: ParsedInterface, forceRequired: boolean): string =>
  code
    ? code
    : `${
        description ? `/** ${description} */\n` : ''
      }export interface ${formatName} {
        ${
          props &&
          Object.entries(props).map(
            ([propName, prop]) =>
              `${prop.description ? `\n/** ${prop.description} */` : ''}
            '${propName}' ${prop.required || forceRequired ? '' : '?'}: ${prop.formatType}
            `
          )
        }
      }
`

export { genInterface }
