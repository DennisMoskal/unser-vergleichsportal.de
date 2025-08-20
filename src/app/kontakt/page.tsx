export default function KontaktPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
      <p className="text-lg mb-4">
        Du hast Fragen oder möchtest mit uns zusammenarbeiten? 
        Nutze das folgende Formular oder schreibe uns eine E-Mail.
      </p>
      <form className="flex flex-col gap-4">
        <input className="border p-2 rounded" type="text" placeholder="Name" />
        <input className="border p-2 rounded" type="email" placeholder="E-Mail" />
        <textarea className="border p-2 rounded" placeholder="Nachricht" rows={4}></textarea>
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Absenden
        </button>
      </form>
    </main>
  );
}
