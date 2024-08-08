export default function Tech({ id, style, src, title }) {
  return (
    <div
      key={id}
      className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
    >
      <img src={src} alt="" className="w-20 mx-auto" />
      <p className="mt-2">{title}</p>
    </div>
  );
}
