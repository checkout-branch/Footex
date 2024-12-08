


import CloudinaryGallery from './Images'
import style from './product.module.scss'


const Product = () => {



  return (
    <div className={style.topComponent}>
        {/* <ProdductCard Productlist={"Productlist"}/> */}
        <CloudinaryGallery/>
    </div>
  )
}

export default Product