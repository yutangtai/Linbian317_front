import axios from 'axios'
import Compressor from 'compressorjs'

export default async ({ app, router, store, Vue }) => {
  document.getElementById('file').addEventListener('change', (e) => {
    const file = e.target.files[0]

    if (!file) {
      return
    }

    const compressor = new Compressor(file, {
      quality: 0.6,

      success (result) {
        const formData = new FormData()
        formData.append('file', result, result.name)

        axios.post('/path/to/upload', formData).then(() => {
          console.log('Upload success')
        })
      },
      error (err) {
        console.log(err.message)
      }
    })
    console.log(compressor)
  })
}
