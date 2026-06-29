import { CmsLayout } from "./components/layout/cms-layout";

export default function App() {
  return (
    <CmsLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Admin. Here's what's happening today.
          </p>
        </div>

        {/* Example content grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Pages", value: "24" },
            { label: "Published Posts", value: "12" },
            { label: "Active Users", value: "1,234" },
            { label: "Media Files", value: "567" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </CmsLayout>
  );
}