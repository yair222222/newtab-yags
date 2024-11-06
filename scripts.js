/* eslint-disable no-undef */ /* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/{query}",
  duckduckgo: "https://duckduckgo.com/?q={query}",
  ecosia: "https://www.ecosia.org/search?q={query}",
  google: "https://www.google.com/search?q={query}",
  startpage: "https://www.startpage.com/search?q={query}",
  youtube: "https://www.youtube.com/results?q={query}",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  const url = engineUrls[engine] ?? engine
  return url.replace("{query}", value)
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"2kPs6JD7fKyeUb1A","label":"reddit","bookmarks":[{"id":"eGPL3mFzI8abkUUS","label":"r/startpages","url":"https://www.reddit.com/r/startpages/"},{"id":"44QI0covFjrQfj8k","label":"r/typescript","url":"https://www.reddit.com/r/typescript/"},{"id":"s6yVIE3x2aJhjnBU","label":"r/reactjs","url":"https://www.reddit.com/r/reactjs/"}]},{"id":"TV8k10lS1L2NLUGx","label":"design tools","bookmarks":[{"id":"7SmA6WUMqwXqtN1c","label":"pixlrx","url":"https://pixlr.com/x/"},{"id":"E41v1Y2Flf9FatXj","label":"image enlarger","url":"https://bigjpg.com/en"},{"id":"7iDTigNbF7YWQfwa","label":"haikei","url":"https://app.haikei.app/"},{"id":"tnm2XWNc3kiy1xLt","label":"css gradients","url":"https://larsenwork.com/easing-gradients/"}]},{"id":"n4LMwD4G6VrlKSZc","label":"sources","bookmarks":[{"id":"ofCn1CasRtsJpoIW","label":"icons","url":"https://feathericons.com/"},{"id":"GxeTYL3HV8A4YeLW","label":"gif","url":"https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/"},{"id":"6dCFlJ4BVbUN91yc","label":"@startpage","url":"https://prettycoffee.github.io/startpage"},{"id":"nf1FXYlo88IaJWb0","label":"author","url":"https://prettycoffee.github.io/"}]},{"id":"VMENZfdx9WQTqW4Y","label":"gif","bookmarks":[{"id":"r9X1vyFtW2ZwDhTe","label":"blade runner","url":"https://designyoutrust.com/wp-content/uploads/2021/10/111.gif"},{"id":"BjYMgjuWu6472qhD","label":"dark souls","url":"https://i.redd.it/o93fkkws9cu91.gif"},{"id":"5Tu8WAQHemJfV8oY","label":"AOT","url":"https://i.redd.it/81xmx2onvda81.gif"},{"id":"62GSGVybqLzcSqq1","label":"berserk","url":"https://i.pinimg.com/originals/91/a3/62/91a3626aea9c4a02abd86b669ec33bf2.gif"}]},{"id":"oXQqZOLk0JnUjVeT","label":"gif 2","bookmarks":[{"id":"slL4ruQjFtRkPqz8","label":"berserk 2","url":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc2b1639-e2e9-406d-bdc1-f0108ec91077/dfpl7ax-eded1cb2-b960-4fa8-81c0-f408f35c29df.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjMmIxNjM5LWUyZTktNDA2ZC1iZGMxLWYwMTA4ZWM5MTA3N1wvZGZwbDdheC1lZGVkMWNiMi1iOTYwLTRmYTgtODFjMC1mNDA4ZjM1YzI5ZGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.auAxPKjtAE9rd6fYh2kKa806R0NSbAEpir0ZpMuy8IY"},{"id":"8JlrhjAWlohT367E","label":"eva misato katsuragi car","url":"https://64.media.tumblr.com/cf503aaee3a8227f6542e4db0bede9d7/353e13c2090fab10-74/s500x750/43380d9b97743d923a14a005dbe9946e14be5074.gif"},{"id":"01v1I23O5bEP2JOl","label":"AOT 2","url":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9efa624-d617-4849-9b0f-23892c8739a6/dgrv3p7-a6b8009e-6aa2-4571-b65a-ba557db103d1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E5ZWZhNjI0LWQ2MTctNDg0OS05YjBmLTIzODkyYzg3MzlhNlwvZGdydjNwNy1hNmI4MDA5ZS02YWEyLTQ1NzEtYjY1YS1iYTU1N2RiMTAzZDEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RN5ZRhGcvnRamvUp4QQOY3TNV3EnOCqa40Hton0cOo4"}]},{"id":"cTm7TMmePihzK9hw","label":"Utilities","bookmarks":[{"id":"C8tSd3zHqO66N7Sz","label":"Whatsapp","url":"https://web.whatsapp.com/"},{"id":"6RBHRg4LtnR80cqz","label":"Gmail","url":"http://gmail.com/"},{"id":"tAL6Ak3cInWyhIXz","label":"GDrive","url":"https://drive.google.com/drive/u/0/my-drive"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
