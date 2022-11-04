import { useContext } from "react";
import { useCartDetails } from "@/context/useCartDetails";

import IconDelete from '@/components/icons/IconDelete';

export default () => {

    const { cartProduct, deleteCartProduct } = useContext(useCartDetails)

    return (
        <section className='absolute top-[110%] left-0 w-full z-10 md:max-w-lg md:left-full md:-translate-x-full'>


            <div className='mx-2 bg-white rounded-xl shadow-2xl'>
                <h4 className='p-6 font-bold text-lg'>Cart</h4>
                <hr />

                {
                    cartProduct.length === 0 && (<p className="py-20 text-center text-grayish-blue">Your cart is empty</p>)
                }

                {
                    cartProduct.map(product => (
                        <article key={product.id} className='p-10 grid gap-6 grid-cols-[1fr_4fr_1fr] px-6 py-8 items-center'>
                            <img
                                src={product.img}
                                alt="fsdfsdf"
                                className='rounded-xl'
                            />
                            <div >
                                <h6>{product.title}</h6>
                                <p>
                                    <span>${product.discountPrice} x {product.quantity}</span>{' '}
                                    <span className='font-bold pl-2'>
                                        ${(product.discountPrice * product.quantity).toFixed(2)}
                                    </span>
                                </p>
                            </div>


                            <button className='ml-auto' onClick={() => deleteCartProduct(product.id)}>
                                <IconDelete className='hover:fill-orage-primary scale-150' />
                            </button>
                        
                        
                        </article>
                    ))
                }

                {
                    cartProduct.length !== 0 && (<div className='px-6 pb-8'>
                        <button className="bg-orage-primary w-full py-4 rounded-xl text-white hover:bg-orange-600 transition-all">Checkout</button>
                    </div>)
                }

            </div>


        </section>
    )
}
