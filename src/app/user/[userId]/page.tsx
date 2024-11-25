export default function Login({ params }: { params: { userId: number } }) {
  return (
    <main className="h-screen flex items-center justify-center">
      <h1>Hello user {params.userId}</h1>
    </main>
  );
}
