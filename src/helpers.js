import xml2js from 'xml2js'

export function parseRss (text) {
  xml2js.parseString(text, (err, result) => {
    return result.feed.entry
  })
}

export function formatFeed (feed){
  let reformattedRss = feed.map((obj) => {
    let rObj = {}
    rObj.title = obj['im:name'][0]
    rObj.image_url = obj['im:image'][1]['_']
    return rObj
  })
  return reformattedRss
}
