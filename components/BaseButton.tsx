"use client";

type Props = {
  text?: string;
  borderRadius?: "small" | "full";
  width?: "32" | "64";
  className?: string;
  loadingState?: "idle" | "loading" | "success" | "error";
  disabled?: boolean;
  onClick?: () =>
    | void
    | ((e: React.MouseEvent<Element, MouseEvent>) => void)
    | (() => Promise<void>)
    | Promise<void>;
};

export default function BaseButton({
  text,
  borderRadius,
  width,
  className,
  onClick,
  loadingState,
  disabled,
}: Props) {
  const buttonClassName = `px-8 text-center bg-blue-500 py-4 shadow-2xl cursor-pointer active:scale-90 transition duration
  ${borderRadius === "small" ? "rounded-lg" : "rounded-full"}
  ${width === "32" ? "w-32" : "w-64"}
  ${className}
  ${loadingState === "idle" ? "bg-red-500 hover:bg-red-600" : ""}
  ${loadingState === "loading" ? "bg-blue-500 hover:bg-blue-600" : ""}
  ${loadingState === "success" ? "bg-green-500 hover:bg-green-600" : ""}
  ${loadingState === "error" ? "bg-red-500 hover:bg-red-600" : ""}
  ${
    disabled
      ? "bg-gray-500 border-gray-500 hover:bg-gray-500 cursor-not-allowed"
      : ""
  }
`;

  function loader() {
    return (
      <div
        className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    );
  }

  return (
    <button disabled={disabled} onClick={onClick} className={buttonClassName}>
      {!loadingState && text}
      {loadingState === "idle" && text}
      {loadingState === "success" && "Success!"}
      {loadingState === "error" && "Error!"}
      {loadingState === "loading" && loader()}
    </button>
  );
}
