export default function UserAsideBar() {
  const imagesLinks = ["/evento1.png", "/evento2.png", "/evento3.png"];
  return (
    <div className="w-full h-full px-10 py-5 flex flex-col space-y-5 items-center mt-20">
      <h3 className="text-white font-bold text-2xl text-center">
        Próximos eventos
      </h3>

      <div className="space-y-4 overflow-y-auto h-3/4">
        {imagesLinks.map((image) => (
          <div key={image} className="w-50 h-50">
            <div
              className={`w-full h-full bg-center bg-cover bg-no-repeat`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
