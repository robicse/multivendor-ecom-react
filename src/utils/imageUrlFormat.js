const BASE_URL = process.env.BASE_URL

const imageUrlGenerate = (name) => {
  if(name){
    return `${BASE_URL}/public/${name}`
  }
return null
}

export default imageUrlGenerate;