import YouTubeLike from "@/components/YouTubeLike";

export default function Home() {
    return (
        <main className="center min-h-screen gap-8 lg:gap-16 p-24 bg-zinc-100 text-black">
            <h1 className="text-2xl font-medium uppercase text-zinc-700">Micro interactions</h1>

            <div className="grid grid-cols-2">
                <div className="aspect-square bg-zinc-200 size-48 rounded-xl border border-zinc-300 shadow-md center">
                    <YouTubeLike />
                </div>
            </div>
        </main>
    );
}
