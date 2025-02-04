type propsType = {
  title: string;
  description: string;
};

function ServiceCard({ title, description }: propsType) {
  return (
    <div className="flex min-h-64 w-full flex-col gap-4 rounded-3xl border border-[#FFFFFF14] px-8 py-10 backdrop-blur-xl">
      <h5 className="text-3xl font-black text-background">{title}</h5>
      <p className="text-xl font-light">{description}</p>
    </div>
  );
}
export default ServiceCard;
