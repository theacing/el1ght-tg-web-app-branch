import Link from "next/link";

export default async function NotFound() {
    return (
        <main className="h-full rounded-[45px] overflow-y-auto shadow-inner bg-[#ededed]">
            <div>
                <h1>Not found - 404!</h1>
                <div>
                    <Link href="/">Go back to Home</Link>
                </div>
            </div>
        </main>
    );
};