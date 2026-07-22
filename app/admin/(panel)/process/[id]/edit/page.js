import ProcessStepForm from "@/components/Admin/ProcessStepForm";

export default async function EditProcessStepPage({ params }) {

  return (

    <ProcessStepForm
      stepId={params.id}
    />

  );

}