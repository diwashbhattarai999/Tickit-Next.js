// Update the import in "page.js" file
import dynamic from "next/dynamic";

const DynamicPDFView = dynamic(() => import("@/components/Pdf"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="h-full w-full bg-text-secondary">
      <DynamicPDFView />
    </div>
  );
};

export default Page;
