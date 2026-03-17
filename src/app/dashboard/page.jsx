import MainLayout from "@/components/Dashboard/MainLayout";
import DashboardContent from "@/components/Dashboard/Menu/Dashboard";

export default function DashboardPage() {
  return (
    <MainLayout title="Dashboard" activeRoute="dashboard">
      <DashboardContent />
    </MainLayout>
  );
}