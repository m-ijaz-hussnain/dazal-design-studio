import Sidebar from "@/components/Sidebar";
import { socials } from "@/mocks/socials";
import { links } from "@/mocks/links";

export default function WebsiteLayout({ children }) {
  return (
    <main
      style={{
        display: "flex",
      }}
    >
      <Sidebar
        links={links}
        socials={socials}
      />

      {children}
    </main>
  );
}