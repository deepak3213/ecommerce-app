import Container from "@/components/Container";
import SingleProductSkeleton from "@/components/SingleProductSkeleton";

const loading = () => {
  return (
    <Container>
      {/* <h1 className="text-center text-5xl font-bold">Loading.....</h1> */}
      <SingleProductSkeleton />
    </Container>
  );
};

export default loading;
