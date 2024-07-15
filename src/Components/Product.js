import React, { useState, useEffect } from 'react';
import './Product.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/v2/storefront/products.json", {
            mode: "cors"
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            const simplifiedProducts = data.data.map(product => {
                const imageUrl = product.relationships.images?.data?.[0]?.attributes?.url || 'default-image-url.jpg';
                return {
                    id: product.id,
                    name: product.attributes.name,
                    price: product.attributes.price,
                    imageUrl: imageUrl,
                    attributes: {
                        description: product.attributes.description,
                        available_on: product.attributes.available_on,
                        slug: product.attributes.slug,
                        meta_description: product.attributes.meta_description,
                    }
                };
            });
            setProducts(simplifiedProducts);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);

    if (products.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3 className='best-seller'>BestSeller</h3>
            <Swiper
                  spaceBetween={60}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                
            >
                {
                    products.map(product => (
                        <SwiperSlide key={product.id}>
                            <div className='product'>
                                <img src={product.imageUrl} className='product-image'  />
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
         
        </div>
        
        

    );
    
};

export default Product;

/// additional =================////


{/* <p>Description: {product.attributes.description}</p>
                        <p>Available On: {product.attributes.available_on}</p>
                        <p>Slug: {product.attributes.slug}</p> */}
                        
                       
                        {/* {product.relationships && (
                            <div>
                                <p>Relationships:</p>
                                
                               
                                {product.relationships.variants && (
                                    <div>
                                        <p>Variants:</p>
                                        <ul>
                                            {product.relationships.variants.data.map(variant => (
                                                <li key={variant.id}>{variant.id}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                
                                {product.relationships.option_types && (
                                    <div>
                                        <p>Option Types:</p>
                                        <ul>
                                            {product.relationships.option_types.data.map(optionType => (
                                                <li key={optionType.id}>{optionType.id}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                               
                                {product.relationships.product_properties && (
                                    <div>
                                        <p>Product Properties:</p>
                                        <ul>
                                            {product.relationships.product_properties.data.map(property => (
                                                <li key={property.id}>{property.id}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                               
                                {product.relationships.taxons && (
                                    <div>
                                        <p>Taxons:</p>
                                        <ul>
                                            {product.relationships.taxons.data.map(taxon => (
                                                <li key={taxon.id}>{taxon.id}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {product.relationships.images && (
                                    <div>
                                        <p>Images:</p>
                                        <ul>
                                            {product.relationships.images.data.map(image => (
                                                <li key={image.id}>{image.id}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                

                               
                                
                            </div>
                        )} */}
