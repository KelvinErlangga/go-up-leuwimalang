import MainLayout from "@/components/Dashboard/MainLayout";
import GoUpMartContent from "@/components/Dashboard/Menu/GoUpMart";

export default function GoUpMartPage() {
  return (
    <MainLayout title="Go Up Mart" activeRoute="go-up-mart">
      <GoUpMartContent />
    </MainLayout>
  );
}