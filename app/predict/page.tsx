export default async function PredictionPage() {
  // temporarily hardcoded token for test purposes
  const token = "";
  const response = await fetch("http://localhost:3000/files/getFile", {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });

  const handleFileUpload = async (formData: FormData) => {
    "use server";

    const result = await fetch("http://localhost:3000/predict/midi", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: token,
      },
      next: {
        tags: ["test"],
      },
    });

    const response = await result.json();
  };

  return (
    <div>
      <form action={handleFileUpload}>
        <input accept="audio/midi" type="file" name="file" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
