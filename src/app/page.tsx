import DraftForm from "./components/DraftForm";
import MaxWidthWrapper from "./components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="flex flex-col justify-center text-center">
      <div>
        <DraftForm/>
      </div>
    </MaxWidthWrapper>
  );
}
