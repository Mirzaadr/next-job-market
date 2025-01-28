import Spinner from "@/components/common/Spinner";

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner size="icon" />
    </div>
  );
};

export default Loading;
