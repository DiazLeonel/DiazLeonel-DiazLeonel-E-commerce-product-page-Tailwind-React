import CartIcon from '@/components/icons/CartIcon';
import { useCartDetails } from '@/context/useCartDetails';
import { useState } from 'react';
import { useContext } from 'react';

export default ({ objectProduct }) => {

    const { addCartProduct } = useContext(useCartDetails)

    const [count, setCount] = useState(1);

    const decrementCount = () => {
        if (count === 1) return
        setCount(count - 1)
    };

    const handleAddToCart = () => {
        addCartProduct({
            img: objectProduct.imagesSmall[0],
            id: objectProduct.id,
            discountPrice: (objectProduct.price * (1 - objectProduct.discount)).toFixed(2),
            title: objectProduct.title,
            quantity: count
        })
        setCount(count)
    }


    return (
        <section className="container mx-auto px-4 md:px-0 ">

            <p className="uppercase mb-3 text-orage-primary tracking-wide font-bold">
                {objectProduct.subtitle}
            </p>

            <h2 className="font-bold text-3xl mb-4">
                {objectProduct.title}
            </h2>

            <p className="text-dark-grayish-blue mb-5">
                {objectProduct.description}
            </p>

            <div className="grid grid-cols-3 font-bold items-center gap-1 mb-5 md:gap-3 md:grid-cols-[1fr_3fr]">
                <span className="text-3xl ">${(objectProduct.price * (1 - objectProduct.discount)).toFixed(2)}</span>
                <span className="bg-pale-orange rounded-md py-1 px-2 text-orage-primary max-w-fit">{objectProduct.discount * 100}%</span>
                <span className="text-right text-grayish-blue text-lg md:col-span-2 md:text-left line-through">${(objectProduct.price).toFixed(2)}</span>
            </div>

            <div className="grid grid-cols3 font_bold gap-4 md:grid-cols-[1fr_1.7fr]">




                <div className="col-span-3 bg-light-grayish-blue py-3 rounded-md px-5 flex items-baseline justify-between md:col-span-1">
                    <button className="text-3xl text-orage-primary" onClick={decrementCount}>-</button>
                    <span className='font-bold text-xl'>{count}</span>
                    <button className="text-orage-primary text-3xl" onClick={() => { setCount(count + 1) }}>+</button>
                </div>

                <button onClick={handleAddToCart}
                    className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orage-primary py-3 text-white-primary md:col-span-1 hover:bg-orange-600 transition-all">
                    <CartIcon fill='#fff' className="fill-white" />
                    <span>Add to cart</span>
                </button>

            </div>

        </section>
    )
}
