import Checkout from "@/components/checkoutPage/Checkout";
import Container from "@/components/Container";
import Nav from "@/components/Nav";

const page = ({ searchParams }) => {
  const title = searchParams.title;
  const totalPrice = searchParams.price;
  const tickets = searchParams.tickets;
  const imgPath = searchParams.imgPath;

  return (
    <div>
      <Nav />
      <Container>
        <h1 className=" mt-6 mb-8 text-text-primary text-3xl font-semibold">
          Order Confirmation
        </h1>
        <span className="bg-text-secondary h-[1px] w-full block" />
        <Checkout
          title={title}
          totalPrice={totalPrice}
          tickets={tickets}
          imgPath={imgPath}
        />
      </Container>
    </div>
  );
};

export default page;
