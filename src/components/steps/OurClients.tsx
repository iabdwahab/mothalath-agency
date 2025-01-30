import Container from "../Container";

function OurClients() {
  const clientsLogosList = [];

  for (let i = 1; i <= 8; i++) {
    clientsLogosList.push(`/mothalath-agency/imgs/our_clients/client-${i}.png`);
  }

  const clientsLogosElements = clientsLogosList.map((logo, index) => {
    return (
      <div key={index}>
        <img src={logo} alt="Image" className="h-10 w-24 object-contain" />
      </div>
    );
  });

  console.log(clientsLogosElements);

  return (
    <section className="">
      <Container className="grid grid-cols-4 flex-wrap items-center justify-center gap-8 lg:flex">
        {clientsLogosElements}
      </Container>
    </section>
  );
}
export default OurClients;
