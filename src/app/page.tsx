import YouTubeLike from '@/components/YouTubeLike';

export default function Home() {
    return (
        <main className="flex flex-col lg:items-center min-h-screen gap-8 lg:gap-16 p-8 lg:p-24 bg-white text-content">
            <div className="lg:center">
                <h1 className="text-3xl font-medium uppercase [word-spacing:0.5rem]">Micro interactions</h1>
                <p className="text-lg text-content/80">Click to interact</p>
            </div>

            <div className="grid grid-cols-2">
                <div className="aspect-square bg-background h-full w-full lg:size-48 rounded-xl border border-content/10 shadow-md center">
                    <YouTubeLike />
                </div>
            </div>
        </main>
    );
}
