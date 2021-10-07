export default function({ store, redirect }) {
  setTimeout(() => {
    if (!store?.state?.login?.jwt) {
      return redirect('/login')
    }
  }, 0)
}

// export default function({ store, redirect }) {
//   if (store?.state?.login?.jwt) {
//     // return redirect('/login')
//     console.log('Have jwt')
//   } else if (!store?.state?.login?.jwt) {
//     console.log('EXIT')
//   }
// }
