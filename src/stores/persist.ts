// import { writable } from 'svelte/store'
// import localforage from 'localforage'

// export const persistStore = (key, initial) => {
//         const persist = localforage.getItem(key)
//         const data = persist ? JSON.parse(persist) : initial
//   //if sub is broken, sets value to current local storage value
//   const store = writable(data, () => {
//       const unsubscribe = store.subscribe(value => {
//           localforage.setItem(key, JSON.stringify(value))
//         })
//         return unsubscribe
//     })
//     return store
// }