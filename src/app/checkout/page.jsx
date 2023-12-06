import CheckoutSummary from "@/components/CheckoutSummary";
import ConfirmOrder from "@/components/ConfirmOrder";
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

        <div className="flex flex-col lg:flex-row justify-between gap-4 py-4">
          <div className="py-3 px-8 bg-bg-secondary rounded-md lg:w-2/3">
            <ConfirmOrder />
          </div>
          <div className="py-3 px-8 bg-bg-secondary rounded-md lg:w-1/3">
            <CheckoutSummary
              title={title}
              totalPrice={totalPrice}
              tickets={tickets}
              imgPath={imgPath}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
