export default async function Home() {
  const { message } = await getData();
  return (
    <main>
      <div>{message}</div>
    </main>
  );
}

async function getData() {
  try {
    const url = process.env.EXPRESS_URL || "";
    const response = await fetch(url + "/fastapi");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const { result } = await response.json();
    console.log(result);

    return result;
  } catch (e) {
    return e.message;
  }
}
