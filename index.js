globalThis.adUrl = "https://raw.githubusercontent.com/darkLo1rd/database/refs/heads/main/database.json"
globalThis.pluginsUrl = "https://raw.githubusercontent.com/darkLo1rd/database/refs/heads/main/pluginsKu.json"

export const downloaders = await import('./lib/downloader.js')
export const ai = await import('./lib/ai.js')
export const religion = await import('./lib/religion.js')
export const search = await import('./lib/searching.js')
export const tools = await import('./lib/tools.js')
export const func = await import('./lib/function.js')