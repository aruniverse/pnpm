import * as configCmd from './config'
import { ConfigCommandOptions } from './ConfigCommandOptions'

export const rcOptionsTypes = configCmd.rcOptionsTypes
export const cliOptionsTypes = configCmd.cliOptionsTypes
export const help = configCmd.help

export const commandNames = ['get']

export async function handler (opts: ConfigCommandOptions, params: string[]) {
  return configCmd.handler(opts, ['get', ...params])
}
