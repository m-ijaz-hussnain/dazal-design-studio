import ProjectForm from "@/components/Admin/ProjectForm";

export default function EditProjectPage({ params }) {
  return (
    <div>
      <ProjectForm projectId={params.id} />
    </div>
  );
}