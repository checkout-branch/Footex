import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./images.module.scss";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { ProductsList } from "./demo";
import { addProduct, removeProduct } from "../../app/features/productSlice";
import { ToastContainer } from "react-toastify";

const CloudinaryGallery = () => {
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();
    const storeProduct = useSelector((state) => state.store.products);
    const [totalPrice, setTotalPrice] = useState(0);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleAddProduct = (product) => {
        dispatch(addProduct(product));
    };
    useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 500, // Animation duration
        });
      }, []);
    useEffect(() => {
        if (storeProduct?.length <= 2) {
            const temp = storeProduct?.reduce(
                (sum, product) => sum + Number(product?.extra || 0),
                0
            );

            setTotalPrice(temp + 999);
        } else {
            const temp = storeProduct?.reduce(
                (sum, product) => sum + product.price,
                0
            );
            setTotalPrice(temp);
        }
    }, [dispatch, isVisible, storeProduct]);

    return (
        <div className={styles.galleryContainer}>
            <ToastContainer/>
            <h1>Products</h1>
            <div className={styles.productGrid}>
                {ProductsList?.map((product) => (
                    <div key={product.id} 
                     data-aos="zoom-in-up"
                    className={styles.productItem}>
                        <div className={styles.imageWrap}>
                            <img
                                src={product.imageUrl}
                                alt={product.brand}
                                className={styles.productImage}
                            />
                            {product?.extra && (
                                <div className={styles.extra}>
                                    {product.extra} <MdOutlineCurrencyRupee /> For This Product
                                </div>
                            )}
                        </div>
                        <div className={styles.productBrand}>
                            <span>Brand: </span> {product.brand}
                        </div>
                        <div className={styles.productPrice}>
                            <span>Price:</span>
                            <div className={styles.priceWrap}>
                                {product.price} <MdOutlineCurrencyRupee />
                            </div>
                        </div>
                        <button
                            onClick={() => handleAddProduct(product)}
                            className={styles.addToCartButton}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <button className={styles.routeButton} 
            
            onClick={toggleVisibility}>
                {isVisible ? (
                    <IoClose className={styles.cartIcons} />
                ) : (
                    <IoIosCart className={styles.cartIcons} />
                )}
            </button>

            {isVisible && (
                <div className={styles.storeContainer}>
                    <div className={styles.storeWrap}>
                        <div className={styles.store}>

                            {storeProduct?.length == 0 ? <div>
                                <h2>your cart is empty</h2>
                            </div>
                                :
                                <div> <h2>Your Cart</h2>
                                    {storeProduct?.map((product) => (
                                        <div key={product.id} className={styles.productItems}>
                                            <div className={styles.storeDatats}>
                                                <img
                                                    src={product.imageUrl}
                                                    className={styles.storeImage}
                                                    alt=""
                                                />
                                                <div className={styles.datas}>
                                                    <div className={styles.productBrand}>
                                                        <span>Brand: </span> {product.brand}
                                                    </div>
                                                    <div className={styles.productPrice}>
                                                        <span>Price:</span>

                                                        <div className={styles.priceWrap}>
                                                            {product.price} <MdOutlineCurrencyRupee />
                                                        </div>
                                                    </div>
                                                    {product?.extra && (
                                                        <div className={styles.extraStore}>
                                                            {product.extra} <MdOutlineCurrencyRupee /> For This
                                                            Product
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => dispatch(removeProduct(product.id))}
                                                className={styles.addToCartButton}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            }

                            <div className={styles.totalPrice}>
                                Total: {totalPrice} <MdOutlineCurrencyRupee />
                            </div>
                            <div className={styles.setMax}>
                                <div className={styles.setMax}>
                                    {storeProduct.length<=1 && <div className={styles.setMax}>
                                        <div 
                                        data-aos="flip-left"
                                        className={styles.textDemo}>
                                            Select 2 Product Get 999 Rupees
                                        </div>
                                    </div>}
                                </div>
                            
                            </div>
                           {totalPrice!=0 &&  <button className={styles.btn}>By Now</button>}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CloudinaryGallery;
