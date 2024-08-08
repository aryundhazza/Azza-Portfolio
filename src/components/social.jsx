export default function Code({ id, href, download, child, style }) {
  return (
    <li
      key={id}
      className={
        "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500" +
        " " +
        style
      }
    >
      <a
        href={href}
        className="flex justify-between items-center w-full text-white"
        download={download}
        target="_blank"
        rel="noreferrer"
      >
        {child}
      </a>
    </li>
  );
}
