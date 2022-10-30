import CartIcon from '@/components/icons/CartIcon';


export default () => {
    return (
        <section className="container mx-auto px-4 md:px-0 ">

            <p className="uppercase mb-3 text-orage-primary tracking-wide font-bold">
                Sneaker Company
            </p>

            <h2 className="font-bold text-3xl mb-4">
                Fall Limited Edition Sneakers
            </h2>

            <p className="text-dark-grayish-blue mb-5">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

            <div className="grid grid-cols-3 font-bold items-center gap-1 mb-5 md:gap-3 md:grid-cols-[1fr_3fr]">
                <span className="text-3xl ">$125.00</span>
                <span className="bg-pale-orange rounded-md py-1 px-2 text-orage-primary max-w-fit">50%</span>
                <span className="text-right text-grayish-blue text-lg md:col-span-2 md:text-left line-through">$250.00</span>
            </div>

            <div className="grid grid-cols3 font_bold gap-4 md:grid-cols-[1fr_1.7fr]">

                <div className="col-span-3 bg-light-grayish-blue py-3 rounded-md px-5 flex items-baseline justify-between md:col-span-1">
                    <button className="text-3xl text-orage-primary">-</button>
                    <span className='font-bold text-xl'>0</span>
                    <button className="text-orage-primary text-3xl">+</button>
                </div>

                <button className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orage-primary py-3 text-white-primary md:col-span-1 hover:bg-orange-600 transition-all">
                    <CartIcon fill='#fff' className="fill-white" />
                    <span>Add to cart</span>
                </button>

            </div>

        </section>
    )
}
