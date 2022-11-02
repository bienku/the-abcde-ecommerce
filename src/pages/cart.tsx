import CheckoutProduct from '../components/checkoutProduct';
import Footer from '../components/footer';
import Header from '../components/header';

const Cart = () => {
    return (
        <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col font-montserrat">
            <Header />

            <div className="flex w-full max-w-6xl flex-1 flex-col justify-between sm:px-10 md:mx-auto md:mt-14 md:flex-row xl:mt-24 xl:px-0">
                <div className="order-2 pl-2 md:order-1 md:w-2/3 md:max-w-3xl md:pl-0">
                    <CheckoutProduct />
                </div>

                <div className="order-1 md:order-2">
                    <div className="p-4 text-right sm:p-0 sm:py-4">
                        <p className="text-xl font-bold lg:text-2xl xl:text-4xl">Total price:</p>
                        <p className="lg:text-lg xl:text-2xl">items:</p>
                        <button className="my-2 py-4 hover:italic">Proceed to checkout</button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Cart;

{
    /* <div className="mx-auto max-w-screen-2xl font-montserrat">
            <Header />
            <div className="flex max-w-6xl flex-col justify-between sm:px-10 md:mx-auto md:mt-14 md:flex-row xl:mt-24 xl:px-0">
                <div className="order-2 md:order-1 md:w-2/3 md:max-w-3xl">
                    <CheckoutProduct />
                    <CheckoutProduct />
                    <CheckoutProduct />
                    <CheckoutProduct />
                    <CheckoutProduct /> 

                <div className="order-1 md:order-2">
                    <div className="p-4 text-right sm:p-0 sm:py-4">
                        <p className="text-xl font-bold lg:text-2xl xl:text-4xl">Total price:</p>
                        <p className="lg:text-lg xl:text-2xl">items:</p>
                        <button className="my-2 py-4 hover:italic">Proceed to checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div> */
}